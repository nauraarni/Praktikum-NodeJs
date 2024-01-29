const express = require("express")
const bodyParser = require("body-parser")
const cors = require("cors")
const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
app.use(cors())

app.get("/convert/celcius/:temperature", (req,res) => {
    let temperature = parseFloat(req.params.temperature)
    let reamur = (temperature - 273.15) * 4/5
    let kelvin = (temperature * 5/4) + 273.15
    let fahrenheit = (temperature * 9/5) + 32

    let response = {
        celcius:temperature,
        reamur:reamur,
        kelvin:kelvin,
        fahrenheit:fahrenheit,
    }
    res.json(response)
})

app.get("/convert/reamur/:temperature", (req,res) => {
    let temperature = parseFloat(req.params.temperature)
    let celcius = temperature * 5/4
    let kelvin = celcius + 273.15
    let fahrenheit = (celcius * 9/4) + 32

    let response = {
        reamur:temperature,
        celcius:celcius,
        kelvin:kelvin,
        fahrenheit:fahrenheit,
    }
    res.json(response)
})

app.get("/convert/kelvin/:temperature", (req,res) => {
    let temperature = parseFloat(req.params.temperature)
    let celcius = temperature - 273.15
    let reamur = celcius * 4/5
    let fahrenheit = (celcius * 9/5) + 32

    let response = {
        kelvin: temperature,
        celcius: celcius,
        reamur: reamur,
        fahrenheit: fahrenheit,
    };
    res.json(response);
});

app.get("/convert/fahrenheit/:temperature", (req,res) => {
    let temperature = parseFloat(req.params.temperature)
    let celcius = (temperature - 32) * 5/9;
    let kelvin = celcius + 273.15;
    let reamur = (temperature - 32) * 4/9;
    
    let response = {
        fahrenheit: temperature,
        celcius: celcius,
        kelvin: kelvin,
        reamur: reamur,
    };
    res.json(response);
})

app.listen(3000, () => {
    console.log("Server run on port 3000")
})
