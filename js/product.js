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

var variantsEl = $('#variants');
productoObject.variants.forEach(function (variante, indice) {
    var priceEl = $('#price');
    var chipEl;

    if (indice === 0) {
        // Primer variante debe estar pre-seleccionada
        chipEl = $('<li class="chipVariante chipVarianteActive">').text(variante.format);
        
        priceEl.text('$' + variante.price);
    } else {
        chipEl = $('<li class="chipVariante">').text(variante.format);
    }

    // Al hacer click quiero que se coloque solo la variante seleccionada
    // como active usando una clase y todas las demas deben volver a la 
    // clase CSS inicial
    chipEl.on('click', function () {
        // Se aplica una sola clase a todos los elementos de chip
        $('.chipVariante').attr('class', 'chipVariante');
        // A "ESTE" elemento de chip se le aplican 2 clases incluyendo
        // la clase active
        chipEl.attr('class', 'chipVariante chipVarianteActive');

        // Cambiamos el precio seleccionado
        priceEl.text('$' + variante.price);
    });

    variantsEl.append(chipEl);
});

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
    var usernameEl = $('<h4>')
        .attr('class','titlecomment');
    var contentEl = $('<p>')
        .attr('class','comment');
    var dateEl = $('<p>')
        .attr('class','dateComment');

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
