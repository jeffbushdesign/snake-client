// establishes a connection with the game server
const net = require("net");
const { IP, PORT } = require("./constants");

const connect = function () {
  const conn = net.createConnection({
    host: IP,
    port: PORT,
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

  return conn;
};

module.exports = { connect };