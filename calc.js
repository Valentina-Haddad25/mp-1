
// Function to get input values

function getNum() {
  let num1 = Number(document.getElementById("first-number").value);
  let num2 = Number(document.getElementById("second-number").value);
  return { num1, num2 };
}

// Function to display output
function Result(result) {
  document.getElementById("output").innerHTML = `Result: ${result}`;
  const output = document.getElementById("output");
  output.innerHTML= `Result: ${result}`;
  if (result < 0) {
    output.style.color = "red";
  } else {
    output.style.color = "hotpink";
  }
  result.innerHTML = `Result: ${result}`;
}

  function add() {
    const {num1, num2} = getNum();
    const result = num1 + num2;
    Result(result);
  }

  function sub() {
    const {num1, num2} = getNum();
    const result = num1 - num2;
    Result(result);
  }

// Multiplication function
  function multiplication() {
    const {num1, num2} = getNum();
    const result = num1 * num2;
    Result(result);
  }

  function division() {
    const {num1, num2} = getNum();
    if (num2 !== 0) {
      const result = num1 / num2;
      Result(result);
    } else {
      Result("ERROR! You cannot divide by 0! BLAH!");

    }
  }

  function power() {
    const {num1, num2} = getNum();
    let result = 1;
    for (let i = 0; i < num2; i++) {
      result *= num1;
    }

    Result(result);
  }

  function ClearforCalc() {
    const output = document.getElementById("output");
    document.getElementById("first-number").value = ""; // Clear the first number input
    document.getElementById("second-number").value = ""; // Clear the second number input
    document.getElementById("output").innerHTML = "Result:"; // Reset the output result
    output.style.color = "hotpink";
    if (output.style.color === "red") {
      output.style.color = "hotpink";
    }

  }

