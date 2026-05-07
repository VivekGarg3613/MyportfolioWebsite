import { useState } from "react";
import { NavLink, Link, useNavigate } from "react-router-dom";
export default function Login() {
  const nevigate=useNavigate()
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userExist,setUserExist]=useState(false);


  const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const result = await fetch("http://localhost:4000/check_user", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ email: email, password: password })
    });

    console.log("Status:", result.status);

    if (result.status === 200) {
      nevigate("/mainLayout");
    } else {
      setUserExist(true)
      console.log('your are not the user');
    }

  } catch (error) {
    console.log("Request failed:", error);
  }
};

  async function allusers(){
      const data= await fetch('http://localhost:4000/all_user')
      const data2=await data.json()
      console.log(data2)
  }

  async function deleteuser(){
      const data= await fetch('http://localhost:4000/delet_allUser')
      const data2=await data.json()
      console.log(data2)
  }

  async function changeindex(){
    fetch('http://localhost:4000/updataSchema')
    .then((e)=>{console.log(e.statusText)})
    
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-800">
      <form
        autoComplete="off"
        onSubmit={handleSubmit}
        className="bg-gray-700 p-8 rounded-xl shadow-md w-80"
      >
        <h2 className="text-2xl font-bold text-center mb-6">Login</h2>

        <div className="mb-4">
          <label className="block text-sm mb-1">Email</label>
          <input
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="mb-5">
          <label className="block text-sm mb-1">Password</label>
          <input
            type="password"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        
        {userExist&& <br/>}
        <button type='submit' className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition">
          Login
        </button>
        <br />
        <br/>
        <div className="flex justify-center">
          <p className="text text-center mt-4">
                    Don't have an account?{" "}
                    <br />
                    <NavLink to='SignIn' className='text-blue-600 hover:border-b-2 border-blue-600'>Create Account</NavLink>
                  </p>
        </div>
        <br />
        {userExist&& <p className="text-red-500 text-sm text-center">You don't have any account
          </p>}
        <button type="button" className="bg-blue-500 p-2 rounded-md text-white mr-2" onClick={changeindex}>updataSchema</button>
        {/* 
        <button type="button" className="bg-blue-500 p-2 rounded-md text-white" onClick={
          async()=>{const data=await fetch('http://localhost:4000/getSchema')
            data.json().then((e)=>{console.log(e)})
          }}>getindex</button>

        <button type="button" className="bg-blue-500 p-2 rounded-md text-white mr-2 mt-2" onClick={deleteuser}>delete all user</button> */}
        <button type='button' className='bg-blue-600 text-white p-2 rounded-md'onClick={()=>{allusers()}}>all_user</button>
        {/* <button type='button' className='bg-blue-600 text-white p-2 rounded-md' onClick={()=>{deleteuser()}}>deleteuser</button> */}
      </form>
      
     
    </div>
  );
}