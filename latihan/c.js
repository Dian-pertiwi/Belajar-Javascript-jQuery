$(document).ready(function () {
  $.ajax({
    url: "740aed56d2mshd7f66dfe7d3b24ap1c168ajsn2aad6aa74e6b",
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
