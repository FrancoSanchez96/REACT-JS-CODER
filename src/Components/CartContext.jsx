import React ,{useContext , useState, createContext} from "react";

const CartContext = createContext();

const useCartContext = () => useContext (CartContext);

export  const CartContextProvider = ({children}) => {
    const [itemsCart, setItemsCart] = useState ([]);
    


    const isInCart =(id) =>{
        return itemsCart.some( (item)=>{
            return item.id ===id;
        })
    }

    const clearCart = () =>{
        setItemsCart([]);
        return true;
      }
    

    const addItem =(item,qty) =>{
        if(isInCart(item.id)){
            let itemToAdd = itemsCart.find((itemInCart)=>{
                return itemInCart.id===item.id;
            });

            itemToAdd.qty +=qty;

            let filteredCart = itemsCart.filter((itemInCart)=>{
                return itemInCart.id === item.id
            });
            setItemsCart([...filteredCart,...itemToAdd])
        }
        else setItemsCart([...itemsCart,{...item,qty}]);
    }



    const QtyCart =()=>{
        let totalItems = itemsCart.reduce((total,item)=>{
            return (total + item.qty)
        },0)
        return totalItems;
    }


    return(
        <CartContext.Provider value={{itemsCart ,addItem ,QtyCart,isInCart,clearCart}}>
            {children}
        </CartContext.Provider>
    )
}

export default useCartContext;