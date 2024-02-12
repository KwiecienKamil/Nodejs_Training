import express from "express"
import cors from "cors"
import mysql from "mysql"

const app = express()

app.use(express.json())
app.use(cors());

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "borussia"
});

app.get("/squad", (req,res) => {
    const sql = "SELECT * FROM squad";
    db.query(sql, (err,data) => {
        if(err) return res.json(err)
        else res.json(data)
    })
})


app.listen(3000, () => console.log("Server started!"))