import { useContext } from "react";
import { FcGoogle } from "react-icons/fc";
import { Link, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../context/auth/AuthContext";
import Swal from "sweetalert2";
import useTitle from "../utils/useTitle";

export default function Login() {
  useTitle('Login')
  const { userLogin, googleLogin } = useContext(AuthContext);
  const {state} = useLocation();
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    userLogin(email, password)
      .then(() => {
        Swal.fire({
          icon: 'success',
          title: 'Login successful',
          timer: 1500
        })
        e.target.reset();
        navigate(state || '/');
      })
      .catch(error => {
        Swal.fire({
          icon: 'error',
          title: error.message,
          timer: 3000
        })
      })
  }

  const handleGoogleLogin = () => {
    googleLogin()
      .then(() => { 
        Swal.fire({
          icon: 'success',
          title: 'Login successful',
          timer: 1500
        })
        navigate(state || '/');
      })
      .catch(error => {
        Swal.fire({
          icon: 'error',
          title: error.message,
          timer: 3000
        })
      })
  }
  return (
    <>
      <section className="py-20 px-5">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-center text-4xl font-extrabold pb-5">Login</h2>
          <form
            onSubmit={handleLogin}
            className="max-w-xl mx-auto p-6 bg-gray-900 shadow-md rounded-lg space-y-4 text-white"
          >

            <div>
              <label className="block text-sm font-medium">Email</label>
              <input
                type="email"
                name="email"
                className="mt-1 block w-full text-xl px-3 py-2 rounded-md bg-gray-700 border border-gray-600 text-gray-300 "
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium">Password</label>
              <input
                type="password"
                name="password"
                className="mt-1 block w-full text-xl px-3 py-2 rounded-md bg-gray-700 border border-gray-600 text-gray-300 "
                required
              />
            </div>


            <button
              type="submit"
              className="cursor-pointer block w-full text-xl bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition"
            >
              Login
            </button>
            <button onClick={handleGoogleLogin} type="button" className="cursor-pointer flex justify-center items-center gap-2 rounded-md w-full text-xl py-2 bg-white text-black border-[#e5e5e5]">
              <FcGoogle></FcGoogle>
              Login with Google
            </button>
            <p>Don't have an account? <Link to="/register" className="font-semibold underline ml-1">Sign up here</Link></p>
          </form>
        </div>
      </section>
    </>
  )
}
