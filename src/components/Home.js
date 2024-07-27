import React from 'react';

const Home = () => {
  return (
    <section id="home" className="bg-gray-900 text-white p-8">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-4">Welcome to Dj Braum 🎵</h2>
        <p className="text-lg mb-8">
          The ultimate Discord music bot inspired by Braum from League of Legends.
        </p>
        <img src="/images/braum-welcome.png" alt="Braum as DJ" className="mx-auto rounded-lg shadow-lg"/>
      </div>
    </section>
  );
};

export default Home;
