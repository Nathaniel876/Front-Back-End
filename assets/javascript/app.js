var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
url += '?' + $.param({
    'api-key': "a535b70068744b229589d0c7e8bd9748"
});
$.ajax({
    url: url,
    method: 'GET',
}).done(function (result) {


    console.log(result);
}).fail(function (err) {
    throw err;
});