$(document).ready(function () {
  $.ajax({
    url: "https://restcountries.com/v3.1/all",
    method: "GET",
    success: function (response) {
      if (response && response.length > 0) {
        response.forEach(function (country) {
          if (country.name && country.name.common) {
            $("#country-list tbody").append(
              "<tr><td>" + country.name.common + "</td></tr>"
            );
          }
        });
      } else {
        $("#country-list tbody").append("<tr><td>No data available</td></tr>");
      }
    },
  });
});
