import express from "express";
import mysql from "mysql";
import cors from "cors";
import bcrypt from "bcrypt";
import cookieParser from "cookie-parser";
import nodemailer from "nodemailer";

const salt = 10;
const app = express();

app.use(express.json());
app.use(cors());
app.use(cookieParser());

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "signup",
});

app.post('/', (req, res) => {
  const sql = "INSERT INTO login(`name`, `email`, `password`) VALUES(?)";
  bcrypt.hash(req.body.password.toString(), salt, (err, hash) => {
    if (err) return res.json({ Error: "Error hashing password" });
    
    const values = [
      req.body.name,
      req.body.email,
      hash,
    ];
    
    db.query(sql, [values], (err, result) => {
      if (err) return res.json({ Error: "Inserting data Error in server" });
      return res.json({ Status: "Success" });
    });
  });
});

app.post('/log-in',(req,res)=>{
    const sql = 'SELECT * FROM login WHERE email = ?';
    db.query(sql, [req.body.email], (err, data) => {
    if (err) return res.json({Error: "Login error in server"});
    if (data.length > 0) {
        bcrypt.compare(req.body.password.toString(), data[0].password, (err, response) => {
            if (err) return res.json({Error: "Password compare error"});
            if (response) {
                return res.json({Status: "Success"});
            } else {
                return res.json({Error: "Password is not matched"});
            }
        });
    } else {
        return res.json({Error: "the email you typed is not existed"});
    }
});

})

const transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
      user: 'ajayvadakkinalil@gmail.com',  
      pass: 'rjdj tuzh lvov iinr',   
    },
});
app.post('/form', (req, res) => {
    const { name, email } = req.body;


    console.log('Received name:', name, 'Received email:', email);
  
    const mailOptions = {
      from: 'your-email@gmail.com',  
      to: 'ajayvnair61@gmail.com',  
      subject: 'New Grievance Submitted',
      text: `A new grievance has been submitted by ${name} Email: ${email}.`,
    };
  
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.log(error);
        return res.status(500).send('Error sending email.');
      }
      res.status(200).send('Grievance submitted and email sent successfully.');
    });
  });



app.listen(8081, () => {
  console.log("Server is running on port 8081...");
});
