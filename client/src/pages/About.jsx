import React from 'react'

function About() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center text-center px-6 bg-white">
      
      <h1 className="text-3xl md:text-4xl font-bold mb-4">
        About Me
      </h1>

      <p className="max-w-xl text-gray-600 leading-relaxed">
        I'm Kaushal Garg, a Computer Science student and aspiring frontend developer.
        I enjoy building responsive and user-friendly web applications using React and modern CSS.
        I’m passionate about learning new technologies and creating clean UI designs.
      </p>

    </div>
  );
}

export default About;