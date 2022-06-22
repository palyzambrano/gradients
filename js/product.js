// Toma url de la pagina y crea un objeto URL con el string
var link = new URL(window.location.href);
// Usando el objeto URL tomo el query param para producto
var producto = link.searchParams.get('producto');

// Escribe el contenido del JSON en el query param
// en el documento
document.writeln(producto);