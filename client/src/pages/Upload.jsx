import React, { useState, useEffect} from 'react'


function Upload() {

    const [file,setFile]=useState(null)
    const [url, setUrl]=useState(null)
    const [name,setName]=useState(null)
    const uploadingImage= async(file)=>{
        if (!file && !name){
                alert('file not selected')
                return
            }

        const formData= await new FormData()
        formData.append('image',file)
        formData.append('name',name)

        try{
            const res=await fetch('http://localhost:4000/upload',{
            method:'POST',
            body:formData})
            const data=await res.json()
            setUrl(data.url)
        }catch(err){
            console.error(err)
        }
    }

  return (
    <div className='flex flex-col items-center gap-4 min-h-screen bg-slate-900 text-white p-6'>

  <input
    type="file"
    onChange={(e)=>{setFile(e.target.files[0])}}
    className='w-full max-w-md rounded-lg border border-blue-500 bg-slate-800 p-3 text-sm file:mr-4 file:rounded-md file:border-0 file:bg-blue-600 file:px-4 file:py-2 file:text-white hover:file:bg-blue-500'
  />

  <input
    type="text"
    onChange={(e)=>{setName(e.target.value)}}
    placeholder='enter the name of image'
    className='w-full max-w-md rounded-lg border border-blue-500 bg-slate-800 px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500'
  />

  <button
    onClick={()=>{uploadingImage(file)}}
    className='rounded-lg bg-blue-600 px-6 py-3 font-semibold transition hover:bg-blue-500 active:scale-95'
  >
    Upload
  </button>

  {url &&
    <img
      src={url}
      alt=""
      className='h-64 w-auto rounded-xl border border-blue-500 object-cover shadow-lg shadow-blue-900/40'
    />
  }

</div>
  )
}

export default Upload