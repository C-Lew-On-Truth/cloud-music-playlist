const express = require("express");
const app = express();
const port = 3000;

app.use(express.static("public"))

app.get("/info", (req, res) => {
    res.status(200).json({info:"present text"})
})

app.listen(port, () => console.log(`Your working on port ${port} homie`))