const productos = [
    {
        id: "camiseta-lebron",
        titulo: "Camiseta LAL LeBron James",
        imagen: "https://images.footballfanatics.com/los-angeles-lakers/los-angeles-lakers-nike-association-edition-swingman-jersey-white-lebron-james-unisex_ss5_p-13348348+u-iprkpj59rjbp3d8yk6vw+v-mgeb9v5ijnyiakymkeo4.jpg?_hv=2&w=900",
        categoria: {
            nombre: 'Camisetas',
            id: 'camisetas'
        },
        precio: 119,
    } ,

    {
        id: "camiseta-jokic",
        titulo: "Camiseta DEN Nikola Jokic",
        imagen: "https://images.footballfanatics.com/denver-nuggets/denver-nuggets-jordan-statement-edition-swingman-jersey-blue-nikola-jokic-unisex_ss4_p-13365083+u-wxs3f8kfictr5kxjzwuo+v-bfbde7130233452b848ec98f71289d9f.jpg?_hv=2&w=900",
        categoria: {
            nombre: 'Camisetas',
            id: 'camisetas'
        },
        precio: 119,
    } ,

    {
        id: "camiseta-bird",
        titulo: "Camiseta BOS Larry Bird",
        imagen: "https://images.footballfanatics.com/boston-celtics/womens-mitchell-and-ness-larry-bird-kelly-green-boston-celtics-1985-86-hardwood-classics-swingman-jersey_pi3784000_altimages_ff_3784615-9975d6d403d8f24f3b19alt1_full.jpg?_hv=2&w=900",
        categoria: {
            nombre: 'Camisetas',
            id: 'camisetas'
        },
        precio: 149,
    },

    {
        id: "camiseta-jordan",
        titulo: "Camiseta CHI Michael Jordan",
        imagen: "https://fanatics.frgimages.com/chicago-bulls/youth-mitchell-and-ness-michael-jordan-red-chicago-bulls-1984/85-hardwood-classics-authentic-jersey_pi4729000_altimages_ff_4729932-3fc9f06cd27b6ca646b9alt1_full.jpg?_hv=2&w=900",
        categoria: {
            nombre: 'Camisetas',
            id: 'camisetas'
        },
        precio: 149,
    },

    {
        id: "camiseta-curry",
        titulo: "Camiseta GSW Stephen Curry",
        imagen: "https://fanatics.frgimages.com/golden-state-warriors/mens-mitchell-and-ness-stephen-curry-navy-golden-state-warriors-hardwood-classics-swingman-jersey_pi4147000_altimages_ff_4147140-08554c382e7185cc2d5aalt1_full.jpg?_hv=2&w=900",
        categoria: {
            nombre: 'Camisetas',
            id: 'camisetas'
        },
        precio: 119,
    }
    ,
    {
        id: "pantalon-chicago",
        titulo: "Pantalón corto Chicago Bulls",
        imagen: "https://images.footballfanatics.com/chicago-bulls/chicago-bulls-jordan-statement-swingman-shorts-mens_ss4_p-12015416+u-gc5sjdqiaskfap89fh8h+v-6a33541f0cbf4bc3985b3230e9a120fa.jpg?_hv=2&w=900",
        categoria: {
            nombre: 'Pantalones',
            id: 'pantalones'
        },
        precio: 79,
    }

    ,
    {
        id: "pantalon-warriors",
        titulo: "Pantalón corto Golden State Warriors",
        imagen: "https://fanatics.frgimages.com/golden-state-warriors/mens-nike-black-golden-state-warriors-2023/24-city-edition-swingman-shorts_ss5_p-5362565+pv-1+u-tqp8jhfljnljdtq6ugmd+v-6cayxnrlvjxuovufqene.jpg?_hv=2&w=900",
        categoria: {
            nombre: 'Pantalones',
            id: 'pantalones'
        },
        precio: 79,
    }

    ,
    {
        id: "pantalon-lakers",
        titulo: "Pantalón corto Los Angeles Lakers",
        imagen: "https://fanatics.frgimages.com/los-angeles-lakers/mens-jordan-brand-purple-los-angeles-lakers-statement-edition-swingman-shorts_pi3763000_altimages_ff_3763986-d7b4d2d76491268bbf86alt1_full.jpg?_hv=2&w=900",
        categoria: {
            nombre: 'Pantalones',
            id: 'pantalones'
        },
        precio: 79,
    }

    ,
    {
        id: "pantalon-sixers",
        titulo: "Pantalón corto Philadelphia 76ers",
        imagen: "https://fanatics.frgimages.com/philadelphia-76ers/mens-fanatics-branded-royal-philadelphia-76ers-slice-shorts_ss5_p-5248759+pv-1+u-nzbjk1cw8cibvwwf7kf1+v-grfmpwk5qftsqibnulk5.jpg?_hv=2&w=900",
        categoria: {
            nombre: 'Pantalones',
            id: 'pantalones'
        },
        precio: 79,
    }

    ,
    {
        id: "pantalon-boston",
        titulo: "Pantalón corto Boston Celtics",
        imagen: "https://fanatics.frgimages.com/boston-celtics/mens-nike-white/kelly-green-boston-celtics-2021/22-classic-edition-swingman-performance-shorts_pi4252000_altimages_ff_4252245-d28d6869b79feb121232alt1_full.jpg?_hv=2&w=900",
        categoria: {
            nombre: 'Pantalones',
            id: 'pantalones'
        },
        precio: 79,
    }

    ,
    {
        id: "zapatillas-lebron",
        titulo: "Zapatillas Nike LeBron XVIII",
        imagen: "../img/NikeLebron18.jpg",
        categoria: {
            nombre: 'Zapatillas',
            id: 'zapatillas'
        },
        precio: 229,
    }

    ,
    {
        id: "zapatillas-curry",
        titulo: "Zapatillas Under Armour Curry 10",
        imagen: "../img/UnderArmourCurry10.jpg",
        categoria: {
            nombre: 'Zapatillas',
            id: 'zapatillas'
        },
        precio: 189,
    }

    ,
    {
        id: "zapatillas-pg",
        titulo: "Zapatillas Nike PG2 Playstation",
        imagen: "../img/NikePg2Playstation.jpg",
        categoria: {
            nombre: 'Zapatillas',
            id: 'zapatillas'
        },
        precio: 269,
    }

    ,
    {
        id: "zapatillas-kyrie",
        titulo: "Zapatillas Nike Kyrie Irving Infinity",
        imagen: "../img/NikeKyrieIrvingInfinity8.jpg",
        categoria: {
            nombre: 'Zapatillas',
            id: 'zapatillas'
        },
        precio: 229,
    }

    ,
    {
        id: "zapatillas-lamelo",
        titulo: "Zapatillas Puma Lamelo Ball MB1",
        imagen: "../img/PumaLameloBallMB1.jpeg",
        categoria: {
            nombre: 'Zapatillas',
            id: 'zapatillas'
        },
        precio: 309,
    }
];

