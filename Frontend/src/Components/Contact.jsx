import React from 'react'

function Contact() {
  return (
    <>
      <form className="contact  shadow-md mx-auto max-w-xl p-8 rounded">

        <h1 className="text-xl font-bold mb-4  pt-10" >
          Contact <span className="text-[#5e0ce4]">Here</span>
        </h1>
        <input
          type="text"
          name="name"
          placeholder="Your name"
          className="w-full p-2 mb-4 border border-gray-300 rounded required:true text-white"
        />
        <input
          type="text"
          name="email"
          placeholder="Enter Email"
          className="w-full p-2 mb-4 border border-gray-300 rounded text-white required:true"
        />
        <input
          type="text"
          name="phone"
          placeholder="Enter Phone"
          className="w-full p-2 mb-4 border border-gray-300 rounded text-white required:true"
        />
        <textarea
          name="message"
          cols="30"
          rows="10"
          placeholder="Type here..."
          className="w-full p-2 mb-4 border border-gray-300 rounded text-white required:true"
        ></textarea>
        <button
          type="submit"
          className="px-4 py-2 w-24 bg-[#007bff] text-white rounded hover:bg-[#0056b3]"
        >
          Send
        </button>
      </form>
    </>

  )
}

export default Contact