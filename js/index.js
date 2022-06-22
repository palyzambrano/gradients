$(document).ready(function(){

    function crearCardPost(data) {
        var photo = $('<img>')
            .attr('src', data.photo)
            .attr('height', 300)
            .attr('width', 300);
        var date = $('<span>').text(data.date);
        var title = $('<h5>').text(data.title);
        var excerpt = $('<p>').text(data.excerpt)
        var btnPost = $('<a>ver más</a>').attr('href', 'post.html?post=' + encodeURIComponent(JSON.stringify(data)))
        var cardPost = $('<div>')
            .attr('class', 'card col-md-3 m-3 p-2')
            .append(photo)
            .append(date)
            .append(title)
            .append(excerpt)
            .append(btnPost);

        $('#contentPost').append(cardPost);
    }

    function cargarPost() {
        var articleList = 'https://gist.githubusercontent.com/palyzambrano/e956e7130ff40d599d51045bd87f9997/raw/a332c1da732498857183cb40df1501ad104e4dbf/post.json';
        $('#contentPost');
        $.ajax(articleList)
            .done(function (response) {
                var post = JSON.parse(response);
                post.forEach(crearCardPost);
            });
    }
    cargarPost();
})