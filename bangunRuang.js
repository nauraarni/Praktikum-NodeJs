const express = require("express")
const bodyParser = require("body-parser")
const cors = require("cors")
const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
app.use(cors())

app.post("/hitung-kubus", (req,res) => {
    let sisi = Number(req.body.sisi)
    let luaspermukaan = 6 * sisi * sisi
    let volume = sisi * sisi

    let response = {
        sisi:sisi,
        luaspermukaan: luaspermukaan,
        volume:volume,
    }
    res.json(response)
})

app.get("/hitung-balok", (req,res) => {
    let panjang = Number(req.body.panjang)
    let lebar = Number(req.body.lebar)
    let tinggi = Number(req.body.tinggi)
    let luaspermukaan = 2 * ((panjang + lebar) * (panjang + tinggi) * (lebar + tinggi))
    let volume = panjang * lebar * tinggi

    let response = {
        panjang:panjang,
        lebar:lebar,
        tinggi:tinggi,
        luaspermukaan:luaspermukaan,
        volume:volume,
    }
    res.json(response)
})

app.post("/hitung-tabung", (req,res) => {
    let jarijari = Number(req.body.jarijari);
    let tinggi = Number(req.body.tinggi);
    let volume = Math.PI * Math.pow (jarijari, 2) * tinggi
    let luaspermukaan = 2 * Math.PI * jarijari * (jarijari + tinggi)

    let response = {
        jarijari:jarijari,
        tinggi:tinggi,
        volume:volume,
        luaspermukaan:luaspermukaan,
    }
    res.json(response)
})

app.get("/hitung-bola", (req,res) => {
    let jarijari = Number(req.body.jarijari);
    let volume = (4 / 3) * Math.PI * Math.pow(jarijari, 3);
    let luaspermukaan = 4 * Math.PI * Math.pow(jarijari, 2); 

    let response = {
        jarijari:jarijari,
        volume:volume,
        luaspermukaan:luaspermukaan,
    }
    res.json(response)
})

app.listen(3000, () => {
    console.log("Server run on port 3000")
})