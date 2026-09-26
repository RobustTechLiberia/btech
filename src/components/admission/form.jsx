import React from "react";

class AdmissionForm extends React.Component {
  render() {
    return (
      <>
        <div className="bg-white flex flex-wrap md:justify-end md:items-end  md:h-auto justify-center items-center">
          <div className="md:w-lg md:mx-20 w-full bg-white md:h-auto h-auto md:my-2 border-none">
            <div className="flex flex-wrap justify-center items-center py-2 bg-white text-center text-[#253C6D] font-bold text-4xl capitalize">
              get admitted now
            </div>
            <div className="py-3 font-sans text-center text-gray-800 md:mx-10">
              20% discount on admission as a student of Bushrod College of
              Science &amp; Technology
            </div>
            {/* form */}
            <form action="#" post="" className="w-auto md:mx-auto mx-2">
              <div className="py-8 flex flex-wrap justify-evenly items-start gap-5 md:mx-2">
                <div className="w-auto">
                  <label
                    htmlFor="firstname"
                    className="capitalize text-gray-800"
                  >
                    first name <span className="text-red-600">*</span>
                    <br />
                    <input
                      type="text"
                      name="firstname"
                      id="firstname"
                      className="border border-gray-200 py-3 md:w-auto w-90"
                    />
                  </label>
                </div>
                {/* middlename */}
                <div className="w-auto">
                  <label
                    htmlFor="middlename"
                    className="capitalize text-gray-800"
                  >
                    middle name <span className="text-red-600">*</span>
                    <br />
                    <input
                      type="text"
                      name="middlename"
                      id="middlename"
                      className="border border-gray-200 py-3 md:w-auto w-90"
                    />
                  </label>
                </div>
                {/* last name */}
                <div className="flex flex-wrap justify-start items-start md:py-8 py-3">
                  <label
                    htmlFor="lastname"
                    className="capitalize text-gray-800"
                  >
                    last name <span className="text-red-600">*</span>
                    <br />
                    <input
                      type="text"
                      name="lastname"
                      id="last name"
                      className="border border-gray-200 py-3 md:w-md w-90"
                    />
                  </label>
                </div>
                {/* contact number */}
                <div className="flex flex-wrap justify-start items-start md:py-2 py-3">
                  <label htmlFor="contact" className="capitalize text-gray-800">
                    contact <span className="text-red-600">*</span>
                    <br />
                    <input
                      type="tel"
                      name="contact"
                      id="contact"
                      className="border border-gray-200 py-3 md:w-md w-90"
                    />
                  </label>
                </div>
                {/* address */}
                <div className="flex flex-wrap justify-start items-start md:py-8 py-3">
                  <label htmlFor="address" className="capitalize text-gray-800">
                    address <span className="text-red-600">*</span>
                    <br />
                    <input
                      type="text"
                      name="address"
                      id="address"
                      className="border border-gray-200 py-3 md:w-md w-90"
                    />
                  </label>
                </div>
                {/* college */}
                <div className="flex flex-wrap justify-start items-start md:py-2 py-3">
                  <label htmlFor="address" className="capitalize text-gray-800">
                    college <span className="text-red-600">*</span>
                    <br />
                    <select className="md:w-md w-90 border border-gray-200">
                      <option
                        value="college"
                        className="hover:bg-[#253C6D] hover:text-white"
                      >
                        select a college
                      </option>
                      <option
                        value="Nakita Forh College of Health Science"
                        className="hover:bg-[#253C6D]"
                      >
                        Nakita Forh of Health Science
                      </option>
                      <option
                        value="College of Science & Technology"
                        className="hover:bg-[#253C6D] hover:text-white"
                      >
                        College of Science & Technology
                      </option>
                    </select>
                  </label>
                </div>
                {/* submit */}
                <div className="md:py-8 py-3 bg-white">
                  <input
                    type="submit"
                    value="submit"
                    className="bg-[#253C6D] text-white font-sans uppercase py-4 rounded border-none md:w-md w-90 cursor-pointer"
                  />
                </div>
              </div>
            </form>
          </div>
        </div>
      </>
    );
  }
}

export default AdmissionForm;
