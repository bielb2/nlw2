// database
const proffys = [
    { 
    name: "Gabriel Barros", 
    avatar: "https://avatars1.githubusercontent.com/u/54358297?s=460&u=b1cee0114b18a3c9f904b21d1f972c4960c06bac&v=4", whatsapp: "2345608",
    bio: "Entusiasta das melhores tecnologias de química avançada.<br><br>Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma sdas minhas explosões.",
    subject: "Física",
    cost:"20",      
    weekday: [0], 
    time_from: [720],
    time_to: [1220]
    },

    { 
    name: "Diego Fernandes", 
    avatar: "https://avatars2.githubusercontent.com/u/2254731?s=460&amp;u=0ba16a79456c2f250e7579cb388fa18c5c2d7d65&amp;v=4",
    whatsapp: "89 9875-4534",
    bio: "Entusiasta das melhores tecnologias de química avançada.<br><br>Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma sdas minhas explosões.",
    subject: "Química",
    cost:"20",      
    weekday: [1], 
    time_from: [720],
    time_to: [1220]
    },

    { 
        name: "Mayk Brito", 
        avatar: "https://avatars2.githubusercontent.com/u/6643122?s=460&u=1e9e1f04b76fb5374e6a041f5e41dce83f3b5d92&v=4",
        whatsapp: "2345608",
        bio: "Entusiasta das melhores tecnologias de química avançada.<br><br>Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma sdas minhas explosões.",
        subject: "Geografia",
        cost:"20",      
        weekday: [1], 
        time_from: [720],
        time_to: [1220]
    }
]

const subjects = [    
    "Artes",
    "Biologia",
    "Ciências",
    "Educação física",
    "Física",
    "Geografia",
    "História",
    "Matemática",
    "Português",
    "Química",
]

const weekdays = [   
    "Domingo",
    "Segunda-feira",
    "Terça-feira",
    "Quarta-feira",
    "Quinta-feira",
    "Sexta-feira",
    "Sábado",
]

// functions

function getSubject(subjectNumber){
    const position =  +subjectNumber -1
    return subjects[position]
}

function pageLanding(req, res) {        
    return res.render("index.html")    
}

function pageStudy(req, res) {
    // req - https requisition send by form 
    const filters = req.query    
    return res.render("study.html", 
    // send var from database to front-end
    {proffys, filters, subjects, weekdays})
}

function pageGiveClasses(req, res) {
    const data = req.query

    // transform object in array and use length
    const isNotEmpty = Object.keys(data).length > 0
    // if have data
    
    if (isNotEmpty ) {        

        data.subject = getSubject(data.subject)
        // add data in proffys
        proffys.push(data)

        return res.redirect("/study")
    }   
    // else, show the page

    return res.render("give-classes.html", {subjects, weekdays})
}

// server
const express = require('express')
const server = express()

// config nunjucks (template engine)
const nunjucks = require('nunjucks')
nunjucks.configure('src/views', {
    express: server,
    noCache: true,
})

// server config
server
// config static archives (css, scripts, img)
.use(express.static("public"))
// aplication routes
.get("/", pageLanding)
.get("/study", pageStudy)
.get("/give-classes", pageGiveClasses)
// server start
.listen(5500)

