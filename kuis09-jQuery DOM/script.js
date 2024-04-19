$(document).ready(function () {
  // Mengubah teks pada elemen paragraf
  $("#ubah").click(function () {
    $("#paragraf").text("Paragraf telah diubah!");
  });

  // Menambahkan class 'highlight' pada elemen dengan id 'judul'
  $("#judul").addClass("highlight");

  // Menambahkan elemen baru setelah paragraf
  $(
    "<p>Ini adalah paragraf baru yang ditambahkan setelah paragraf di atas.</p>"
  ).insertAfter("#paragraf");
  // Menambahkan item baru ke dalam daftar
  $("#tambah").click(function () {
    $("#daftar").append("<li>Item Baru</li>");
  });
  // Menghapus item pertama dari daftar ketika tombol "Hapus Item Pertama" diklik
  $("#hapus").click(function () {
    $("#daftar li:first-child").remove();
  });
});
