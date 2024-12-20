const express = require('express')

const app = express()

const port = 5000

const MiddleWareVerif=(req,res,next)=>{
    var currentDate = new Date()
    var currentHour = currentDate.getHours()
    var currentDay = currentDate.getDay()

    if (currentDay == 0 || currentDay == 6 || currentHour < 9 || currentHour > 17) {
        return res.send('Msakrin')
    }

    next()
}

app.use(MiddleWareVerif)

app.get('/',(req,res)=>{
    res.sendFile(__dirname+'/public/Homepage.html')
})

app.get('/OurServices',(req,res)=>{
    res.sendFile(__dirname+'/public/OurServices.html')
})

app.get('/ContactUs',(req,res)=>{
    res.sendFile(__dirname+'/public/Contactus.html')
})




app.listen(port, console.log(`Server is running on the port ${port}`))