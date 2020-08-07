const proffys = [
    { 
    name: "Gabriel Barros", 
    avatar: "https://avatars1.githubusercontent.com/u/54358297?s=460&u=b1cee0114b18a3c9f904b21d1f972c4960c06bac&v=4", whatsapp: "2345608",
    bio: "Entusiasta das melhores tecnologias de química avançada.<br><br>Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma sdas minhas explosões.",
    subject: "Química",
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
        avatar: "https://avatars2.githubusercontent.com/u/2254731?s=460&amp;u=0ba16a79456c2f250e7579cb388fa18c5c2d7d65&amp;v=4",
        whatsapp: "2345608",
        bio: "Entusiasta das melhores tecnologias de química avançada.<br><br>Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma sdas minhas explosões.",
        subject: "Química",
        cost:"20",      
        weekday: [1], 
        time_from: [720],
        time_to: [1220]
    }
]

function pageLanding(req, res) {        
    return res.render("index.html")    
}

function pageStudy(req, res) {
    return res.render("study.html", {proffys})
}

function pageGiveClasses(req, res) {
    return res.render("give-classes.html")
}

const express = require('express')
const server = express()


// config nunjucks
const nunjucks = require('nunjucks')
nunjucks.configure('src/views', {
    express: server,
    noCache: true,
})


server
// config static archives (css, scripts, img)
.use(express.static("public"))

// aplication routes
.get("/", pageLanding)
.get("/study", pageStudy)
.get("/give-classes", pageGiveClasses)
.listen(5500)

