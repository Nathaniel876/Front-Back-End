

function apiTest() {
    console.log("Running AJAX!");
    var searchTerm;
    var beginDate;  
    var endDate;
    var limit;

    // searchTerm = "trump";
    searchTerm = $('#searchTerm-input').val();
    console.log('searching for: ' + searchTerm);
    beginDate = $('#startYear-input').val();
    console.log('from date: ' + beginDate);
    endDate = $('#endYear-input').val();
    console.log('to date: ' + endDate);
    limit = $('#recordNumber-input').val();
    console.log('limiting to: ' + limit + ' result(s)');


    var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";

    url += '?' + $.param({
        'api-key': "a535b70068744b229589d0c7e8bd9748",
        'q': searchTerm,
        'begin_date': beginDate,
        'end-date': endDate,
       
    });

    $.ajax({
        url: url,
        method: 'GET',
    }).then(function (result) {
        console.log("running test!");
        console.log(result);

       for(var i = 0; i < limit; i++){
           var newArticle = $('<div class="article">');
           
           var a = $(result.response.docs[i].web_url);
           newArticle.append(a);
           console.log(a);
           $('.topArticle').append(newArticle);
        }
        
    });
};

$(document).on('click', '#input', function(event){
    event.preventDefault();
    apiTest();

});