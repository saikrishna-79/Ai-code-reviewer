require('dotenv').config()
const app=require('./src/app')



app.listen(3001,()=>{
    console.log('Server is Running on http://localhost:3001')
})