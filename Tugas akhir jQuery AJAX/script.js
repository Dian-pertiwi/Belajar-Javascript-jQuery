$("button").click(function () {
  var initial = $(".article").val(); // Mendapatkan inisial dari input teks

  $.ajax({
    url: "https://restcountries.com/v3.1/all",
    type: "GET",
    success: function (res) {
      var countryNames = [];
      res.forEach(function (country) {
        // Memeriksa apakah inisial negara dimulai dengan inisial yang dimasukkan pengguna
        if (
          country.name.common.charAt(0).toLowerCase() === initial.toLowerCase()
        ) {
          countryNames.push(country.name.common); // Menambahkan nama negara ke dalam daftar nama negara
        }
      });
      // Menampilkan daftar nama negara ke dalam tabel
      var html = "<tr><th>Nama Negara</th></tr>";
      countryNames.forEach(function (countryName) {
        html += "<tr><td>" + countryName + "</td></tr>";
      });
      $("#countryList").html(html);
    },
  });
});
$("#myInput").focus(function () {
  $(this).css("background-color", "skyblue");
});
