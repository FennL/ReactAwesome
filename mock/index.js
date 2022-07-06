const express = require("express")
const app = express()
app.use(express.json())
app.listen(3100,()=>{
    console.log("Express Server is listening at port 3100")
})

app.get("/api/list", (req,res) => { 
    res.send(
        [
            {
                name:"fenn",
                age:23
            },
            {
                name:"jy",
                age:22
            }
        ]
    )
})
// 如果子路由比较多的话，可以使用router包专门处理子路由，再app.use(router)挂载
