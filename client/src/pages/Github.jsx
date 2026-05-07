import React, { useState } from 'react'
import { useParams,useLoaderData } from 'react-router-dom'
function Github() {
    
    const user=useLoaderData()
    // console.log(userID)
  return (
    <div className='flex justify-center bg-amber-300 p-5 my-2'>
        <img src={user.avatar_url} className="w-50 rounded-md" />
        <div className='my-auto ml-10'>
          <h2 className="text-xl italic">Name: {user.name}</h2>
          <p className='text-xl italic'>Followers: {user.followers}</p>
        </div>
    </div>
  )
}

export default Github