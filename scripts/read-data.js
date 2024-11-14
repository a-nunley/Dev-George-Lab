$("button").click(function(){
    $.getJSON("read.json", function(result){
      $.each(result, function(i, field){
        $("div").append(field + " ");
      });
    });
  });
