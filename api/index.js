import  express  from "express";
import userRoutes from "./routes/users.js"
import authRoutes from "./routes/auth.js"
import commentRoutes from "./routes/comments.js"
import likeRoutes from "./routes/likes.js"
import postRoutes from "./routes/posts.js"
import cors from 'cors';
import cookieParser from "cookie-parser";


const app = express();



//middlewares
app.use(express.json());
app.use(cors());
app.use(cookieParser());
app.use("/api/users",userRoutes);
app.use("/api/auth",authRoutes);
app.use("/api/comments",commentRoutes);
app.use("/api/likes",likeRoutes);
app.use("/api/posts",postRoutes);


app.listen(8000,()=>{
    console.log(`Listening at port ${8000}`);
})