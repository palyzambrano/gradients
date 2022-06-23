$(document).ready(function(){

    function crearCardPost(data) {
        var photo = $('<img>')
            .attr('src', data.photo)
            .attr('class', 'imgPost');
        var date = $('<span>').text(data.date)
            .attr('class', 'datePost');
        var title = $('<h5>').text(data.title)
            .attr('class','titlePost');
        var excerpt = $('<p>').text(data.excerpt)
            .attr('class','excerptPost')
        var btnPost = $('<a>Leer más</a>')
            .attr('class','btnPost')
            .attr('href', 'post.html?post=' + encodeURIComponent(JSON.stringify(data)))
        var cardPost = $('<div>')
            .attr('class', 'col-md-3 m-3 p-2')
            .append(photo)
            .append(date)
            .append(title)
            .append(excerpt)
            .append(btnPost);

        $('#contentPost').append(cardPost);
    }

    function cargarPost() {
        var articleList = 'https://gist.githubusercontent.com/palyzambrano/e956e7130ff40d599d51045bd87f9997/raw/1097c8ec2230fda5bed609b18c3510b954589107/post.json';
        $('#contentPost');
        $.ajax(articleList)
            .done(function (response) {
                var post = JSON.parse(response);
                post.forEach(crearCardPost);
            });
    }
    cargarPost();
})