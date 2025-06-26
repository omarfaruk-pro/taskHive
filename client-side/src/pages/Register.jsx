import { useContext, useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router";
import { AuthContext } from "../context/auth/AuthContext";
import { updateProfile } from "firebase/auth";
import { auth } from "../firebase/firebase.init";
import Swal from "sweetalert2";
import useTitle from "../utils/useTitle";


export default function Register() {
  useTitle('Register')
  const {userRegister, googleLogin} = useContext(AuthContext);
  const [passError, setPassError] = useState('');

  const handleRegister = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const photo = e.target.photo.value;

    const regex = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;

    if (!regex.test(password)) {
      setPassError('Password must be at least 6 characters long and contain at least one uppercase letter and one lowercase letter');
      return;
    }

    userRegister(email, password)
    .then(() =>{
      Swal.fire({
        icon: 'success',
        title: `${name} has been registered successfully`,
        timer: 3000
      })
      const displayName = name;
      const photoURL = photo;
      return updateProfile(auth.currentUser, {
        displayName: displayName,
        photoURL: photoURL
      });
    })
    .catch(error => {
      Swal.fire({
        icon: 'error',
        title: error.message,
        timer: 3000
      })
    })
    e.target.reset();
  }


  const handleGoogleLogin=()=>{
    googleLogin()
    .then(() =>{
      Swal.fire({
        icon: 'success',
        title: 'Login successful',
        timer: 3000
      })
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
          <h2 className="text-center text-4xl font-extrabold pb-5">Register</h2>
          <form
            onSubmit={handleRegister}
            className="max-w-xl mx-auto p-6 bg-gray-900 shadow-md rounded-lg space-y-4 text-white"
          >

            <div>
              <label className="block text-sm font-medium">Name</label>
              <input
                type="text"
                name="name"
                className="mt-1 block w-full text-xl px-3 py-2 rounded-md bg-gray-700 border border-gray-600 text-gray-300 "
                required
              />
            </div>
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
              {
                passError && <p className="text-red-400">{passError}</p>
              }
            </div>

            <div>
              <label className="block text-sm font-medium">Photo URL</label>
              <input
                type="url"
                name="photo"
                className="mt-1 block w-full text-xl px-3 py-2 rounded-md bg-gray-700 border border-gray-600 text-gray-300 "
              />
            </div>


            <button
              type="submit"
              className="cursor-pointer block w-full text-xl bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition"
            >
              Register
            </button>
            <button onClick={handleGoogleLogin} type="button" className="cursor-pointer flex justify-center items-center gap-2 rounded-md w-full text-xl py-2 bg-white text-black border-[#e5e5e5]">
              <FcGoogle></FcGoogle>
              Login with Google
            </button>
            <p>Already have an account? <Link to="/login" className="font-semibold underline ml-1">Login here</Link></p>
           
          </form>
        </div>
      </section>
    </>
  )
}
