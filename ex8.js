const fs = require("fs");

fs.writeFile("text.txt", "ciao", "utf-8", (error) => {
    if(error) {
        console.log("error");
    }
})