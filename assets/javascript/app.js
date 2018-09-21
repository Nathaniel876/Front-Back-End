var searchTerm;
var beginDate;
var endDate;

function apiTest() {
    console.log("Running AJAX!");


    // searchTerm = "trump";
    searchTerm = $('#searchTerm-input').val();
    beginDate = $('#startYear-input').val();
    endDate = $('#endYear-input').val();


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
        console.log(searchTerm);
        console.log(beginDate);
        console.log(endDate);
            console.log(result);
    });
};

$(document).on('click', '#input', apiTest);