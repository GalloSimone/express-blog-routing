const express = require("express");
const router = express.Router();




        const noticeBoard =[
            {   
                titolo: "Ciambellone",
                contenuto:"Un dolce soffice e genuino, perfetto per addolcire le tue giornate con un tocco di tradizione casalinga.",
                img:"./public/images/ciambellone.jpeg",
                tags : ["ciambellone", "tradizione"]
            },
            {   
                titolo: "Cracker alla barbabietola",
                contenuto:"Leggeri e croccanti, questi cracker uniscono il sapore unico della barbabietola a una bontà irresistibile.",
                img:"./public/images/cracker_barbabietola.jpeg",
                tags : ["cracker","barbabietola"]
            },
            {   
                titolo: "Pane fritto",
                contenuto:" Una delizia dorata e fragrante, ricoperta di zucchero o miele, che regala un'esplosione di dolcezza al primo morso.",
                img:"./public/images/cracker_barbabietola.jpeg",
                tags : ["pane", "fritto"]
            },
            {   
                titolo: "Pasta alla barbabietola",
                contenuto:"Un primo piatto scenografico e raffinato, dal sapore delicato e dalla crema vellutata che conquista",
                img:"./public/images/pasta_barbabietola.jpeg",
                tags : ["pasta", "barbabietola"]
            },
            {   
                titolo: "Torta paesana",
                contenuto:"Il dolce rustico che racchiude tutta la magia dei sapori antichi, con note di cacao, uvetta e pinoli.",
                img:"./public/images/torta_paesana.jpeg",
                tags : ["dolce", "torta", "paesana"]
            }]
            //INDEX
    router.get('/',(req, res)=> {

            res.json({message: "POST", noticeBoard, noticeBoardCount: noticeBoard.length})
            })








module.exports = router;