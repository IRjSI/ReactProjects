import React, { useState } from 'react';

function Login({ handleLogin }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const submitHandler = (e) => {
    e.preventDefault();
    handleLogin(email, password);
    setEmail('');
    setPassword('');
  };

  return (
    <div className="flex h-screen w-screen items-center justify-center">
      <div className="border-2 border-blue-400 p-20 rounded-lg">
        <form onSubmit={submitHandler} className="flex flex-col items-center justify-center gap-4">
          <input
            required
            className="bg-transparent outline-none border-2 border-blue-400 py-3 px-5 text-xl rounded-full"
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            required
            className="bg-transparent outline-none border-2 border-blue-400 py-3 px-5 text-xl rounded-full"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            type="submit"
            className="mt-4 bg-blue-500 text-white border-none outline-none py-3 px-5 rounded-full text-xl hover:bg-blue-400"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
