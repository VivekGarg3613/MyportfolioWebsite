import dotenv from 'dotenv'

import express from 'express'

import cors from 'cors'

import './db.js'

import { error } from './db.js'

import { addHotel, all_user, check_user, create_user, delet_allUser, getSchema, ReturnImage, updataSchema } from './function.js'

import upload from './middleware/mutler.js';

import cloudinary from './cloudinary.js';

import fs from 'fs';

import { uploadImage } from './controler.js'

dotenv.config();

console.log(process.env.CLOUD_NAME);

const app=express()
app.use(express.json())
app.use(cors())
console.log(error)


app.post('/check_user',check_user)
app.post('/upload', upload.single('image'), uploadImage)

app.post('/create_user',create_user)

app.get('/all_user',all_user)

app.get('/delet_allUser', delet_allUser)

app.get('/updataSchema', updataSchema)

app.get('/getSchema', getSchema)
app.post('/addHotel',addHotel)
app.post('/Getimage',ReturnImage)

app.listen(4000,()=>{
    console.log('server is ready')
})





