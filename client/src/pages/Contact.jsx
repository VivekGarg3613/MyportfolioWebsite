import React from 'react'

function Contact() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center px-6 bg-gray-50">

      <h1 className="text-3xl md:text-4xl font-bold mb-6">
        Contact Me
      </h1>

      {/* Contact Info */}
      <div className="text-center text-gray-700 mb-8 space-y-2">
        <p><strong>Mobile:</strong> 7988834239</p>
        <p><strong>Email:</strong> vgarg3613@gmail.com</p>
        <p className="text-sm text-gray-500">
          Feel free to reach out for opportunities or collaboration.
        </p>
      </div>

      {/* Contact Form */}
      <form className="w-full max-w-md bg-white p-6 rounded shadow space-y-4">
        <input
          type="text"
          placeholder="Your Name"
          className="w-full border px-4 py-2 rounded focus:outline-none focus:ring"
        />

        <input
          type="email"
          placeholder="Your Email"
          className="w-full border px-4 py-2 rounded focus:outline-none focus:ring"
        />

        <textarea
          placeholder="Your Message"
          rows="4"
          className="w-full border px-4 py-2 rounded focus:outline-none focus:ring"
        />

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
        >
          Send Message
        </button>
      </form>

    </div>
  );
}

export default Contact;
