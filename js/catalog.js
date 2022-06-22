$(document).ready(function () {
    function crearTagPrecio(variants) {
        var priceEl = $('<span>');

        if (variants.length > 1) {
            return priceEl.text('Mas de un precio');
        }

        return priceEl.text('CLP ' + variants[0].price);
    }

    function crearCardProducto(data) {
        var brand = $('<h6 class="card-text">').text(data.brand);
        var title = $('<h4 class="card-title">').text(data.name);
        var photo = $('<img>')
            .attr('src', data.photo)
            .attr('height', 300)
            .attr('width', 300);
        var price = crearTagPrecio(data.variants);
        var cardProduct = $('<a>')
            .attr('class', 'card col-md-3 m-3 p-2')
            .attr('href', 'product.html?producto=' + encodeURIComponent(JSON.stringify(data)))
            .append(photo)
            .append(brand)
            .append(title)
            .append(price);

        $('#contentProducts').append(cardProduct);
    }

    function cargarDatos() {
        var productList = 'https://gist.githubusercontent.com/palyzambrano/e956e7130ff40d599d51045bd87f9997/raw/a332c1da732498857183cb40df1501ad104e4dbf/productos.json';
        $('#contentProducts');
        $.ajax(productList)
            .done(function (response) {
                var productos = JSON.parse(response);

                productos.forEach(crearCardProducto);
            });
    }
    cargarDatos();
});
