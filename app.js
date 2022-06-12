function toCm() {
  const inputBox = document.getElementById( 'input-box' );
  let value = inputBox.value;

  value = +value;
  let cm = value * 2.54;

  const resultBox = document.getElementById( 'result' );
  resultBox.innerText = cm;
}

function toInch() {
  const inputBox = document.getElementById( 'input-box' );
  let value = inputBox.value;

  value = +value;
  let inch = value * 0.393701;

  const resultBox = document.getElementById( 'result' );
  resultBox.innerText = inch;
}