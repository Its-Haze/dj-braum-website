import React from 'react';

const About = () => {
  return (
    <section id="about" className="bg-gray-900 text-white p-8">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
        <div className="md:w-1/2 mb-8 md:mb-0">
          <h2 className="text-3xl font-bold mb-4">What is Dj Braum?</h2>
          <p className="text-lg mb-8">
            Dj Braum is a fully open-source Discord music bot inspired by a League of Legends champion. Completely free with no hidden features, it offers AI-driven music suggestions tailored to your vibe, interactive buttons for ease of use, and more.
          </p>
        </div>
        <div className="md:w-1/2 flex flex-col items-center space-y-4">
          <a
            href="https://discord.com/oauth2/authorize?client_id=939307188072116305&permissions=139589913664&integration_type=0&scope=bot" 
            target="_blank" rel="noopener noreferrer"
            className="bg-blue-500 text-white py-3 px-8 text-lg rounded-full text-center hover:transform hover:scale-110 transition duration-300"
          >
            Add Dj Braum
          </a>
          <a 
            href="https://discord.haze.sh"
            target="_blank" rel="noopener noreferrer"
            className="bg-transparent border-2 border-yellow-300 text-yellow-300 py-3 px-8 text-lg rounded-full hover:transform hover:scale-110 transition duration-300 text-center"
          >
            Support Server
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
