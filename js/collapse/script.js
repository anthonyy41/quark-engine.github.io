$(document).ready(function() {
  $('.collapse.in').prev('.panel-heading').addClass('active');
  $('#accordion, #bs-collapse')
    .on('show.bs.collapse', function(a) {
      $(a.target).prev('.panel-heading').addClass('active');
    })
    .on('hide.bs.collapse', function(a) {
      $(a.target).prev('.panel-heading').removeClass('active');
    });
  $(".close").click(function() {
    if ($(this).hasClass("active")){
      $(this).removeClass("active")
      $(".panel-collapse").collapse('hide')
    }else{
      $(this).addClass("active")
      $(".panel-collapse").collapse('show')
    }
    
  })

  $('#confidence').change(function(){
    var filter_value = $(this).find('option:selected').val()
    var panel_id = ".panel" + filter_value

    $(".panel20").hide()
    $(".panel40").hide()
    $(".panel60").hide()
    $(".panel80").hide()
    $(".panel100").hide()

    if (filter_value == 20){
      $(panel_id).show()
    } else if (filter_value == 40){
      $(panel_id).show()
    } else if (filter_value == 60){
      $(panel_id).show()
    } else if (filter_value == 80){
      $(panel_id).show()
    } else if (filter_value == 100){
      $(panel_id).show()
    } else if (filter_value == "all"){
      $(".panel20").show()
      $(".panel40").show()
      $(".panel60").show()
      $(".panel80").show()
      $(".panel100").show()
    } else if (filter_value == "confidence"){
      $(".panel20").show()
      $(".panel40").show()
      $(".panel60").show()
      $(".panel80").show()
      $(".panel100").show()
    }
  })
  
});

