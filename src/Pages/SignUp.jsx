import { createUserWithEmailAndPassword, sendEmailVerification, updateProfile } from "firebase/auth";
import MyContainer from "../components/MyContainer";
import MyLink from "../components/MyLink";
// import { toast } from "react-toastify";
import { auth } from "../fairbase/fairbase.config";
import { useState } from "react";
import { FaEye } from "react-icons/fa";
import { IoEyeOff } from "react-icons/io5";

import {toast} from "react-toastify"
import { AuthContext } from "../context/AuthContext";

const SignUp = () => {
  

  const [show,setShow] = useState(false)

  const handleSignup = (e) => {
  e.preventDefault();

  const displayName = e.target.name.value;
  const photoURL = e.target.photo.value;
  const email = e.target.email.value; 
  const password = e.target.password.value;
  //6 tar kom password hole ai error ta dive 
  if(password.length<6){
    toast.error('Password should be at least 6 digit')
    return
  }
//password ar jorno ata 
  const regex = /^(?=.*[A-Za-z])(?=.*\d).{6,}$/;//ata akta object
//uporer condition ta fulfill na korle ai error ta dekabe 
if (!regex.test(password)) {
  toast.error("Password must be at least 8 characters and include uppercase, lowercase, number, and a special character.");
  return
}

  console.log("Sign Up Complete", { displayName,photoURL,email, password });

// if(password.includes("A") )

  //1st step: create user 

  createUserWithEmailAndPassword(auth, email, password)
    .then((res) => {

    //2nd step: Update profile
      updateProfile(res.user, {
    displayName,//key and value jodi sem hoy tahole amader key value dithe hobe na 
    photoURL,
})

.then(()=> {
  console.log (res)

  // 3rd step: Email Verification
sendEmailVerification(res.user)
  .then(()=> {
     console.log (res)
    toast.success('Signup successful, Cheek your email to validate you account')
  })
  .catch(e=> {
    toast.error(e.message)
  })

  //finished email verification work 
  console.log (res)
  toast.success("Sign up Successful")
})
.catch(e=>{
  toast.error(e.message)
})

      //finished Signup Profile Update work 
      console.log(res);
      toast.success('Signup successful');
    })

    // error message gola chargpt teke anchi
    .catch((error) => {
      console.log(error);

      // All errors handled with if/else
      if (error.code === "auth/popup-closed-by-user") {
        toast.error("Popup closed before sign in.");
      } 
      else if (error.code === "auth/popup-blocked") {
        toast.error("Popup blocked by browser.");
      } 
      else if (error.code === "auth/cancelled-popup-request") {
        toast.error("Another popup request canceled this one.");
      } 
      else if (error.code === "auth/network-request-failed") {
        toast.error("Network error! Check your internet.");
      } 
      else if (error.code === "auth/too-many-requests") {
        toast.error("Too many attempts! Try again later.");
      } 
      else if (error.code === "auth/user-disabled") {
        toast.error("This account has been disabled.");
      } 
      else if (error.code === "auth/account-exists-with-different-credential") {
        toast.error("Email already exists with another login method.");
      } 
      else {
        toast.error("Something went wrong. Try again.");
      }
    });

};


  return (
    <div className="min-h-[96vh] flex items-center justify-center bg-linear-to-br from-indigo-500 via-purple-600 to-pink-500 relative overflow-hidden">
      {/* Animated floating circles */}
      <div className="absolute inset-0">
        <div className="absolute w-72 h-72 bg-pink-400/30 rounded-full blur-2xl top-10 left-10 animate-pulse"></div>
        <div className="absolute w-72 h-72 bg-purple-400/30 rounded-full blur-2xl bottom-10 right-10 animate-pulse"></div>
      </div>

      {/* akane amader banano components ta use korsi and mx jorno  */}
      <MyContainer>
        <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-10 p-6 lg:p-10 text-white">
          <div className="max-w-lg text-center lg:text-left">
            <h1 className="text-5xl font-extrabold drop-shadow-lg">
              Create Your Account
            </h1>
            <p className="mt-4 text-lg text-white/80 leading-relaxed">
              Join our community and unlock exclusive features. Your journey
              begins here!
            </p>
          </div>

          <div className="w-full max-w-md backdrop-blur-lg bg-white/10 border border-white/20 shadow-2xl rounded-2xl p-8">
            <h2 className="text-2xl font-semibold mb-6 text-center text-white">
              Sign Up
            </h2>

            <form onSubmit={handleSignup}  className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1">Name</label>
                <input
                  type="text"
                  name="name"
                  placeholder="Dev.Sabbir"
                  className="input input-bordered w-full bg-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-pink-400 required"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Photo</label>
                <input
                  type="text"
                  name="photo"
                  placeholder="Your photo URL here"
                  className="input input-bordered w-full bg-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-pink-400 required"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Email</label>
                <input
                  type="email"
                  name="email"
                  placeholder="sabbirvai69k@gmail.com"
                  className="input input-bordered w-full bg-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-pink-400 required"
                />
              </div>

              <div className="relative">
                <label className="block text-sm font-medium mb-1">
                  Password
                </label>
                <input
                  // type="password"
                  name="password"
                  type={show? 'text': 'password'}
                  placeholder="••••••••"
                  className="input input-bordered w-full bg-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-pink-400"
                    // autoComplete="current-password"
                  />
                  <span onClick={()=>setShow(!show)} className="absolute right-2 top-9 z-50 cursor-pointer ">
                    {show ? <FaEye/>: <IoEyeOff/>}
                    </span>
              </div>

              {/* button */}

              <button type="submit" className="my-btn ">
                Sign Up
              </button>

              <div className="text-center mt-3">
                {/* <p className="text-sm text-white/80"> */}
                Already have an account?{" "}
                <MyLink
                  to="/signin"
                  className="text-pink-300 hover:text-white font-medium underline"
                >
                  Sign in
                </MyLink>
                {/* </p> */}
              </div>
            </form>
          </div>
        </div>
      </MyContainer>
    </div>
  );
};

export default SignUp;
