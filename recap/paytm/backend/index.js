const express = require("express");
const cors = require("cors");
const rootRouter = require("./routes/index");
const { connectDB } = require("./db"); // Destructure connectDB from the imported module

const PORT = 4000;

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Route
app.get("/", (req, res) => {
    res.send("Hello World!");
});

app.use("/api/v1", rootRouter);

// Connect to MongoDB before starting the server
connectDB().then(() => {
    // Start the server only if the database connection is successful
    app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`);
    });
}).catch((err) => {
    console.error("Failed to connect to the database. Server not started.", err);
});
