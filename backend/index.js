const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv").config();
const taskRoutes = require("./routes/task");
const connectDB = require("./db");

const app = express();
const PORT=5000;

//middleware
app.use(cors());
app.use(express.json());
connectDB();


app.use("/task", taskRoutes);


/* const TodoItemRoutes = require("./routes/todoRoutes");
 */

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
//
