$(document).ready(function(){
    let random = Math.floor(Math.random()*153);
    console.log(random);

    $.getJSON("https://poetrydb.org/author,title/Shakespeare;Sonnet")
        .done(function(data) {
            let selectedPoem = data[random]
            let poemTitle = selectedPoem.title;
            let poemLines = selectedPoem.lines;

        $('.poemTitle').append(
            poemTitle + '<br><br>'
        );
        for(let i = 0; i < poemLines.length; i++){
            $('.poemInner').append(
                poemLines[i] + '<br>'
            );
        };



        $('.poemContainer').click(function(){
            random = Math.floor(Math.random()*153);

            console.log(random);
            $('.poemTitle').empty();
            $('.poemInner').empty();
            $('.poemTitle').append(
                data[random].title + '<br><br>'
            );
            for(let i = 0; i < poemLines.length; i++){
                $('.poemInner').append(
                    data[random].lines[i] + '<br>'
                );
            };
        });

        
    });

});