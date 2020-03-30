// tooltip
$(document).ready(function(){
    $('[data-toggle="tooltip"]').tooltip();
  });

// hamburger to X on close
  $("#hamburger-menu").click( function(){
    $(".icon").toggleClass("close");
})