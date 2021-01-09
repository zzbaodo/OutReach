const express = require("express")
const connectDB = require("./config/db")
const cors = require("cors")

connectDB()
const app = express()
app.use(cors())


app.use("/api/users", require("./routes/api/user"))
app.use("/api/auth", require("./routes/api/auth"))
app.use("/api/post", require("./routes/api/post"))
app.use("/api/profile", require("./routes/api/profile"))

const PORT = process.env.PORT || 5000

app.listen(PORT, () => console.log(`Server started on ${PORT}`))
