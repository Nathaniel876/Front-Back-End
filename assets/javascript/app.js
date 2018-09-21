var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
var searchTerm;
url += '?' + $.param({
    'api-key': "a535b70068744b229589d0c7e8bd9748",
    'q': searchTerm,
});


function apiTest() {
    console.log("running test!")
searchTerm = "trump";

    $.ajax({
        url: url,
        method: 'GET',
    }).done(function (result) {


        console.log(result);
    }).fail(function (err) {
        throw err;
    });
}

apiTest();