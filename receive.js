#!/usr/bin/env node
// RECEIVER
var amqp = require("amqplib/callback_api");
// Similar set up to PUBLISHER --> open & connect channel, declare a queue to consume (match up the queue from sendToQueue)
amqp.connect("amqp://localhost", function(error0, connection) {
  if (error0) {
    throw error0;
  }
  connection.createChannel(function(error1, channel) {
    if (error1) {
      throw error1;
    }
    const queue = "hello";

    channel.assertQueue(queue, {
      durable: false
    });
  });
});

// We're about to tell the server to deliver us the messages from the queue.
// Since it will push us messages asynchronously, we provide a callback that will be executed when
// RabbitMQ pushes messages to our consumer. This is what Channel.consume does.
console.log(" [*] Waiting for messages in %s. To exit press CTRL+C", queue);
channel.consume(
  queue,
  function(msg) {
    console.log(" [x] Received %s", msg.content.toString());
  },
  {
    noAck: true
  }
);
