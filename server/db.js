import mongoose from "mongoose"
let error=null
await mongoose.connect('mongodb+srv://vgarg3613_db_user:vivek1234@vivekcluster.adohbuk.mongodb.net/?appName=VivekCluster').then(()=>{console.log('your data base connected successfully')}).catch(
e=>{console.log(e)
    error=e
})

export {error}
