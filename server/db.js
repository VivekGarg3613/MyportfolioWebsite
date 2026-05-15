import mongoose from "mongoose"
import dotenv from "dotenv";

dotenv.config();
let error=null
console.log(process.env.MONGODB_URL)

await mongoose.connect(process.env.MONGODB_URL).then(()=>{console.log('your data base connected successfully')}).catch(
e=>{console.log(e)
    error=e
})

export {error}
