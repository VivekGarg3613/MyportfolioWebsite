import { User, Hotels, Image } from "./model/AllSchema.js"
export const check_user=async(req,res)=>{
    try{
        const obj_data=req.body
        const result= await User.findOne(obj_data)
        console.log(result)
        if (result != null) {
            return res.status(200).json(result);
        } else {
            return res.status(404).json({ message: "User not found" });
        }
    }catch(e){
        console.log(e)  
        return res.status(500).json({message:'Server error'})
    }   
}

export const uploadImageIndb= async(req,res)=>{
    try {
        const savedImage=await Image.create(req.body)
        res.status(200).json(savedImage)
    }catch(error){
        console.log(error)
        res.send('image not save and this is server message')
    }
}

export const ReturnImage= async (req,res)=>{
    console.log(req.body.name)
    try {
        const image=await Image.findOne({"name":req.body.name})
        res.status(200).json(image.url)
        console.log(image.url)
    }catch(error){
        console.log(error)
        res.send('db error')
    }
}

export const create_user=async(req,res)=>{
    try {
    const savedUser = await User.create(req.body);
    

    res.status(201).json(savedUser)
  } catch (err) {
    console.log(err.code)
    // 11000 error is for duplicate data
    if (err.code===11000){
        const error=Object.keys(err.keyValue)[0]
        console.log(`${error} : already exist`)
        res.status(409).json({ error:`${error} : already exist`})
    }else{
        res.status(500).json({error:'server is crased'})
    }
  }
}

export const all_user=async(req,res)=>{
    const all_user=await User.find({})
    res.json(all_user)
    console.log(all_user)
}

export const delet_allUser=async(req,res)=>{
    try{
        const result= await User.deleteMany({})
    console.log(result)
    res.json(result)
    }catch(e){
        console.log('this catch block run')
        res.send(e)
    }
}

export const updataSchema=async(req,res)=>{
    await User.collection.dropIndex("name_1"); 
    await User.collection.dropIndex("password_1"); 
    const result= await User.collection.createIndex({name_1:1,password_1:1})
    console.log(result)
    res.json(result)
}

export const getSchema=async(req,res)=>{
    const result= await User.collection.getIndexes(); 
    console.log(result)
    res.json(result)
}

export const addHotel=async(req,res)=>{
    try{
        const result= await Hotels.create(req.body)
        res.status(201).json(result)
    }catch(error){
        console.log(error)
        res.send(error)
    }
}