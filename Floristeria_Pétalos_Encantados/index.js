$(document).ready(function(){
    
    // AGREGANDO CLASE ACTIVE AL PRIMER ENLACE -----------------------------------
    $('.category_list .category_item[category="all"]').addClass('ct_item-active');

    // FILTRANDO PRODUCTOS -------------------------------------------------------
    $('.category_item').click(function(){
        var catProduct = $(this).attr('category');
        console.log(catProduct);

        // AGREGANDO CLASE ACTIVE AL ENLACE SELECCIONADO -------------------------
        $('.category_item').removeClass('ct_item-active');
        $(this).addClass('ct_item-active');

        // OCULTANDO PRODUCTOS ---------------------------------------------------
        $('.product-item').hide();

        // MOSTRANDO PRODUCTOS ---------------------------------------------------
        $('.product-item[category="'+catProduct+'"]').show();
    });

    // MOSTRANDO TODOS LOS PRODUCTOS ---------------------------------------------
    $('.category_item[category="all"]').click(function(){
        $('.product-item').show();
    });
});