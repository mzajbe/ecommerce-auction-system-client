const ComRegistration = () => {
  return (
    <div className="bg-[#EFAE8D]">
      <div className="container mx-auto py-20">
        <form onSubmit="" className="space-y-4 w-3/5 mx-auto bg-white rounded-xl p-10">
          <div className="form-container flex justify-between">

            <div className="left w-full">

            <label htmlFor="car_name" className="block text-2xl font-medium mb-4">Company Details</label>

              {/* name inout field  */}
              <div className="w-5/6 mb-4">
                <input
                  type="text"
                  name="car_name"
                  id="car_name"
                  className="mt-2 py-4 px-6 block w-full rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500 text-xl border-2"
                  placeholder="Company Name"
                  required
                />
              </div>
              {/* name inout field  */}

              {/* name inout field  */}
              <div className="w-5/6 mb-4">
                <input
                  type="email"
                  name="car_name"
                  id="car_name"
                  className="mt-2 py-4 px-6 block w-full rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500 text-xl border-2"
                  placeholder="Company Email Address"
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
                  placeholder="Company Registration Number"
                  required
                />
              </div>
              {/* name inout field  */}

              {/* name inout field  */}
              <div className="w-5/6 mb-4">
                <input
                  type="text"
                  name="car_name"
                  id="car_name"
                  className="mt-2 py-4 px-6 block w-full rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500 text-xl border-2"
                  placeholder="Company City/Town"
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
                  placeholder="Company Postal Code"
                  required
                />
              </div>
              {/* name inout field  */}

              {/* name inout field  */}
              <div className="w-5/6 mb-4">
                <input
                  type="password"
                  name="car_name"
                  id="car_name"
                  className="mt-2 py-4 px-6 block w-full rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500 text-xl border-2"
                  placeholder="Company Password"
                  required
                />
              </div>
              {/* name inout field  */}

              {/* name inout field  */}
              <div className="w-5/6 mb-4">
                <input
                  type="password"
                  name="car_name"
                  id="car_name"
                  className="mt-2 py-4 px-6 block w-full rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500 text-xl border-2"
                  placeholder="Company Confirm Password"
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
                  type="text"
                  name="car_name"
                  id="car_name"
                  className="mt-2 py-4 px-6 block w-full rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500 text-xl border-2"
                  placeholder="Contact Person Name"
                  required
                />
              </div>
              {/* name inout field  */}

              {/* name inout field  */}
              <div className="w-5/6 mb-4">
                <input
                  type="email"
                  name="car_name"
                  id="car_name"
                  className="mt-2 py-4 px-6 block w-full rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500 text-xl border-2"
                  placeholder="Contact Person Email Address"
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
                  placeholder="Contact Person Phone Number"
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

export default ComRegistration;
