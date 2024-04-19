function cekRumah() {
  let kawasan = document.getElementById("kawasan").value;
  let luasTanah = parseInt(document.getElementById("luasTanah").value);
  let luasBangunan = parseInt(document.getElementById("luasBangunan").value);
  let fasilitasKolamRenang = parseInt(
    document.getElementById("fasilitasKolamRenang").value
  );
  let fasilitasParkirLuas = parseInt(
    document.getElementById("fasilitasParkirLuas").value
  );
  let fasilitasKebun = parseInt(
    document.getElementById("fasilitasKebun").value
  );

  if (
    (kawasan === "tidak rawan banjir" || kawasan === "tidak rawan longsor") &&
    kawasan !== "industri/pabrik" &&
    luasTanah >= 800 &&
    luasBangunan >= 400 &&
    fasilitasKolamRenang === 1 &&
    fasilitasParkirLuas === 1 &&
    fasilitasKebun === 1
  ) {
    alert("Rumah memenuhi semua kriteria!");
  } else {
    alert("Rumah tidak memenuhi semua kriteria.");
  }
  console.log("Nilai kawasan:", kawasan);
  console.log("Nilai luasTanah:", luasTanah);
  console.log("Nilai luasBangunan:", luasBangunan);
}
