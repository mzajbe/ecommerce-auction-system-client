import {Link} from "react-router";

const UserLogin = () => {
  return (
    <div className="bg-[#EFAE8D]">
      <div className="login-container container mx-auto py-32">
        <div className="flex justify-around">
          <div className="form-container w-full">
            <form
              onSubmit=""
              className="space-y-4 bg-white rounded-xl p-10 w-11/12"
            >
              <div className="login-title text-center">
                <h1 className="text-4xl font-bold">Sign In</h1>
                <p className="text-2xl py-5">Hey, enter your details to login <br /> to your account</p>
              </div>
              {/* name inout field  */}
              <div className="py-2">
                <input
                  type="email"
                  name="car_name"
                  id="car_name"
                  className="mt-2 py-4 px-6 block w-full rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500 text-xl border-2"
                  placeholder="Enter Enail Address"
                  required
                />
              </div>
              {/* name inout field  */}

              {/* name inout field  */}
              <div className="mb-5">
                <input
                  type="password"
                  name="car_name"
                  id="car_name"
                  className="mt-2 py-4 px-6 block w-full rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500 text-xl border-2"
                  placeholder="Enter Password"
                  required
                />
              </div>
              {/* name inout field  */}

              <div className="regAndforget text-lg py-5 flex justify-between">
                <div className="register">
                <span className="">Don&apos;t have an account yet? </span><Link className="text-blue-600 font-bold" to="/personRegistration">Register Now!</Link>
                </div>
                <div className="forget"><p className="font-bold text-blue-600">forget password?</p></div>
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
                src="/src/assets/loginLogo/image.png"
                alt="NO Image Found..."
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserLogin;
