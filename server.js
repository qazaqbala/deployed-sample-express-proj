
const express = require ("express");
//importing handlebars
const exphbs = require ('express-handlebars');
//importing body-parser from express 
const bodyParser = require('body-parser');

const sgMail = require('@sendgrid/mail')

//importing local module; FakeDB-getFilms()
const fakeDB = require("./model/FakeDB.js");
const fakeDB2 = require("./model/FakeDB2.js");
const fakeDB3 = require("./model/FakeDB3.js");



//creation of the app object
const app = express();



//this tells the app object which express which template engine we are using. After app, but before routes.
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

//To use static/public files 
app.use(express.static("public"));

//This tells express to make form data available via req.body. in every request.
app.use(bodyParser.urlencoded({ extended: false }))




//ROUTES
//HOME PAGE
app.get("/",(req,res)=>{
    //res.send(`<h1>Main Template Page</h1> <br> ${getFilms()}`)
    res.render("home",{title:"TFlex - Rent, Buy, Watch Movies & TV Online",  films:fakeDB.getAllProducts(), films2:fakeDB2.getAllProducts(), films3:fakeDB3.getAllProducts()});
})
//LISTING PAGE
app.get("/listing",(req,res)=>{
    res.render("listing",{title: "TFlex - Movies", films2:fakeDB2.getAllProducts()}) 
})
//DETAILS PAGE
app.get("/listing/:id",(req,res)=>{
    res.render("details",{title:"TFlex - Movies",
        products:fakeDB2.getAProduct(req.params.id)
    });
})

//REGISTRATION PAGE
require('dotenv').config({ path: 'config/keys.env' });

app.get("/registration",(req,res)=>{
    res.render("registration", {title:"My TFLEX - Account Setup"});
})
app.post("/registration", (req,res)=>{
    let errors = 0;
    let whichOne = "";
    
    let arr = new Array(4);

    var msgs = {
        fMsg: req.body.fname,
        lMsg: req.body.lname,
        eMsg: req.body.email,
        pMsg: req.body.password
    };
    

    if(req.body.fname == ""){
        errors++;
        whichOne = "f";
        arr[0] = "Please, enter a valid first name!";
    }
    if(req.body.fname != ""){
        const fname = req.body.fname;
        const regx = /^[a-zA-Z]{3,30}$/;
        const found = regx.test(fname);
        if(!found){
            arr[0] = "First name must be between 3 and 30 characters long";
            whichOne = "f";
            errors++;
        }
    }

    if(req.body.lname == ""){
        errors++;
        whichOne = "l";
        arr[1] = "Please, enter a valid last name!";
    }
    if(req.body.email == ""){
        errors++;
        whichOne = "e";
        arr[2] = "Please, enter a valid email!";
    }
    if(req.body.password != ""){
        const pass = req.body.password;
        const regx = /^[0-9a-zA-Z]{6,12}$/;
        const found = regx.test(pass);
        if(!found){
            arr[3] = "Password must be between 6 and 12 characters long";
            whichOne = "p";
            errors++;
        }
    }
    if(req.body.password == ""){
        errors++;
        whichOne = "p";
        arr[3] = "Please, enter a valid password!";
    }

    if(errors == 4){
        res.render("registration", 
        {title:"TFlex - Sign In/Sign Up", errFname: arr[0], errLname:arr[1], errEmail:arr[2], errPassword:arr[3], msg:msgs});
    }
    else if(errors == 3){
        res.render("registration", 
        {title:"TFlex - Sign In/Sign Up", errFname: arr[0], errLname:arr[1], errEmail:arr[2], errPassword:arr[3], msg:msgs});
    }
    else if(errors == 2){
        res.render("registration", 
        {title:"TFlex - Sign In/Sign Up", errFname: arr[0], errLname:arr[1], errEmail:arr[2], errPassword:arr[3], msg:msgs});
    }
    else if(errors ==  1){
        res.render("registration", 
        {title:"TFlex - Sign In/Sign Up", errFname: arr[0], errLname:arr[1], errEmail:arr[2], errPassword:arr[3], msg:msgs});
    }
    
    else{
        res.redirect("/");
 
        sgMail.setApiKey(process.env.SEND_GRID_KEY)
        const msg = {
        to: `${req.body.email}`, // Change to your recipient
        from: 'ttolen@myseneca.ca', // Change to your verified sender
        subject: 'Sending with SendGrid is Fun',
        text: 'and easy to do anywhere, even with Node.js',
        html: `Full Name: ${req.body.fname} ${req.body.lname}.`,
        }
        sgMail
        .send(msg)
        .then(() => {
            console.log('Email sent')
        })
        .catch((error) => {
            console.error(error)
        })

    }
})

//LOGIN PAGE
app.get("/login",(req,res)=>{
    res.render("login", {title:"TFlex - Sign In/Sign Up"});
})
app.post("/login", (req,res)=>{
    let errors = 0;
    let whichOne = "";

    var msgs = {
        eMsg: req.body.email,
        pMsg: req.body.password 
    };
    

    if(req.body.email == ""){
        errors++;
        whichOne = "e";
    }
    if(req.body.password == ""){
        errors++;
        whichOne = "p";
    }
    if(errors == 2){
        res.render("login", 
        {title:"TFlex - Sign In/Sign Up", errorEmail: "Please, enter a valid email!", errorPassword:"Please, enter a valid password!"});
    }
    else if(errors ==  1){
        if(whichOne == "e"){
            res.render("login", 
            {title:"TFlex - Sign In/Sign Up", errorEmail: "Please, enter a valid email!", msg:msgs});
        }
        else{
            res.render("login", 
            {title:"TFlex - Sign In/Sign Up", errorPassword:"Please, enter a valid password!", msg:msgs});
        }
    }
    else{
        res.redirect("/");
    }
})


app.get("/welcome",(req,res)=>{
    res.render("welcome", {title:"TFlex - Welcome Page"});
})
//creating the server
const PORT = 5001;
app.listen(PORT, ()=>{
    console.log(`Web server is up on port ${PORT}`);
})

