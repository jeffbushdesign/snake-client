


const { connect } = require("./client.js");

console.log("Connecting ...");
connect();

// setup interface to handle user input from stdin

const setupInput = function () {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.on("data", handleUserInput);
  stdin.resume();
  return stdin;
};


const handleUserInput = function (key) {
  // your code here
  // \u0003 maps to ctrl+c input
  if (key === '\u0003') {
    process.exit();
  }
};


setupInput();

// on any input from stdin (standard input), output a "." to stdout
// stdin.on('data', (key) => {
//   process.stdout.write('.');
// });

// stdin deals with "standard input", much like how stdout is for "standard output".
// We use the on method on stdin to register a callback
