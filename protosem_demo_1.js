const express = require('express')
const app = express()
var faker = require('faker')
app.use(express.static('views'))

app.get('/:id',(req, res)=>{
    var fakeName = faker.name.firstName()
    var fakeJob = faker.name.jobTitle()
    var fakeJobDesc = faker.name.jobDescriptor()
    res.render("index.ejs",{name:fakeName,job:fakeJob,jobDesc:fakeJobDesc})
})

app.listen(8000,()=>{
    console.log("server started @8000")
})