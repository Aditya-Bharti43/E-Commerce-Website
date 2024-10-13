import express from "express";
import multer from "multer"
import cors from "cors"
import path from "path"
import connectDB from "./db/connectDB.js";
import productRoute from './routes/product.routes.js'
import userRoute from './routes/user.routes.js'
import cartRoute from './routes/cart.routes.js'

const port = 4000;

const app = express();



app.use(express.json());
app.use(cors());



// Database connection with mongodb

connectDB()
.then(()=>{
    
    // Method for catching error in running express app 
    app.on("error",(error)=>{
       console.log("ERROR : ",error);
       throw error
    })
  app.listen(4000 ,()=>{
    console.log(`Server running on port ${port}`)
  })  
})
.catch((error)=>{
    console.log("MONGODb connection failed !!! ",error);
})

// all middlewares
// Product related middleware

app.use("/api/v1",productRoute)

// user middleware
app.use("/api/v1",userRoute)

// cart middleware

app.use("/api/v1",cartRoute)

// API creation

app.get("/", (req, res) => {
    res.send("Express App is Running")
})


//image storage engine

const storage = multer.diskStorage({
    destination: './upload/images',
    filename: (req, file, cb) => {
        return cb(null, `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`)
    }
})

const upload = multer({ storage: storage })

//creating upload endpoint for images

app.use('/images', express.static('upload/images'))

app.post("/upload", upload.single('product'), (req, res) => {
    res.json({
        success: 1,
        image_url: `http://localhost:${port}/images/${req.file.filename}`
    })
})

