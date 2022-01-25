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
        return itemsCart.reduce((total,item)=>{
            return (total + item.qty)
        },0)
        
    }

    const removeFromCart = (id)=>{
        //devolvemos el array productos en el carrito, filtrando solo items que no tengan el ID solicitado
        let filteredCart = itemsCart.filter( (item) =>{
            return item["id"] !== id
        });
        setItemsCart(filteredCart);
        return filteredCart;
      }


    return(
        <CartContext.Provider value={{itemsCart ,addItem ,QtyCart,isInCart,clearCart,removeFromCart}}>
            {children}
        </CartContext.Provider>
    )
}

export default useCartContext;