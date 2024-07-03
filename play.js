const { connect } = require("./client");
const { setupInput } = require("./input");

console.log("Connecting ...");
const conn = connect();

setupInput(conn);

// conn.write("Move: up");

// For setInterval example
// clearInterval(intervalId);



