const app=require("./app");
// const  defaultData  = require("./defaultData");



const PORT=process.env.PORT || 8080;


app.listen(PORT,function () {
    console.log(`App is Running on :${PORT}`)
})

