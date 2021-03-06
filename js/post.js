// Toma url de la pagina y crea un objeto URL con el string
var link = new URL(window.location.href);
// Usando el objeto URL tomo el query param para producto
var post = link.searchParams.get('post');

var postObject = JSON.parse(post);

var photoEl = $('#photo');
photoEl.attr('src', postObject.photo);

var dateEl = $('#date');
dateEl.text(postObject.date);

var titleEl = $('#title');
titleEl.text(postObject.title);

var excerptEl = $('#excerpt');
excerptEl.text(postObject.excerpt);

var contentEl = $('#content');
contentEl.text(postObject.content);

var authorPhoto = $('#authorPhoto');
authorPhoto.attr('src', postObject.author.photo);

var authorName = $('#authorName');
authorName.text(postObject.author.name);

var authorOccupation = $('#authorOccupation');
authorOccupation.text(postObject.author.occupation);

var authorDescription = $('#authorDescription');
authorDescription.text(postObject.author.description);