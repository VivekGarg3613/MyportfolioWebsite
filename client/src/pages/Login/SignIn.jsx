import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
export default function SignIn() {
  const [data, setdata] = useState({
    name: "",
    email: "",
    password: ""
  });
  const [statusMessage,setstatusMessage]=useState('')

  async function handelSubmit(e) {
    e.preventDefault();
    const reslut = await fetch(`http://localhost:4000/create_user`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    });

    let return_json=await reslut.json()
    
    if (reslut.status === 409) {
      setstatusMessage(return_json.error)
    }else if(reslut.status === 201){
      setstatusMessage('User Create Successfully')
    }
  }

  const nevigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 text-gray-200">

      <div className="space-y-5 bg-gray-800 p-8 rounded-2xl shadow-2xl w-80 border border-gray-700">

        <h2 className="text-2xl font-semibold text-center text-white mb-4">
          Create Account
        </h2>

        <form 
        className="space-y-4" onSubmit={handelSubmit}>

          <div>
            <label className="block mb-1 text-sm text-gray-400">Name</label>
            <input
              type="text"
              value={data.name}
              required={true}
              min={3}
              placeholder="Enter your name"
              className="w-full p-2.5 bg-gray-900 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white placeholder-gray-500"
              onChange={(e) => {
                setdata({ ...data, name: e.target.value });
              }}
            />
          </div>

          <div>
            <label className="block mb-1 text-sm text-gray-400">Email</label>
            <input
              type="email"
              required={true}
              value={data.email}
              placeholder="Enter your email"
              className="w-full p-2.5 bg-gray-900 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white placeholder-gray-500"
              onChange={(e) => {
                setdata({ ...data, email: e.target.value });
              }}
            />
          </div>

          <div>
            <label className="block mb-1 text-sm text-gray-400">Password</label>
            <input
              type="password"
              value={data.password}
              required={true}
              min={8}
              max={20}
              pattern="^(?=.*[A-Z])(?=.*[!@#$%^&*]).{8,20}$"
              title="Must contain 1 uppercase, 1 special character, 8–20 length"
              placeholder="Enter strong password"
              className="w-full p-2.5 bg-gray-900 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white placeholder-gray-500"
              onChange={(e) => {
                setdata({ ...data, password: e.target.value });
              }}
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white p-2.5 rounded-lg hover:bg-blue-700 transition duration-200 font-medium"
          >
            Sign Up
          </button>

          <div className="flex justify-center text-sm text-gray-400">
            <p className="mr-2">Already have an account?</p>
            <button
              type="button"
              className="text-blue-400 hover:text-blue-300 transition"
              onClick={() => {
                nevigate(-1);
              }}
            >
              Login
            </button>
          </div>

          {(
            <>
            <p className="text-red-500 text-center text-sm italic">
              {statusMessage}
            </p>
            </>
            
          )}

        </form>

      </div>

    </div>
  );
}