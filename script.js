$(document).ready(function(){
    //INTRO SEQUENCE
    $('.intro').click(function(){
        document.getElementById("myAudio").play();
        $('.intro').css('opacity', '0');
        setTimeout(
            function() 
            {
                $('.intro').css('display', 'none');
            }, 500);

    });

    // POEM API
    let random = Math.floor(Math.random()*153);

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

            // console.log(random);
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