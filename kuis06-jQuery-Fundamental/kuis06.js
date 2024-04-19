$(document).ready(function () {
  // $("#elemen1").hide();
});

function hideEl() {
  console.log("Selamat Malam"); //Fungsi untuk menyembunyikan elemen yang tidak memiliki class atau atribut dipanggil
  $("div:not([class])").hide();
}

function hideClass() {
  console.log("Hallo Dunia"); //Fungsi untuk menyembunyikan elemen yang memiliki class dipanggil
  $(".class").hide();
}

function hideAttr() {
  console.log(" Hallo Dian"); //Fungsi untuk menyembunyikan elemen yang memiliki atribut dipanggil
  $("[href]").hide();
}
