const express = require("express");

const app = express();

const port = 3000;

app.get("/", (req, res) => {
    res.setHeader({ "Content-Type": "text-plain/html" });
    res.end();
});

app.listen(port, () => {
    console.log(`servidor corriendo en puerto ${port}`);
});
