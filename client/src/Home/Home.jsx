import React,{useState, useEffect} from 'react'
import { NavLink, Link, Outlet } from 'react-router-dom';
// import { Items } from '../components/comonent.jsx';
import { FaHome, FaUserFriends, FaBell, FaStore } from "react-icons/fa";
import { MdOndemandVideo } from "react-icons/md";
function Home() {
  const [name,setName]=useState('')
  const [url,setUrl]=useState(null)
  async function searchImage() {
    fetch('http://localhost:4000/Getimage',
      {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ name:name })
    }
    ).then((e)=>e.json()).then((e)=>{setUrl(e);
    })
  }
  
  return (
<>
  <div className='min-h-screen bg-slate-900 text-white py-6 px-4 flex flex-col items-center'>

  <div className='flex flex-col sm:flex-row items-center gap-4 w-full max-w-2xl bg-slate-800 p-4 rounded-2xl shadow-lg shadow-blue-900/30 border border-blue-500'>

    <input
      type="text"
      placeholder='Search your mood'
      onChange={(e)=>{setName(e.target.value)}}
      className='w-full rounded-lg border border-blue-500 bg-slate-900 px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500'
    />

    <button
      onClick={searchImage}
      className='rounded-lg bg-blue-600 px-6 py-3 font-semibold transition hover:bg-blue-500 active:scale-95'
    >
      Search
    </button>

  </div>

  {url && (
    <img
      src={url}
      alt=""
      className='mt-6 h-96 w-auto rounded-2xl border border-blue-500 object-cover shadow-xl shadow-blue-900/40 p-2 bg-slate-800'
    />
  )}

  <div className='w-full mt-8'>
    <Outlet />
  </div>

</div>
</>
  );
}

export default Home;