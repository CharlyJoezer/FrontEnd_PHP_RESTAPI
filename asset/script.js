$(document).ready(function(){
    $.ajax({
        url : "http://localhost:8000/api/product/get",
        type : 'GET',
        dataType : 'JSON',
        success : function(data){
            const product = data.data.product;
            for(i = 0; i < product.length; i++){
                $('.list-product').append(`
                <div class="box-product">
                    <div class="product-header">
                        <img src="../storage/product.png" alt="">
                    </div>
                    <div class="product-desc">
                        <div class="product-name">`+product[i]['name']+`</div>
                        <div class="product-price">Rp. <span>`+product[i]['price']+`</span></div>
                    </div>
                </div>
                `)
            }
        }
    })
})