import ProductManager from "./managers/productManager.js";

const productManager = new ProductManager();

const context = async () => {
    const test = await productManager.getProducts();
    //console.log(test)

   

  
    //Agrego un producto con todos sus campos
    //await productManager.addProducts({'title':'Rolex GMT MasteII', 'description':'This model features a black dial and a two-colour Cerachrom bezel insert in blue and black ceramic', 'price': 23950, 'thumbnail':'thumbnail', 'code':'WARO','stock': 3})
    //await productManager.addProducts({'title':'Rolex Submariner', 'description':'The Submariner's design has been entirely dictated by the practical needs of divers.', 'price': 14500, 'thumbnail':'thumbnail', 'code':'WARO','stock': 10})
    //await productManager.addProducts({'title':'Cartier Tank Francaise', 'description':' Steel case set with 24 brilliant-cut diamonds totaling 0.49 carats', 'price': 5500, 'thumbnail':'thumbnail', 'code':'WACA','stock': 5})
    //await productManager.addProducts({'title':'Cartier Ballon Blanc', 'description':'Ballon Bleu de Cartier watch, 33 mm', 'price': 6250, 'thumbnail':'thumbnail', 'code':'WACA','stock': 5})
    //await productManager.addProducts({'title':'Panerai Luminor BiTempo', 'description':'Automatic mechanical, P.9012 calibre', 'price': 10000, 'thumbnail':'thumbnail', 'code':'WAPA','stock': 12})
    //await productManager.addProducts({'title':'Panerai Submersible QuarantaQuattro ESteel™ Blu Profondo', 'description':'Automatic mechanical, P.900 calibre', 'price': 11000, 'thumbnail':'thumbnail', 'code':'WAPA','stock': 9})
    //await productManager.addProducts({'title':'Panerai Radiomir Quaranta"', 'description':'lack sun-brushed with luminous Arabic numerals', 'price': 6000, 'thumbnail':'thumbnail', 'code':'WAPA','stock': 2})
    //await productManager.addProducts({'title':'AP ROYAL OAK', 'description':'"With its steel case, octagonal bezel, “Tapisserie” dial and integrated bracelet', 'price': 42950, 'thumbnail':'thumbnail', 'code':'WAAP','stock': 1})
    //await productManager.addProducts({'title':'Chopard Mille Miglia', 'description':'Stainless Steel Rubber 39mm Mille Miglia Chronograph Automatic Watch Silver', 'price': 2995, 'thumbnail':'thumbnail', 'code':'WACH','stock': 5})
    //await productManager.addProducts({'title':'Chopard Happy Diamonds', 'description':'Contemporary, refined, assertive, the sporty-chi', 'price': 6740, 'thumbnail':'thumbnail', 'code':'WACH','stock': 10})

}

context();