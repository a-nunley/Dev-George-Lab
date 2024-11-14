$("button").click(function(){
    $.getJSON("https://github.com/a-nunley/Dev-George-Lab/read.json", function(result){
      $.each(result, function(i, field){
        $("div").append(field + " ");
      });
    });
  });
