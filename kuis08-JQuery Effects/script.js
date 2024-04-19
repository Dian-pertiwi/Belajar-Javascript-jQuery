$(document).ready(function () {
  $("#fadeInBtn").click(function () {
    $("div.login-container ").fadeIn(1000);
  });

  $("#fadeOutBtn").click(function () {
    $("div.login-container").fadeOut(1000);
  });

  $("#slideUpBtn").click(function () {
    $("div.login-container").slideUp(1000);
  });

  $("#slideDownBtn").click(function () {
    $("div.login-container").slideDown(1000);
  });

  $("#toggleBtn").click(function () {
    $("div.login-container").toggle(1000);
  });
});