const contenedorProductos = document.querySelector("#contenedor-productos");
const botonesCategorias = document.querySelectorAll(".boton-categoria");
const tituloPrincipal = document.querySelector("#titulo-principal");
let botonesAgregar = document.querySelectorAll(".producto-agregar");
const numerito = document.querySelector("#numerito");


function cargarProductos(productosElegidos){

    contenedorProductos.innerHTML = "";

    productosElegidos.forEach(producto => {

        const div = document.createElement("div");
        div.classList.add("producto");{}
        div.innerHTML = `
            <img class="producto-imagen" src="${producto.imagen}" alt="${producto.titulo}">
                        <div class="producto-detalles">
                            <h3 class="producto-titulo">${producto.titulo}</h3>
                            <p class="producto-precio">$${producto.precio}</p>
                            <button class="producto-agregar" id="${producto.id}">Agregar</button>
                        </div>
        `

        contenedorProductos.append(div);
    })

    actualizarBotonesAgregar();
}

cargarProductos(productos);

botonesCategorias.forEach(boton => {
    boton.addEventListener("click", (e) => {

        botonesCategorias.forEach(boton => boton.classList.remove("active"));
        e.currentTarget.classList.add("active");
        if(e.currentTarget.id != "todos"){
           const productosElegidos = productos.filter(producto => producto.categoria.id === e.currentTarget.id);
           tituloPrincipal.innerText = productosElegidos[0].categoria.nombre;
           cargarProductos(productosElegidos);
        }else{
            tituloPrincipal.innerText = "Todos los productos";
            cargarProductos(productos);
        }
    })
});

function actualizarBotonesAgregar(){
    botonesAgregar = document.querySelectorAll(".producto-agregar");

    botonesAgregar.forEach(boton => {
        boton.addEventListener("click", agregarAlCarrito);
    })
}

const productosEnCarrito = [];

function agregarAlCarrito(e){

    const idBoton = e.currentTarget.id;
    const productoAgregado = productos.find(producto => producto.id === idBoton);
    
    if(productosEnCarrito.some(producto => producto.id === idBoton)){
        const index = productosEnCarrito.findIndex(producto => producto.id === idBoton);
        productosEnCarrito[index].cantidad ++;
    }else{
        productoAgregado.cantidad = 1;
       productosEnCarrito.push(productoAgregado);
    }

    actualizarNumerito();
    
    localStorage.setItem("productos-en-carrito", JSON.stringify(productosEnCarrito));
}

function actualizarNumerito(){
    let nuevoNumerito = productosEnCarrito.reduce((acc, producto) => acc + producto.cantidad, 0);
    numerito.innerText = nuevoNumerito;
}

module.exports = productos; 