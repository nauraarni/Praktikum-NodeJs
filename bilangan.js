const express = require("express")
const bodyParser = require("body-parser")
const cors = require("cors")
const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
app.use(cors())

app.get("/convert/binary/:number", (req,res) => {
    let binary = Number(req.params.number)
    let decimal = Number(binary, 2)
    let octal = decimal.toString(8)
    let hexadecimal = decimal.toString(16).toUpperCase()

    let response = {
        binary:binary,
        decimal:decimal,
        octal:octal,
        hexadecimal:hexadecimal,
    };
    res.json(response);
})

app.get("/convert/decimal/:number", (req,res) => {
    let decimal = Number(req.params.number)
    let binary = decimal.toString(2)
    let octal = decimal.toString(8)
    let hexadecimal = decimal.toString(16).toUpperCase()

    let response = {
        decimal:decimal,
        binary:binary,
        octal:octal,
        hexadecimal:hexadecimal,
    };
    res.json(response);
})

app.get("/convert/octal/:number", (req,res) => {
    let octal = Number(req.params.number)
    let decimal = parseInt(octal, 8)
    let binary = decimal.toString(2)
    let hexadecimal = decimal.toString(16).toUpperCase()

    let response = {
        octal:octal,
        decimal:decimal,
        binary:binary,
        hexadecimal:hexadecimal,
    };
    res.json(response);
})

app.get("/convert/hexsadecimal/:number", (req,res) => {
    let hexadecimal = req.params.number.toUpperCase()
    let decimal = parseInt(hexadecimal, 16)
    let binary = decimal.toString(2)
    let octal = decimal.toString(8)

    let response = {
        hexadecimal:hexadecimal,
        decimal:decimal,
        binary:binary,
        octal:octal,
    };
    res.json(response);
})

app.listen(3000, () => {
    console.log("Server run on port 3000")
})