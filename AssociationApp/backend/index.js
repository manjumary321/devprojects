const express = require("express");
const app = express();
const port = 4000;
var mysql = require('mysql');
app.use(express.json())//for reading json request
var nodemailer = require('nodemailer');


//  -----------connection------------
var con = mysql.createConnection({

    host: "localhost",
    user: "root",
    password: "password",
    database: "associationapp",
});


con.connect(function (err) {
    if (err) {
        console.log(err);
    }
    else {
        console.log("connected");
    }
});



//-----------------user signup-----------------

app.post("/InsertSignup", (req, res) => {
    // console.log(req)

    var userfirstname = req.body.userfirstname;
    var userlastname = req.body.userlastname;
    var userpassword = req.body.userpassword;
    var userphoneno = req.body.userphoneno;
    var userjob = req.body.userjob;
    var useremail = req.body.useremail;
    var useraddress = req.body.useraddress;


    var sql = "insert into tblusers(txtFname,txtLname,txtUpassword,txtUphoneno,txtJob,txtUemail,txtUaddress) values ('" +
        userfirstname + "','" +
        userlastname + "','" +
        userpassword + "','" +
        userphoneno + "','" +
        userjob + "','" +
        useremail + "','" +
        useraddress + "')";

    con.query(sql, function (err, result) {
        if (err) throw (err)
        res.send(result);
        console.log("1 record Insert Users");
    })


});

//  -----------profileupdates/users------------

app.post("/profileupdate", (req, res) => {
    // console.log(req)
    var userfirstname = req.body.userfirstname;
    var userlastname = req.body.userlastname;
    var userpassword = req.body.userpassword;
    var userphoneno = req.body.userphoneno;
    var userjob = req.body.userjob;
    var useremail = req.body.useremail;
    var useraddress = req.body.useraddress;
    var id = req.body.id;

    var sql = "update tblusers set txtFname ='" + userfirstname +
        "', txtLname ='" + userlastname +
        "', txtUpassword ='" + userpassword +
        "', txtUphoneno ='" + userphoneno +
        "', txtJob ='" + userjob +
        "', txtUemail ='" + useremail +
        "', txtUaddress =' " + useraddress +
        "'  where id ='" + id + " ' ";

    con.query(sql, function (err, result) {
        if (err) throw (err)
        res.send(result);
        console.log("1 record profile/users updated");
    })

});

//  -----------login/select------------

app.post("/Login", (req, res) => {
    var useremail = req.body.useremail;
    var userphoneno = req.body.userphoneno;
    var userpassword = req.body.userpassword;
    var sql = "select id from tblusers where (txtUemail = '" +
        useremail + "'|| txtUphoneno ='" + userphoneno + "') && txtUpassword = '" + userpassword + "'";
    con.query(sql, function (err, result) {
        if (err) {
            console.log(err);
            res.send(err);
        }
        else {
            console.log(result);
            res.send(result);
        }

    })
})



//-----------------communityinsert/associate-----------------

app.post("/communityinsert", (req, res) => {
    // console.log(req)

    var assocname = req.body.assocname;
    var assocacro = req.body.assocacro;
    var assoctype = req.body.assoctype;
    var assocemail = req.body.assocemail;
    var asscophno = req.body.asscophno;
    var assocpostal = req.body.assocpostal;
    var asscodetails = req.body.asscodetails;
    var assocwebsite = req.body.assocwebsite;
    var asscohqaddress = req.body.asscohqaddress;
    var assocbranch = req.body.assocbranch;
    var asscodescri = req.body.asscodescri;


    var sql = "insert into tblassociation(txtAssociationname,txtAcronim,refAssotype,txtEmail,txtPhonenumber,txtPostalno,txtAssodetails,txtWebsiteurl,txtHqaddress,txtBranches,txtDescription) values ('" +
        assocname + "','" +
        assocacro + "','" +
        assoctype + "','" +
        assocemail + "','" +
        asscophno + "','" +
        assocpostal + "','" +
        asscodetails + "','" +
        assocwebsite + "','" +
        asscohqaddress + "','" +
        assocbranch + "','" +
        asscodescri + "')";

    con.query(sql, function (err, result) {
        if (err) throw (err)
        res.send(result);
        console.log("1 record Insert Association");
    })


});

//  -----------communityupdate/Assocication------------

app.post("/communityupdate", (req, res) => {
    // console.log(req)
    var assocname = req.body.assocname;
    var assocacro = req.body.assocacro;
    var assoctype = req.body.assoctype;
    var assocemail = req.body.assocemail;
    var asscophno = req.body.asscophno;
    var assocpostal = req.body.assocpostal;
    var asscodetails = req.body.asscodetails;
    var assocwebsite = req.body.assocwebsite;
    var asscohqaddress = req.body.asscohqaddress;
    var assocbranch = req.body.assocbranch;
    var asscodescri = req.body.asscodescri;
    var id = req.body.id;

    var sql = "update tblassociation set txtAssociationname ='" + assocname +
        "', txtAcronim ='" + assocacro +
        "', refAssotype ='" + assoctype +
        "', txtEmail ='" + assocemail +
        "', txtPhonenumber ='" + asscophno +
        "', txtPostalno ='" + assocpostal +
        "', txtAssodetails =' " + asscodetails +
        "', txtWebsiteurl ='" + assocwebsite +
        "', txtHqaddress ='" + asscohqaddress +
        "', txtBranches ='" + assocbranch +
        "', txtDescription ='" + asscodescri +
        "'  where id ='" + id + " ' ";

    con.query(sql, function (err, result) {
        if (err) throw (err)
        res.send(result);
        console.log("1 record Associaton updated");
    })

});

//  -----------GetBlogs/select------------

app.post("/fetchcommunity", (req, res) => {
    // console.log(req)

    var id = req.body.id

    var sql = "select * from tblassociation where id='" + id + "'";

    con.query(sql, function (err, result) {
        if (err) throw (err)
        res.send(result);
        console.log("result fetch community");
    })

});

//-----------------joincommunity/assocaitionmap-----------------

app.post("/joincommunity", (req, res) => {
    // console.log(req)

    var username = req.body.username;
    var assconame = req.body.assconame;

    var sql = "insert into tblassocaitionmap(refUserid,refAssoid) values ('" +
        username + "','" +
        assconame + "')";

    con.query(sql, function (err, result) {
        if (err) throw (err)
        res.send(result);
        console.log("1 record Insert Users");
    })


});
// ---------------------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------------------

// -----------------------bulk email----------------------

app.post("/bulkemail", (req, response) => {


    // var transporter =nodemailer.createTransport('smtps://user%40gmail.com:pass@smtp.gmail.com');

    // var mailOptions = {
    //     from: '"Fred Foo 👥" <foo@blurdybloop.com>', // sender address
    //     to: 'bar@blurdybloop.com, baz@blurdybloop.com', // list of receivers
    //     subject: 'Hello ✔', // Subject line
    //     text: 'Hello world 🐴', // plaintext body
    //     html: '<b>Hello world 🐴</b>' // html body
    // };
    // transporter.sendMail(mailOptions, function (error, info) {
    //     if (error) {
    //         return console.log(error);
    //     }
    //     console.log('Message sent: ' + info.response);
    // });


});

// -----------------

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});



//old
// app.listen(port, function () {
//     console.log("server is running");
//   });
