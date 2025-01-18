import { Link, useNavigate } from "react-router-dom"; // Import useNavigate for redirecting after login  
import axios from "axios";  // Import axios for making HTTP requests  
import Cookies from "js-cookie";
import { useState } from "react";

const UserLogin = () => {
  const [email, setEmail] = useState(""); // State for email  
  const [password, setPassword] = useState(""); // State for password  
  const [error, setError] = useState(""); // State for error handling  
  const navigate = useNavigate(); // Use navigate to programmatically redirect after login 


  const handleSubmit = async (e) => {  
    e.preventDefault(); // Prevent the default form submission  
    setError(""); // Reset error state  

    try {  
      // Make a POST request to the API endpoint  
      const response = await axios.post("http://localhost:8000/api/login", {  
        email,  
        password,  
      });  

      // Assuming your API returns the token in response.data.token  
      const token = response.data.token;  

      // Save the token in a cookie  
      Cookies.set("auth_token", token, { expires: 1 }); // Cookie expires in 1 day  

      // Redirect to the homepage or a user dashboard after successful login  
      navigate("/"); // Change the route based on your app's structure  
    } catch (err) {  
      // Handle any errors that occur during login  
      console.error(err);  
      setError("Invalid email or password."); // Show error message  
    }  
  };  

  return (
    <div className="bg-[#EFAE8D]">  
    <div className="login-container container mx-auto py-32">  
      <div className="flex justify-around">  
        <div className="form-container w-full">  
          <form  
            onSubmit={handleSubmit}  
            className="space-y-4 bg-white rounded-xl p-10 w-11/12"  
          >  
            <div className="login-title text-center mb-5">  
              <h1 className="text-4xl font-bold">Sign In</h1>  
              <p className="text-2xl py-2">  
                Hey, enter your details to login <br /> to your account  
              </p>  
            </div>  
            {/* Email input field  */}  
            <div className="py-2">  
              <input  
                type="email"  
                name="email"  
                id="email" // Changed from car_name to email for semantic clarity  
                className="mt-2 py-4 px-6 block w-full rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500 text-xl border-2"  
                placeholder="Enter Email Address"  
                value={email}  
                onChange={(e) => setEmail(e.target.value)}  
                required  
              />  
            </div>  
            {/* Password input field  */}  
            <div className="mb-5">  
              <input  
                type="password"  
                name="password"  
                id="password" // Changed from car_name to password for semantic clarity  
                className="mt-2 py-4 px-6 block w-full rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500 text-xl border-2"  
                placeholder="Enter Password"  
                value={password}  
                onChange={(e) => setPassword(e.target.value)}  
                required  
              />  
            </div>  

            {/* Error message display */}  
            {error && <p className="text-red-500 text-center">{error}</p>}  

            <div className="text-lg py-5 flex justify-between">  
              <div className="register">  
                <span className="">Don&apos;t have an account yet? </span>  
                <Link  
                  className="text-blue-600 font-bold"  
                  to="/personRegistration"  
                >  
                  Register Now!  
                </Link>  
              </div>  
              <div className="forget">  
                <p className="font-bold text-blue-600 cursor-pointer">Forgot password?</p>  
              </div>  
            </div>  

            <div className="submit-button mx-auto text-center">  
              <button className="btn btn-wide btn-btn-outline btn-primary text-2xl">  
                Login  
              </button>  
            </div>  
          </form>  
        </div>  

        <div className="image-container w-full justify-items-center">  
          <div className="w-11/12">  
            <img  
              src="/src/assets/undraw_electric-car_vlgq.svg"  
              alt="No image found"  
            />  
          </div>  
        </div>  
      </div>  
    </div>  
  </div>
  );
};

export default UserLogin;
