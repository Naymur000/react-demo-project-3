import { useState } from "react";

const Login = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const submitHandler = (p) =>{
    p.preventDefault()
    console.log('Email: ',email)
    console.log('Password: ',password)

    setEmail('')
    setPassword('')
  }

  return (
    <div className="flex items-center justify-center h-screen w-screen">
      <div className="border-2 border-emerald-700 p-18 rounded-2xl">
        <form 
        onSubmit={(e)=>{
          submitHandler(e)
        }
        }
        className="flex flex-col items-center justify-center">
          <input
          value={email}
          onChange={(e)=>{
            setEmail(e.target.value)
            console.log(e.target.value)
          }}
          required className="border-2 border-emerald-500 rounded-2xl p-2 m-3 text-2xl outline-none " type="email" placeholder="Enter your email" />
          <input
          value={password}
          onChange={(e)=>{
            setPassword(e.target.value)
          }}
          required className="border-2 border-emerald-500 rounded-2xl p-2 m-1 text-2xl outline-none " type="password" placeholder="Enter your password" />
          {/* <button className="border-2 border-emerald-600 rounded-2xl py-2 px-6 m-3 text-xl outline-none bg-emerald-600" >Log in</button> */}
        </form>
      </div>
    </div>
  );
};

export default Login;
