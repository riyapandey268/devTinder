const express  = require("express");

const app = express();
//order of routes matters

app.get("/user", (req, res) =>{
    res.send ("user data send successfully");
})

app.post ("/user", (req, res) =>{
    res.send ("users data posted successfully");
});

app.delete("/user", (req, res) =>{
    res.send ("users data deleted successfully")
})
app.use ( "/test", (req, res)=>{
    res.send("This is test");
})
// app.use ( "/hello", (req, res)=>{
//     res.send("Hello hello hello");
// })
// app.use ( "/hello/2", (req, res)=>{
//     res.send("this is hello 2");
// })
// app.use ( "/riya", (req, res)=>{
//     res.send("This is riya pandey");
// })
// app.use ( "/", (req, res)=>{
//     res.send("Hello from server");
// })
app.listen(3000,  ()=>{

console.log("Server is succesfully listning on port 3000")
});




