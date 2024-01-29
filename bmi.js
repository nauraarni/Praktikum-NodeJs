const express = require("express")
const bodyParser = require("body-parser")
const cors = require("cors")
const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
app.use(cors())

app.post("/hitung-bmi", (req,res) => {
    let berat = Number(req.body.berat)
    let tinggi = Number(req.body.tinggi)
    let bmi = berat / (tinggi * tinggi)
    let status;

    if (bmi < 18.5) {
        status = "kekurangan berat badan"
    } else if (bmi >= 18.5 && bmi < 24.9) {
        status = "normal"
    } else if (bmi >= 25 && bmi < 29.9) {
        status = "kelebihan berat badan"
    } else {
        status = "obesitas"
    }

    let response = {
        berat:berat,
        tinggi:tinggi,
        bmi:bmi,
        status:status,
    };
    res.json(response);
})

app.listen(3000, () => {
    console.log("Server run on port 3000")
})