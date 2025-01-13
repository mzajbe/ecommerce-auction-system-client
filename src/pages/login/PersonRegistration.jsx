const PersonRegistration = () => {
  return (
    <div className="bg-[#EFAE8D]">
      <div className="container mx-auto py-20">
        <form onSubmit="" className="space-y-4 w-3/5 mx-auto bg-white rounded-xl p-10">
          <div className="form-container flex justify-between">

            <div className="left w-full">

            <label htmlFor="car_name" className="block text-2xl font-medium mb-4">Personal Details</label>

              {/* name inout field  */}
              <div className="w-5/6 mb-4">
                <input
                  type="text"
                  name="Pname"
                  id="car_name"
                  className="mt-2 py-4 px-6 block w-full rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500 text-xl border-2"
                  placeholder="Enter Full Name"
                  required
                />
              </div>
              {/* name inout field  */}

              {/* name inout field  */}
              <div className="w-5/6 mb-4">
                <input
                  type="text"
                  name="Pcity"
                  id="car_name"
                  className="mt-2 py-4 px-6 block w-full rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500 text-xl border-2"
                  placeholder="Enter City/Town"
                  required
                />
              </div>
              {/* name inout field  */}

              {/* name inout field  */}
              <div className="w-5/6 mb-4">
                <input
                  type="number"
                  name="Ppcode"
                  id="car_name"
                  className="mt-2 py-4 px-6 block w-full rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500 text-xl border-2"
                  placeholder="Enter Postal Code"
                  required
                />
              </div>
              {/* name inout field  */}

              {/* name inout field  */}
              <div className="w-5/6 mb-4">
                <input
                  type="password"
                  name="Ppassword"
                  id="car_name"
                  className="mt-2 py-4 px-6 block w-full rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500 text-xl border-2"
                  placeholder="Enter Password"
                  required
                />
              </div>
              {/* name inout field  */}

              {/* name inout field  */}
              <div className="w-5/6 mb-4">
                <input
                  type="password"
                  name="Ppassword"
                  id="car_name"
                  className="mt-2 py-4 px-6 block w-full rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500 text-xl border-2"
                  placeholder="Confirm Password"
                  required
                />
              </div>
              {/* name inout field  */}
            </div>


            <div className="right w-full">
              
            <label htmlFor="car_name" className="block text-2xl font-medium mb-4">Contact Person</label>

              {/* name inout field  */}
              <div className="w-5/6 mb-4">
                <input
                  type="email"
                  name="Pemail"
                  id="car_name"
                  className="mt-2 py-4 px-6 block w-full rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500 text-xl border-2"
                  placeholder="Enter Email Address"
                  required
                />
              </div>
              {/* name inout field  */}

              {/* name inout field  */}
              <div className="w-5/6 mb-4">
                <input
                  type="number"
                  name="car_name"
                  id="car_name"
                  className="mt-2 py-4 px-6 block w-full rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500 text-xl border-2"
                  placeholder="Enter Phone Number"
                  required
                />
              </div>
              {/* name inout field  */}

              {/* name inout field  */}
              <div className="w-5/6 mb-4">
                <input
                  type="file"
                  className="file-input file-input-bordered file-input-primary w-full max-w-xs"
                />
              </div>
              {/* name inout field  */}
            </div>
          </div>
          <div className="submit-button w-full mx-auto text-center">
              <button className="btn btn-wide btn-btn-outline btn-primary text-2xl">Register</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PersonRegistration;
