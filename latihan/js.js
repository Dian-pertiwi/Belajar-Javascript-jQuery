$(document).ready(function () {
  //Hide Effect
  $("#hideBtn").click(function () {
    $(".box").hide(1000);
  });
  //Hide Effect
  $("#showBtn").click(function () {
    $(".box").show(1000);
  });
  //Hide Effect
  $("#fadeInBtn").click(function () {
    $(".box").fadeIn(1000);
  });
  //Hide Effect
  $("#fadeOutBtn").click(function () {
    $(".box").fadeOut(1000);
  });
  //Hide Effect
  $("#slideUpBtn").click(function () {
    $(".box").slideUp(1000);
  });
  //Hide Effect
  $("#slideDownBtn").click(function () {
    $(".box").slideDown(1000);
  });
  //Hide Effect
  $("#toggleBtn").click(function () {
    $(".box").toggle(1000);
  });
  //Hide Effect
  $("#animateBtn").click(function () {
    $(".box").animate(
      { left: "200px", opacity: "0.5", height: "+=150px", width: "+=150px" },
      1000
    );
  });
});

//menampikan elemen img dengan efek fade ketika elemen button di klik.Nantinya animasi akan berjalan selama 500ms dan memiliki tipe animasi linear
$("img").fadeIn(500, "linear");
$("div.accordion").fadeOut("slow", "swing");
swing;
$("div.answer").fadeTo(1000, 0.6, "linear");
$("p#name").fadeToggle("fast", "swing");
fadeTo;
$(".alert").hide();
$("img.user-ava").show(600, "swing");
$('input[type="password"]').toggle();
$("div.alert").slideDown(600, "swing");
$("p.info").slideUp("slow", "linear");
