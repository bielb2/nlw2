const Database = require ('./db.js')
const createProffy = require('./createProffy')
// database continuation

Database.then(async (db) => {
    // insert data
    proffyValue = {
        name: "Gabriel Barros", 
        avatar: "https://avatars1.githubusercontent.com/u/54358297?s=460&u=b1cee0114b18a3c9f904b21d1f972c4960c06bac&v=4", 
        whatsapp: "2345608",
        bio: "Entusiasta das melhores tecnologias de química avançada.<br><br>Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma sdas minhas explosões.",        
    }

    classValue = {
        subject: 1,
        cost:"20",    
        //proffy_id come from database     
    }

    classScheduleValues = [
        // class_id come from database, after register the class
        {
            weekday: 1, 
            time_from: 720,
            time_to: 1220
        },
        {
            weekday: 0, 
            time_from: 520,
            time_to: 1220
        }
    ]

    //await createProffy(db, {proffyValue, classValue, classScheduleValues })

    // consult the data entered

    // consult all proffys
    const selectedProffys = await db.all("SELECT * FROM proffys")
    //console.log(selectedProffys)

    // consult the classes of a given teacher
    // and bring the teacher's data together
    const selectClassesAndProffys = await db.all(`
        SELECT classes.*, proffys.*
        FROM proffys 
        JOIN classes ON (classes.proffy_id = proffys.id)
        WHERE classes.proffy_id = 1;
    `)
    //console.log(selectClassesAndProffys)

    // the time the person works, for example, is from 8 to 18
    // the time of time_from 18h must be less than or equal to the requested time
    // the time_to need to be above >
    const selectClassesSchedules = await db.all(`
        SELECT class_schedule.*
        FROM class_schedule
        WHERE class_schedule.class_id = "1"
        AND class_schedule.weekday = "0"
        AND class_schedule.time_from <= "520"
        AND class_schedule.time_to > "520"
    `)

    // console.log(selectClassesSchedules)
    
})

