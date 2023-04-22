const mysql=require("mysql")

const dbconnect=mysql.createConnection({
    host:"localhost",
    user:"",
    password:"",
    database:""
});

dbconnect.connect((error)=>{
    if(error) throw error;
    console.log("connection successful to sql");

});

module.exports=dbconnect;


