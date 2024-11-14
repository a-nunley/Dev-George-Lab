$("button").click(function(){
    $.getJSON("", function(result){
      $.each(result, function(i, field){
        $("div").append(field + " ");
      });
    });
  });