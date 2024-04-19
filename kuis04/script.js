$(document).ready(function () {
  let bintang = "";

  for (let i = 1; i <= 5; i++) {
    let b = "";
    let space = "";

    for (let a = 0; a < i; a++) {
      b += "*";
    }
    for (let j = 0; j < 5 - i; j++) {
      space += " ";
    }

    if (i === 1) {
      bintang += `${b}\n`;
    } else {
      bintang += `${space}${b}\n`;
    }
  }

  console.log(bintang);
});
