#!/usr/bin/env node
// PUBLISHER
var amqp = require("amqplib/callback_api");
// Connect to RabbitMQ server
amqp.connect("amqp://localhost", function(error0, connection) {});
// Create a channel where most of API for getting things done resides
amqp.connect("amqp://localhost", function(error0, connection) {
  if (error0) {
    throw error0;
  }
  connection.createChannel(function(error1, channel) {});
});
// Declare a queue to send to and publish a message
amqp.connect("amqp://localhost", function(error0, connection) {
  if (error0) {
    throw error0;
  }
  connection.createChannel(function(error1, channel) {
    if (error1) {
      throw error1;
    }
    const queue = "hello";
    let msg = "Hello world";

    channel.assertQueue(queue, {
      durable: false
    });

    channel.sendToQueue(queue, Buffer.from(msg));
    console.log(" [x] Sent %s", msg);
  });
});

// close the connection and exit
// setTimeout(function() {
//   connection.close();
//   process.exit(0);
// }, 500);
