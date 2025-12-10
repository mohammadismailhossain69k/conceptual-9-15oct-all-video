import React, { useContext } from "react";
import logo from "../assets/firebase-logo.png";
import { Link } from "react-router";
import MyContainer from "./MyContainer";
import MyLink from "./MyLink";
import { AuthContext } from "../context/AuthContext";
import { toast } from "react-toastify";
import { ClockLoader } from "react-spinners";
const Navbar = () => {
  //ata amader authProvider component teke asche

  const { user, signOutFunc, setUser, loading } = useContext(AuthContext);
  console.log(user);

  console.log(loading);

  //handleSignout
  const handleSignOUt = () => {
    signOutFunc()
      .then(() => {
        toast.success("Signout successful");
        setUser(null); //setUser o chole jabe
      })
      .catch((e) => {
        toast.error(e.message);
      });
  };

  return (
    // amra ata full kaj korsi MyLink Component
    <div className=" py-2 border-b border-b-slate-300 text-white bg-black px-15">
      <div className="flex items-center justify-between">
        <MyContainer className={"flex justify-between items-center"}>
          <figure>
            <img src={logo} className="w-[55px]" />
          </figure>
          <ul className="flex items-center gap-2">
            {/* is active akta react object ata react teke asche  */}
            <li className="flex gap-3">
              <MyLink to={"/"}>Home</MyLink>
              <MyLink to={"/about-us"}>About Us</MyLink>
              {/* user login kora takle just profile link ta dekabe private */}
              {user && <MyLink to={"/profile"}>Profile</MyLink>}
            </li>
          </ul>

          {/* //daisyUi dropdown */}
          {loading ? (
            <ClockLoader color="#e74c2c" />
          ) : user ? (
            <div>
              <div className="dropdown dropdown-end">
                <div tabIndex={0} role="button" className=" m-1">
                  <img
                    src={user?.photoURL || "https/no-image"}
                    className="w-10 h-10 rounded-full mx-auto"
                    alt=""
                  />
                </div>
                <div
                  tabIndex="-1"
                  className="dropdown-content menu bg-base-100 rounded-box  z-50   shadow-sm p-3"
                >
                  <h2 className="text-xl font-semibold text-center text-black mt-3">
                    {user?.displayName}
                  </h2>
                  <p className=" font-semibold my-3 text-center text-black">
                    {user?.email}
                  </p>
                  <button onClick={handleSignOUt} className="my-btn">
                    Sign Out
                  </button>
                </div>
              </div>
            </div>
          ) : (
            <button className="bg-purple-500 text-white px-4 py-2 rounded-md font-semibold ">
              <Link to={"/signin"}>Sign in</Link>
            </button>
          )}
        </MyContainer>
      </div>
    </div>
  );
};

export default Navbar;
