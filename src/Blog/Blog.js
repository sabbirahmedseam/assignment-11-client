import React from "react";
import { Container } from "react-bootstrap";

const Blog = () => {
  return (
    <Container style={{textAlign:'justify'}}>
      <b>Difference between sql and nosql:</b>
      <span>
        SQL databases are primarily called as Relational Databases (RDBMS);
        whereas NoSQL database are primarily called as non-relational or
        distributed database.In almost all situations SQL databases are
        vertically scalable. This means that you can increase the load on a
        single server by increasing things like RAM, CPU or SSD. But on the
        other hand NoSQL databases are horizontally scalable. SQL databases
        defines and manipulates data based structured query language (SQL).
        Seeing from a side this language is extremely powerful. SQL is one of
        the most versatile and widely-used options available which makes it a
        safe choice especially for great complex queries.
      </span>
      <br /> <br />
      <b>JWT:</b>
      <span>
        JSON Web Token is an open industry standard used to share information
        between two entities, usually a client (like your app’s frontend) and a
        server (your app’s backend). They contain JSON objects which have the
        information that needs to be shared. Each JWT is also signed using
        cryptography (hashing) to ensure that the JSON contents (also known as
        JWT claims) cannot be altered by the client or a malicious party.
      </span>
      <br /> <br />
      <b> Difference between JavaScript and Node.js :</b>
      <span>
        JavaScript is a proper high-level programming language used to create
        web scripts whereas Node.js is a run time environment built on google’s
        v8 engine. JavaScript is executed in the browser whereas using Node.js
        gives us the ability to execute JavaScript outside the browser.
        JavaScript can manipulate DOM or add HTML within whereas Node.js doesn’t
        have the capability to add HTML. JavaScript is mainly used to create
        front end web applications or develop client-side whereas Node.js is
        used on the back end development that is server-side development
        JavaScript follows the standard of JavaScript when writing programs
        whereas Node.js is written in C++ while using the v8 engine, it runs
        JavaScript outside the browser.
      </span>
      <br /> <br />
      <b> NodeJS handle multiple requests at the same time :</b>
      <span>
        NodeJS receives multiple client requests and places them into
        EventQueue. NodeJS is built with the concept of event-driven
        architecture. NodeJS has its own EventLoop which is an infinite loop
        that receives requests and processes them. EventLoop is the listener for
        the EventQueue. If NodeJS can process the request without I/O blocking
        then the event loop would itself process the request and sends the
        response back to the client by itself. But, it is possible to process
        multiple requests parallelly using the NodeJS cluster module or
        worker_threads module
      </span>
    </Container>
  );
};

export default Blog;
