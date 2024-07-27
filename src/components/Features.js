import React from 'react';
import featuresData from '../featuresData';

const Features = () => {
  return (
    <section id="features" className="bg-gray-900 text-white p-8">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-4">Main Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuresData.map((feature, index) => (
            <div key={index} className="bg-gray-800 p-6 rounded-lg shadow-md flex items-center">
              <img src={feature.image} alt={feature.name} className="w-10 h-10 mr-4"/>
              <div>
                <h3 className="text-xl font-semibold mb-2 flex items-center">
                  {feature.name}
                </h3>
                <p>{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
