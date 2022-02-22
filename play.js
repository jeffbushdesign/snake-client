


const { connect } = require("./client");
const { setupInput } = require("./input");


console.log("Connecting ...");
let conn = connect();





setupInput(conn);

// on any input from stdin (standard input), output a "." to stdout
// stdin.on('data', (key) => {
//   process.stdout.write('.');
// });

// stdin deals with "standard input", much like how stdout is for "standard output".
// We use the on method on stdin to register a callback
