
let connection;

// setup interface to handle user input from stdin
const setupInput = (input) => {

  connection = input;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.on("data", handleUserInput);
  stdin.resume();
  return stdin;
};

// nod

const handleUserInput = function (key) {
  // your code here
  // \u0003 maps to ctrl+c input
  if (key === '\u0003') {
    process.exit();
  }
  if (key === '\x77') {
    connection.write("Move: up");

    // setTimeout puts a delay on the move
    // setInterval repeats the move at a set interval
    // This will continually add an up move every 1 second
    // Instead it should continually go up until another direction is given
    // setInterval(() => {
    //   connection.write("Move: up");
    // }, 1000);
  }
  if (key === '\x61') {
    connection.write("Move: left");
  }
  if (key === '\x73') {
    connection.write("Move: down");
  }
  if (key === '\x64') {
    connection.write("Move: right");
  }
};

// conn.on('connect', () => {
//   setInterval(() => {
//     conn.write("Move: left");
//   }, 500);
// });

module.exports = { setupInput };