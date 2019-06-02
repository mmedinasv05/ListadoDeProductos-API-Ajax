$(document).ready(function(){
    $('#btn-product-show').click(function(){
        getProduct();
    });

    function getProduct(){
        $.ajax({
            url: "https://mini-shop-rg.herokuapp.com/products",
            type: "GET",
            dataType: "json",
            success: function(respuesta){
                var divlistaProduct = $('#container-product');
                var listProduct = respuesta;
                console.log(respuesta);
                for(var i = 0; i <= listProduct.length; i++){
                    var product = listProduct[i];
                    divlistaProduct.append(`
                        <div class='card-product'>
                            <img src=${product.image}>
                            <p><strong>PRODUCTO: </strong> ${product.name}</p>
                            <p><strong>PRECIO: </strong> $${product.price}</p>
                            <p><strong>DESCRIPCION: </strong> ${product.description}</p>
                        </div>
                    `);
                }
            },
            error: function(error){
                console.log(error);
            },
            complete: function(complete){
                console.log(complete);
            }
        });
    }
});