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
attributesEl.text(productoObject.attributes);

var useEl = $('#howUse');
useEl.text(productoObject.how_to_use);

//Crea el bloque con el comentario
function makeCommentBlock(username, content) {
    var crearFecha = new Date();
    var fechaComoString = crearFecha.toLocaleString();
    var partesDeFecha = fechaComoString.split(' ');
    var fechaDeCreacion = partesDeFecha.join(' a las ');

    var listItemEl = $('<li>')
        .attr('class','wrappercomment');
    var usernameEl = $('<h4>');
    var contentEl = $('<p>');
    var dateEl = $('<span>');

    usernameEl.text(username);
    contentEl.text(content);
    dateEl.text(fechaDeCreacion);

    listItemEl.append(dateEl).append(usernameEl).append(contentEl);
    $('#commentsList').prepend(listItemEl);
}

//Toma el valor del input "comentarios" y lo refleja
$('#mostrarComentario').click(function () {
    var contentTextAreaEl = $('#text');
    var usernameInputEl = $('#inputUser');

    makeCommentBlock(usernameInputEl.val(), contentTextAreaEl.val());

    contentTextAreaEl.val('');
    usernameInputEl.val('');
});

$('#collapseProperties').on('show.bs.collapse', function () {
    $('#collapsePropertiesSvg').css('transform', 'rotate(-180deg)').css('transition', '.3s');
});

$('#collapseProperties').on('hide.bs.collapse', function () {
    $('#collapsePropertiesSvg').css('transform', 'rotate(0deg)').css('transition', '.3s');
});

$('#collapseUse').on('show.bs.collapse', function () {
    $('#collapseUseSvg').css('transform', 'rotate(-180deg)').css('transition', '.3s');
});

$('#collapseUse').on('hide.bs.collapse', function () {
    $('#collapseUseSvg').css('transform', 'rotate(0deg)').css('transition', '.3s');
});
