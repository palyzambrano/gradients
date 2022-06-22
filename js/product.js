// Toma url de la pagina y crea un objeto URL con el string
var link = new URL(window.location.href);
// Usando el objeto URL tomo el query param para producto
var producto = link.searchParams.get('producto');

var productoObject = JSON.parse(producto);


var photoEl = $('#photo');
photoEl.attr('src', productoObject.photo);

var brandEl = $('#brand');
brandEl.text(productoObject.brand);

var titleEl = $('#title');
titleEl.text(productoObject.name);

var descriptionEl = $('#description');
descriptionEl.text(productoObject.description);

var attributesEl = $('#attributes');
attributesEl.text(productoObject.attributes)


var useEl = $('#howUse')
useEl.text(productoObject.how_to_use)