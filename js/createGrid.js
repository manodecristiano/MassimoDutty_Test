let json_Products = [{

    title: "Chaqueta Otoño",
    paragraph: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnamvoluptate perferendis similique cum vero",
    imageUrl: "/assets/images/model_01.png"
},{ 
    title: "Jerséis para mujer ",
    paragraph: "Lorem ipsum dconsecteturolor sm ipsum dconsecteturolor sit amet consectit m ipsum dconsecteturolor sit amet consectm ipsum dconsecteturolor sit amet consectamet consectetur adipcoicing elit. Magnamvoluptate perferendis similique cum vero",
    imageUrl: "/assets/images/model_01.png"
},{
    title: "Vestidos",
    paragraph: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnamvoluptate perferendis similique cum vero",
    imageUrl: "/assets/images/model_01.png"

},{ 
    title: "Zapatos Masculino",
    paragraph: "Lorem ipsum dconsecteturomet cperferendis similique cum vero Lorem ipsum dconsecteturomet cperferendis similique cum vero",
    imageUrl: "/assets/images/model_01.png"
},{
    title: "Cuello alto",
    paragraph: "Lorem ipsum  ",
    imageUrl: "/assets/images/model_01.png"
    
},{ 
    title: "Básicos",
    paragraph: "Lorem ipsum ",
    imageUrl: "/assets/images/model_01.png"
},{
    title: "Camisas ",
    paragraph: "Lorem ipsum ",
    imageUrl: "/assets/images/model_01.png"
    
},{
    title: "Bolso",
    paragraph: "Lorem ipsum ",
    imageUrl: "/assets/images/model_01.png"
    
},{ 
    title: "Faldas",
    paragraph: "Lorem ipsum dcectamet consectetur adipconsec elit. Magnamvoluptate perferendis similique cum vero",
    imageUrl: "/assets/images/model_01.png"
},{
    title: "Jeans",
    paragraph: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnamvoluptate perferendis similique cum vero",
    imageUrl: "/assets/images/model_01.png"
    
},
{
    title: "Plumifero y Acolchados",
    paragraph: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnamvoluptate perferendis similique cum vero",
    imageUrl: "/assets/images/model_01.png"
    
},
];



const div_product = document.getElementById("products");
let item='';
function showDivsfromJson() {
    let divs = json_Products.map(item => `<div class='col-ms hey p-8 m-8'> <div class='text-left pb-3 container-4'> <img src=${item.imageUrl} alt="imagen de modelo"><h4 class='h4'>${item.title}</h4> <p>${item.paragraph}</p> </div></div>`)
        .join("")
        div_product.innerHTML += divs
}
showDivsfromJson();

