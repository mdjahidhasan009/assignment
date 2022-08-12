const Login = () => {

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="bg-white p-10 w-[55vw] h-[65vh] mt-4 rounded-lg">
        <h1 className="text-2xl text-center font-semibold">Sign In</h1>
        <p className="text-center pt-3 pb-10">Please sign in to continue</p>

        <div className="flex flex-col	justify-center items-center ">
          <input className="p-2 w-[90%] bg-[#F8F8F8]" type="email" placeholder="Email"/>
          <input className="mt-3 p-2 w-[90%] bg-[#F8F8F8]" type="password" placeholder="Password"/>
          <button className="mt-10 py-2 px-4 bg-[#47A7FF] block w-[199px]h-[48px] text-white rounded-lg"
          >
            Sign In
          </button>
        </div>
      </div>
    </div>

  )
}

export default Login;
