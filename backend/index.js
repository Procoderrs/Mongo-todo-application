const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv").config();
const taskRoutes = require("./routes/tasks");
const connectDB = require("./db");

const app = express();

//middleware
app.use(cors());
app.use(express.json());
connectDB();
app.use("/tasks", taskRoutes);
const TodoItemRoutes = require("./routes/tasks");

const PORT = 5000;
app.listen(PORT, () => {
	console.log(`server is running on http://localhost:${PORT}`);
});

//
