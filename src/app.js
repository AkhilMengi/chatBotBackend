const express = require('express');
require('dotenv').config()
const app = express();
const cors = require('cors')
const botRouter = require('./routes/chatBot');
const PORT = 3000;

// Middleware
app.use(express.json());
app.use(cors({
    origin:"http://localhost:5173",
    credentials:true
}))

app.use("/api",botRouter)
app.get("/", (req, res) =>{
    console.log("hello")
 res.send("Server is working")
}
);



// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
