const express = require("express")
const bodyParser = require("body-parser")
const app = express()
app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.static("public/css"))

require("dotenv").config()
const sgMail = require("@sendgrid/mail")

sgMail.setApiKey(process.env.ID_API_KEY)

app.get('/', (req, res) => {
    res.sendFile(__dirname + "/index.html")
})

app.post('/', (req, res) => {
    const email = req.body.Email

    console.log("Email captured:", email); 

    const sendMail = async (msg) => {
        try {
            await sgMail.send(msg)
            console.log("Message sent successfully!")
        } catch (error) {
            console.error(error);
            if (error.response) {
                console.error(error.response.body)
            }
        }
    }

    sendMail({
        to: email,
        from: "dharshansubramaniyam2@gmail.com",
        subject: "Welcome to DevLink Marketplace",
        text: "Welcome to DevLink Marketplace,\nyour gateway to a world of endless possibilities in the realm of jobs and talent acquisition!\nWe are thrilled to have you join our community At DevLink Marketplace, \nour mission is to connect talented individuals with exciting job opportunities, and \nempower businesses to find the perfect candidates to help them grow and succeed. \nWhether you're seeking your dream job or looking to hire top-notch talent, you've come to the right place.\nThank you",
        
    })

    res.send("Email sent successfully!") 
})

app.listen(3001, () => {
    console.log("The server is working on port 3001")
})