API Name:InsertSignup                  //signup

Request:

{
    "userfirstname":"don",
    "userlastname":"anil",
    "userpassword":"aaaa",
    "userphoneno":"232233",
    "userjob":"Graphic Designer",
    "usermail":"don@gmail.com",
    "useraddress":"kaloor"

   

Response:

{
    "fieldCount": 0,
    "affectedRows": 1,
    "insertId": 6,
    "serverStatus": 2,
    "warningCount": 0,
    "message": "",
    "protocol41": true,
    "changedRows": 0
}

-------------------------------

API Name:communityinsert

Request:

{
   "assocname":"Oceana",
   "assocacro":"oce",
   "assoctype":"2", 
   "assocemail":"oce@gmail.com",
   "asscophno":"566778",
   "assocpostal":"78890",
   "asscodetails":"OOO",
   "assocwebsite":"www.oce.com",
   "asscohqaddress":"HqOOO",
   "assocbranch":"kochi",
   "asscodescri":"OOO123"
}

Response:

{
    "fieldCount": 0,
    "affectedRows": 1,
    "insertId": 6,
    "serverStatus": 2,
    "warningCount": 0,
    "message": "",
    "protocol41": true,
    "changedRows": 0
}

-------------------------------

API Name:communityupdate         //Assication update

Request:

{
   "assocname":"Oceana",
   "assocacro":"oce",
   "assoctype":"2", 
   "assocemail":"oce@gmail.com",
   "asscophno":"9999999",
   "assocpostal":"98890",
   "asscodetails":"OOO",
   "assocwebsite":"www.oce.com",
   "asscohqaddress":"HqOOO",
   "assocbranch":"kochi",
   "asscodescri":"OOO123",
   "id":"6"
}

Response:

{
    "fieldCount": 0,
    "affectedRows": 1,
    "insertId": 0,
    "serverStatus": 2,
    "warningCount": 0,
    "message": "(Rows matched: 1  Changed: 1  Warnings: 0",
    "protocol41": true,
    "changedRows": 1
}

-------------------------------


API Name:fetchcommunity         //Assocication select

Request:

{
    "id":"2"
}

Response:

[
    {
        "id": 2,
        "txtAssociationname": "Ron Anderson",
        "txtAcronim": "Rona",
        "refAssotype": 2,
        "txtEmail": "rona@gmail.com",
        "txtPhonenumber": "777777",
        "txtPostalno": "682021",
        "txtAssodetails": "BBB",
        "txtWebsiteurl": "www.rona.com",
        "txtHqaddress": "HQBBB",
        "txtBranches": "Trivandrum",
        "txtDescription": "BBB123",
        "txtCreatedBy": null,
        "txtCreatedOn": null,
        "txtUpdatedBy": null,
        "dtUpdatedOn": null,
        "txtDeleteflag": 0
    }
]

-------------------------------

-------------------------------

API Name:profileupdate                 //user updates

Request:

{
    "userfirstname":"honey",
    "userlastname":"rose",
    "userpassword":"hhhhh",
    "userphoneno":"888888",
    "userjob":"Painter",
    "usermail":"honey@gmail.com",
    "useraddress":"aloor",
    "id":"8"

    
}

Response:

{
    "fieldCount": 0,
    "affectedRows": 1,
    "insertId": 0,
    "serverStatus": 2,
    "warningCount": 0,
    "message": "(Rows matched: 1  Changed: 1  Warnings: 0",
    "protocol41": true,
    "changedRows": 1
}

-------------------------------

-------------------------------

API Name:Login

Request:

{
    "useremail":"tyson@gmail.com",
    "userphoneno":"222222",
    "userpassword":"986437"
}

Response:

[
    {
        "id": 2
    }
]

-------------------------------

API Name:joincommunity          //assocaitionmap insert

Request:

{
    "username":"3",
    "assconame":"3"
}


Response:

{
    "fieldCount": 0,
    "affectedRows": 1,
    "insertId": 4,
    "serverStatus": 2,
    "warningCount": 0,
    "message": "",
    "protocol41": true,
    "changedRows": 0
}