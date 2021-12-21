const object =[
    {
        id: 1,
        name:'Teclado Red Dragon IIV',
        price:8000,
        img:"https://i.ibb.co/mydGNqk/teclado-red-dragon.jpg",
        description:'Teclado Mecanico con luced LED inalambrico alta respuesta',
        category: 'Accesorios',
        stock: 20
    },
    {
        id: 2,
        name:'Mouse Genius PRO SCORPION',
        price:4000,
        img:"https://i.ibb.co/Gx0Z3Pp/auriculares-hyperx.jpg",
        description:'Mouse GAMER 5000 dpi con Software y Diseño ',
        category: 'Accesorios',
        stock: 10
    },
    {
        id: 3,
        name:'Auriculares HyperX PRO',
        price:10000,
        img:"https://i.ibb.co/TgTS1hP/mouse-genius-scorpion.jpg",
        description:'Auriculaes con sonido Ultra HD 4k Sensibit high LED',
        category: 'Accesorios',
        stock: 5
    },

    {
        id: 4,
        name:'Notebook Alienware Gamer',
        price:250000,
        img:"https://i.ibb.co/BLQjQJT/alienware-17-r4-1.jpg",
        description:'Notebook gamer i7 1TB 16GB  GTX 1880',
        category: 'Notebook',
        stock: 5
    },
    {
        id: 5,
        name:'Notebook HP Pavilon',
        price:150000,
        img:"https://i.ibb.co/TvMpQ5T/hp-pavilon.jpg",
        description:'Notebook gamer i7 1TB 16GB  GTX 1880',
        category: 'Notebook',
        stock: 10
    },
    {
        id: 6,
        name:'Notebook MSI Gamer',
        price:200000,
        img:"https://i.ibb.co/sKFH38z/mse-gamer-corei7.jpg",
        description:'Notebook gamer i7 1TB 16GB  GTX 1880',
        category: 'Notebook',
        stock: 3
    },
    {

    id: 7,
    name:'Notebook Acer NITRO',
    price:210000,
    img:"https://i.ibb.co/3MS4qW0/1-16.jpg",
    description:'Notebook gamer i7 1TB 16GB  GTX 1880',
    category: 'Notebook',
    stock: 3
    },

    {

    id: 8,
    name:'Play Station 5',
    price:180000,
    img:"https://i.ibb.co/G52XB5b/play-5.jpg",
    description:'1 tb 2 joystick +1 juego',
    category: 'Consolas',
    stock: 2

    },

    {

    id: 9,
    name:'Play Station 4',
    price:80000,
    img:"https://i.ibb.co/JxkJjmF/ps4.png",
    description:'1 tb 2 joystick +1 juego',
    category: 'Consolas',
    stock: 2

    }



]



export const getItems = () =>{
    return new Promise ((resolve,reject)=>{
        setTimeout(()=> resolve(object),3000)
    })
}

/* Item detail  */

export const getItemDetail = (id) =>{
    return new Promise ((resolve,reject)=>{
        const product = object.find(prod => parseInt(prod.id)=== parseInt(id))
        setTimeout(()=>resolve(product),2000)
    })
}

export const getCategory = (categoryId) =>{
    return new Promise ((resolve,reject)=>{
        setTimeout(()=>{
            categoryId ? resolve(object.filter(item =>item.category === categoryId))
            :
            resolve(object)
            
        },1000)
    })

    

}