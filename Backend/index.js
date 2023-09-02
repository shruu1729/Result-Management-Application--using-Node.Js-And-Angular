const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mysql = require('mysql2');


const app = express();

app.use(cors());
app.use(bodyParser.json())



//database connection
const db = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'root',
    database:'resultschema',
    port:3306
});


//check database connection
db.connect(err=>{
    if(err) {
        console.log('err');
    }
    console.log("database connected...");
});

//get all student details
app.get('/students',(req,res)=>{
    //console.log('get student list');
    let query = 'select * from students'
    db.query(query,(err,result)=>{
        if(err){
            console.log(err,'error');
            res.send({
                message:'error'
            });
        }
        if(result.length>0){
            res.send({
                message:'all student data',
                data:result
            });
        }
    });
});


//get student data for a particular roll_no
app.get('/students/:roll/:name',(req,res)=>{
    let roll= req.params.roll;
    let name = req.params.name;
    //console.log(name);
    let query = 'select * from students where roll_no =? and name =?';
    let value=[roll,name];
    db.query(query,value,(err,result)=>{
        if(err){console.log(err);}

        if(result.length>0){
            res.send({
                message:'data available',
                data:result

            });
        }
        else{
            res.send({
                message:'no such data exists in database'
            });
        }
    });

});
//get student data for a particular roll_no
app.get('/students/:roll',(req,res)=>{
    let roll= req.params.roll;
    //console.log(name);
    let query = 'select * from students where roll_no =?';
    let value=roll;
    db.query(query,value,(err,result)=>{
        if(err){console.log(err);}

        if(result.length>0){
            res.send({
                message:'data available',
                data:result

            });
        }
        else{
            res.send({
                message:'no such data exists in database'
            });
        }
    });

});

//add a new student in the database
app.post('/students',(req,res)=>{
    console.log(req.body,'createdate');

    let roll_no = req.body.roll_no;
    let name = req.body.name;
    let dob = req.body.date_of_birth;
    let score = req.body.score;
    console.log(typeof dob);
    let query = 'insert into students(roll_no, name, date_of_birth, score) values ?';
    let values = [[roll_no,name,dob,score]];
    db.query(query,[values],(err,result)=>{
        if(err){console.log(err);
        res.send({
            message:'error'
        });
    }
        //console.log(result,'result');
        else{res.send({
            message:'data inserted'
        });
    }
    });
});


//update a student details
app.put('/students/:roll',(req,res)=>{
    console.log(req.body,'updatedata');
    let roll_no = req.body.roll_no;
    let name = req.body.name;
    let dob = req.body.date_of_birth;
    let score = req.body.score;

    let query = 'update students set name = ?, date_of_birth = ? , score = ? where roll_no = ?';
    let values = [name,dob,score,roll_no];

    db.query(query,values,(err,result)=>{
        if(err){console.log(err);
            res.send({
                message:'error'
            });}

        else{res.send({
            message:'data updated successfully'
        });
    }
    });
});


//delete a student based on the roll_no
app.delete('/students/:roll',(req,res)=>{
    let roll_no = req.params.roll;

    let query = 'delete from students where roll_no = ?';
    let value = [roll_no];

    db.query(query,value,(err,result)=>{
        if(err){console.log(err);
            res.send({
                message:'error'
            });
        }

        else{res.send({
            message:'deleted successfully'
            });
        }
    });
});
app.listen(3000,()=>{
    console.log('server running......');
});