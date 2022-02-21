const net = require("net");
const { connect } = require("./client.js");


// MOVED TO CLIENT.JS
// // establishes a connection with the game server
// const connect = function () {
//   const conn = net.createConnection({
//     host: 'localhost', // IP address here,
//     port: 50541,// PORT number here,
//   });

//   // interpret incoming data as text
//   conn.setEncoding("utf8");

//   conn.on("connect", () => {
//     // code that does something when the connection is first established
//   });

//   return conn;
// };

console.log("Connecting ...");
connect();