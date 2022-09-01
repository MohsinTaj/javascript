const app = require("express")();
const PORT = 8080;
app.listen(
    PORT,
    () => console.log(`server running on ${PORT}`)
)
app.get("/fruits", (req, res) => {
    res.send("mango and apple")
})