
const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 4000;

app.use(cors());
app.use(express.json());

const taskRoutes = require("./routes/tasks");
app.use("/tasks", taskRoutes);

app.listen(PORT, () => {
    console.log(`Running on ${PORT}`);
});