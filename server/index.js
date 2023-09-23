import express from "express"
import authRoutes from "./routes/auth.js"
import userRoutes from "./routes/users.js"
import postRoutes from "./routes/posts.js"
import cookieParser from "cookie-parser"
import multer from "multer"

const app = express()

app.use(express.json())
app.use(cookieParser())

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, '../client/public/upload')
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + file.originalname)
    }
})

const upload = multer({
    storage: storage,
    limits: {
        fileSize: 1024 * 1024 * 5,
    }
})

app.post('/api/upload', upload.single('file'), function (req, res) {
    const file = req.file
    if (!file) {
        return res.status(400).json("No file uploaded")
    }
    res.status(200).json("Image has been uploaded" + file.filename)
})

app.use("/api/posts", postRoutes)
app.use("/api/users", userRoutes)
app.use("/api/auth", authRoutes)

app.get("/test", (req, res) => {
    res.json("It works")
})

app.listen(8800, () => {
    console.log("Connected!")
})