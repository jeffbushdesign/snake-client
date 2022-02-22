// establishes a connection with the game server
const net = require("net");
const connect = function () {
  const conn = net.createConnection({
    host: 'localhost', // IP address here,
    port: 50541,// PORT number here,
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  conn.on("connect", (data) => {
    // code that does something when the connection is first established
    console.log(data);
  });

  conn.on("connect", () => {
    // code that does something when the connection is first established
    console.log('Successfully connected to the game server');
  });

  conn.on('connect', () => {
    conn.write('Name: JB');
  });




  // conn.on('connect', () => {
  //   setInterval(() => {
  //     conn.write("Move: left");
  //   }, 500);
  // });

  // conn.on('connect', () => {
  //   setInterval(() => {
  //     conn.write("Move: down");
  //   }, 1000);
  // });

  // conn.on('connect', () => {
  //   setInterval(() => {
  //     conn.write("Move: up");
  //   }, 1000);
  // });

  // setInterval(() => {
  //   conn.write("Move: left");
  // }, 1000);
  // setInterval(() => {
  //   conn.write("Move: right");
  // }, 1000);


  return conn;
};

module.exports = { connect };