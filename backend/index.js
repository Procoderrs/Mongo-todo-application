const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv").config();
const taskRoutes = require("./routes/todoRoutes");
const userRoutes=require('./routes/userRoutes')
const connectDB = require("./db");

const app = express();

//middleware
app.use(cors());
app.use(express.json());
connectDB();


app.use("/api/users", userRoutes);
app.use("/api/todos", todoRoutes);

/* const TodoItemRoutes = require("./routes/todoRoutes");
 */
const PORT = 5000;
app.listen(PORT, () => {
	console.log(`server is running on http://localhost:${PORT}`);
});

//
