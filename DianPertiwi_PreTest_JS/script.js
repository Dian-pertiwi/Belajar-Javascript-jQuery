// Fungsi untuk menjumlahkan dua angka
function add(num1, num2) {
  return num1 + num2;
}

// Fungsi untuk mengurangkan dua angka
function subtract(num1, num2) {
  return num1 - num2;
}

// Fungsi untuk mengalikan dua angka
function multiply(num1, num2) {
  return num1 * num2;
}

// Fungsi untuk membagi dua angka
function divide(num1, num2) {
  if (num2 === 0) {
    return "Cannot divide by zero!";
  } else {
    return num1 / num2;
  }
}

// Event untuk menjalankan operasi matematika dan menampilkan hasil
$(document).ready(function () {
  $("#addButton").click(function () {
    let result = add(Number($("#num1").val()), Number($("#num2").val()));
    $("#result").text("Result: " + result);
  });

  $("#subtractButton").click(function () {
    let result = subtract(Number($("#num1").val()), Number($("#num2").val()));
    $("#result").text("Result: " + result);
  });

  $("#multiplyButton").click(function () {
    let result = multiply(Number($("#num1").val()), Number($("#num2").val()));
    $("#result").text("Result: " + result);
  });

  $("#divideButton").click(function () {
    let result = divide(Number($("#num1").val()), Number($("#num2").val()));
    $("#result").text("Result: " + result);
  });
});
