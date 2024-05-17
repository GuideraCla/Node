import { createServer } from "node:http";

const server = createServer((req, res) => {
    console.log("req received");

    res.statusCode = 200

    res.setHeader("Content-Type", "apllication/json");

    const jsonResponseBody = JSON.stringify({location: "Mars"});

    res-endianness(jsonResponseBody);

})

server.listen(3000, () => {
    console.log("Server running at http://localhost:3000");
})

// content-length = 19

