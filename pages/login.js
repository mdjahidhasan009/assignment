const Login = () => {
  return (
    <div className="bg-white">
      <h1>Login</h1>
      <p>Please sign in to continue</p>

      <div className="">
        <input className="p-2" type="email" placeholder="Email"/>
        <input className="p-2" type="password" placeholder="Password"/>
        <button className="py-2 px-4 bg-[#47A7FF]">Sign In</button>
      </div>
    </div>
  )
}

export default Login;
