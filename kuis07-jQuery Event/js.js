$(document).ready(function () {
  // Menambahkan event click pada tombol dengan id "myButton"
  $("#myButton").click(function () {
    alert("Tombol diklik!");
  });

  $("#btnDoubleClick").dblclick(function () {
    alert("Button double-clicked!");
    console.log("berhasil di klik 2 kali");
  });

  $("#myForm").submit(function (e) {
    e.preventDefault();
    alert("Form Berhasil di submit!");
  });

  $("#selectBox").change(function () {
    alert("Selected value: " + $(this).val());
  });

  $("#hoverDiv").hover(
    function () {
      $(this).text("Mouse over");
    },
    function () {
      $(this).text("Hover over me");
    }
  );

  $("#myInput").focus(function () {
    $(this).css("background-color", "yellow");
  });
});
