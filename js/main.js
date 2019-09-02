const produtos = document.querySelectorAll(".produto img");

function setProduct() {
    produtos.forEach((produto) => {
        produto.setAttribute('src', '../carousel/carousel-produtos/assets/tenis.png');
    })
}
setProduct();