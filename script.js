$(document).ready(function(){

    //define array of quotes
      var quoteSource = [
            {
                quote : "I have no special talent. I am only passionately curious.",
                name : "-Albert Einstein"
            },
            {
                quote : "If you judge people, you have no time to love them.",
                name : "-Mother Teresa"
            },
            {
                quote : "Wisely, and slow. They stumble that run fast.",
                name : "-William Shakespeare"
            },
            {
                quote : "The most courageous act is still to think for yourself. Aloud.",
                name : "-Coco Chanel"
            },
            {
                quote : "A great man is always willing to be little.",
                name : "-Ralph Waldo Emerson "
            },
            {
                quote : "The successful warrior is the average man, with laser-like focus.",
                name : "-Bruce Lee"
            },
            {
                quote:"A day without sunshine is like, you know, night.",
                name:"-Steve Martin"
            },
            {
                quote:"Don't sweat the petty things and don't pet the sweaty things.",
                name:"-George Carlin"
            },
            {
                quote:"Always do whatever's next.",
                name:"-George Carlin"
            },
            {
                quote:"Atheism is a non-prophet organization.",
                name:"-George Carlin"
            },
            {
                quote:"Hapiness is not something ready made. It comes from your own actions.",
                name:"-Dalai Lama"
            }
        
      ];


      $(":button").click(function(evt){
        
        //define the containers of the info we target
        var quote = $('#quotes p').text();
        var quoteGenius = $('.name').text();
        
        //prevent browser's default action
        evt.preventDefault();

        //get new random quote
        var length = quoteSource.length;
        var randomNumber = Math.floor(Math.random()*length);
        //set a new quote
          for(var i=0;i<=length;i++)
        {
            $('.name').fadeOut();
            var newQuote = quoteSource[randomNumber].quote;
            var newName = quoteSource[randomNumber].name;
            //fade out animation with callback
            $('.quotegenius').fadeOut(500,function(){

                $('.quotegenius').html('');
                $('.quotegenius').append('<p class="quotegenius"><q>'+newQuote+'</q></p>'+'<p class="name">'+newName+'</p>');
                //fadein animation.
                $('.quotegenius').fadeIn(500);
            });
          break;    
        };//end for loop
    }); 
});//end document ready

