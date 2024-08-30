import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import bcrypt from "bcrypt";
import cookieParser from "cookie-parser";
import nodemailer from "nodemailer";

const salt = 10;
const PORT = process.env.PORT || 8080;
const app = express();

app.use(express.json());
app.use(cors());
app.use(cookieParser());



const uri = "mongodb+srv://loki20012002:4q1VoaP1HiGvdMkm@cluster0.anaqt.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"; // Replace with your actual MongoDB Atlas connection string
mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log("Connected to MongoDB Atlas");
}).catch((err) => {
  console.error("Error connecting to MongoDB Atlas:", err);
});

// Mongoose schema and model
const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
});

const User = mongoose.model('User', userSchema);

app.post('/', async (req, res) => {
  try {
    const hashedPassword = await bcrypt.hash(req.body.password.toString(), salt);
    const newUser = new User({
      name: req.body.name,
      email: req.body.email,
      password: hashedPassword,
    });
    await newUser.save();
    res.json({ Status: "Success" });
  } catch (err) {
    res.json({ Error: "Error inserting data", code: err.code, message: err.message });
  }
});

app.post('/log-in', async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    if (!user) {
      return res.json({ Error: "The email you typed does not exist" });
    }

    const isMatch = await bcrypt.compare(req.body.password.toString(), user.password);
    if (isMatch) {
      return res.json({ Status: "Success" });
    } else {
      return res.json({ Error: "Password is not matched" });
    }
  } catch (err) {
    res.json({ Error: "Login error in server" });
  }
});

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
    text: `A new grievance has been submitted by ${name}. Email: ${email}.`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
      return res.status(500).send('Error sending email.');
    }
    res.status(200).send('Grievance submitted and email sent successfully.');
  });
});

app.listen(PORT, () => {
  console.log("Server is running on port 8080...");
});