var num1 = 0;
var num2 = 0;
var signChoice = "";

function addNum(num) {
  document.getElementById("screen").value += num;
}

function setSign(sign) {
  signChoice = sign;
  num1 = document.getElementById("screen").value;
  document.getElementById("screen").value = "";
}

function equalPressed() {
  num2 = document.getElementById("screen").value;

  if (signChoice === "+") {
    document.getElementById("screen").value = Number(num1) + Number(num2);
  }
  else if (signChoice === "/") {
    document.getElementById("screen").value = (Number(num1) / Number(num2));
  }
  else if (signChoice === "x") {
    document.getElementById("screen").value = (Number(num1) * Number(num2));
  }
  else if (signChoice === "-") {
    document.getElementById("screen").value = (Number(num1) - Number(num2));
  }
  else if (signChoice === "x^y") {
    document.getElementById("screen").value = (Number(num1) ** Number(num2));
  }


  else if (signChoice === "%") {
    document.getElementById("screen").value = (Number(num1) / 100);
  }

}

function sqrt() {
  document.getElementById("screen").value
    = Math.sqrt(document.getElementById("screen").value);
}



function addDecimal() {
  if (!decimal) {
    num += ".";
    decimal = true;
  }
}
function Tan() {
  document.getElementById("screen").value
    = Math.tan(document.getElementById("screen").value);
}
function Sin() {
  document.getElementById("screen").value
    = Math.sin(document.getElementById("screen").value);
}
function Cos() {
  document.getElementById("screen").value
    = Math.cos(document.getElementById("screen").value);
}


function minus() {
  document.getElementById("screen").value = (document.getElementById("screen").value) * -1;
}



function square() {
  document.getElementById("screen").value = document.getElementById("screen").value ** 2;
}


function absolute() {
  if (document.getElementById("screen").value > 0) {
    document.getElementById("screen").value = document.getElementById("screen").value
  }
  else {
    document.getElementById("screen").value = document.getElementById("screen").value * -1
  }
}

function aTan() {
  document.getElementById("screen").value
    = Math.atan(document.getElementById("screen").value);
}

function Notation() {
  document.getElementById("screen").value = document.getElementById("screen").value * 10;
}
