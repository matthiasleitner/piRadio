

$(document).ready(function(){

	$("#radio-stations li").click(function(){
		$.ajax({
  		url: "/start",
  		data: {url: $(this).data("url")},
      context: this,
      success: function(data){
        $(".playback-controlls").fadeIn();
        $("#radio-stations li.active").removeClass("active")
        $(this).addClass("active")
      }
    });
	});

  $(".playback-controlls").click(function(){
    stop()
  })
});

function stop(){
  $.ajax({
    url: "/stop",
    context: this,
    success: function(data){
      $(".playback-controlls").fadeOut();
      $("#radio-stations li.active").removeClass("active")
    }
  });
}

