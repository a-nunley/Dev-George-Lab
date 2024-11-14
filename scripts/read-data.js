$("button").click(function(){
    $.getJSON("https://raw.githubusercontent.com/a-nunley/Dev-George-Lab/main/read.json", function(result){
      $.each(result, function(i, field){
        $("div").append(field + " ");
      });
    });
  });
