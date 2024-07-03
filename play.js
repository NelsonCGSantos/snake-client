const { connect } = require("./client");

const net = require("net");

const setupInput = function () {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);
  return stdin;
};
  
const handleUserInput = function (key) {
  if (key === "\u0003") {
    // ctrl + c
    process.exit();
  }
};

setupInput();
  

// conn.write("Move: up");

// For setInterval example
// clearInterval(intervalId);


console.log("Connecting ...");
connect();
