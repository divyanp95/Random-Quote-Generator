$(document).ready(function(){

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

      var quoteColors =["cyan", 'gray','red','green','blue','orange'];

      $("button").click(function(evt){
        var quote = $('#quotes p').text();
        var quoteGenius = $('.name').text();
        evt.preventDefault();
      var length = quoteSource.length;
      var colors = quoteColors.length;
      var randomNumber = Math.floor(Math.random()*length);
      var randomcolor = Math.floor(Math.random()*colors);
      for(var i=0;i<=length;i++)
      {
          var newQuote = quoteSource[randomNumber].quote;
          var newName = quoteSource[randomNumber].name;
          $('#quotes').fadeOut(500,function(){
              $('#quotes').html('');
              $('#quotes').append('<p class="quotegenius"><q>'+newQuote+'</q></p>'+'<p class="name">'+newName+'</p>');
              $('body').css('color', "blue");
              $('#quotes').fadeIn(500);

            });
              break;    
      }
    });
     
});