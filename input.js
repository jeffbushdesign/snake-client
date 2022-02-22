
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
  // ------ MOVEMENT ------
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
    // setInterval(() => {
    //   connection.write("Move: left");
    // }, 1000);
  }
  if (key === '\x73') {
    connection.write("Move: down");
    // setInterval(() => {
    //   connection.write("Move: down");
    // }, 1000);
  }
  if (key === '\x64') {
    connection.write("Move: right");
    // setInterval(() => {
    //   connection.write("Move: right");
    // }, 1000);
  }


  // MESSAGES
  if (key === '\x79') {
    connection.write("Say: YO YO YO WADDUP!");
    // prints when you press y key
  }


};

// conn.on('connect', () => {
//   setInterval(() => {
//     conn.write("Move: left");
//   }, 500);
// });

module.exports = { setupInput };