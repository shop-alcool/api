const express = require("express");
const cors = require("cors");
const app = express();

const PORT = process.env.PORT || 3000;
const userRoutes = require("../routes/userRoutes");

app.use("/api/users", userRoutes);
app.use(express.json());
app.use(cors());

app.listen(PORT, () => {
   console.log(`🚀 Server running at http://localhost:${PORT}`);
});
