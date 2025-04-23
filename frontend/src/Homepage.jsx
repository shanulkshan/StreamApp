import React from 'react';
import Navbar from './component/Navbar';
import rugbyImg from './assets/rugby.jpeg';
import footballImg from './assets/football.png';
import soccerImg from './assets/soccer.jpg';
import SportCard from './component/SportCard';
import Footer from './component/footer';

const sports = [
  { name: 'Rugby', image: 'https://img.icons8.com/ios/50/rugby--v1.png' },
  { name: 'Football', image: 'https://img.icons8.com/ios/50/football2.png' },
  { name: 'Cricket', image: 'https://img.icons8.com/ios/50/cricket.png' },
  { name: 'Basketball', image: 'https://img.icons8.com/ios/50/basketball--v1.png' },
  { name: 'Other Sports', image: 'https://img.icons8.com/ios/50/basketball--v1.png' },
  { name: 'Other Sports', image: 'https://img.icons8.com/ios/50/connection-status-off.png' },
];

const Homepage = () => {
  return (
    <div className="bg-black text-white min-h-screen w-full">
      <Navbar />

      {/* Featured Live Events */}
      <section className="p-6">
        <div className="text-left">
          <h2 className="text-4xl font-bold mb-4">FEATURED LIVE EVENTS</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          <a href='/Stream'><img src={rugbyImg} alt="Rugby" className="rounded-md w-full h-96 object-cover transform transition-transform duration-300 hover:scale-105" /></a>
          <a href='/Stream'><img src={footballImg} alt="Football" className="rounded-md w-full h-96 object-cover transform transition-transform duration-300 hover:scale-105" /></a>
          <a href='/Stream'><img src={soccerImg} alt="Soccer" className="rounded-md w-full h-96 object-cover transform transition-transform duration-300 hover:scale-105" /></a>
          
        </div>
      </section>

      {/* Upcoming Matches & Categories */}
      <section className="p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Upcoming Matches */}
        <div>
        <div className="text-left">
          <h2 className="text-4xl font-bold mb-4">UPCOMING MATCHES</h2>
        </div>
          <div className="bg-gray-800 rounded p-4">
            {[1, 2, 3, 4].map((match, index) => (
              <div key={index} className="flex justify-between border-b border-gray-700 py-2">
                <span>0{match} Team A vs Team B</span>
                <span>{match <= 2 ? '11:00 AM' : '4:00 PM'}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Categories */}
        <div>
        <div className="text-left">
          <h2 className="text-4xl font-bold mb-4">CATEGORIES</h2>
        </div>
          <div className="grid grid-cols-3 gap-3 bg-gray-800 p-4 rounded">
            {sports.map((sport, i) => (
              <SportCard key={i} name={sport.name} image={sport.image} />
            ))}
          </div>
        </div>
      </section>

      {/* Trending Events */}
      <section className="p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
        <div className="text-left">
          <h2 className="text-4xl font-bold mb-4 ">TRENDING EVENTS</h2>
        </div>
          <div className="bg-gray-800 p-4 rounded">
            <div className="border-b border-gray-700 py-2">Most Viewed</div>
            <div className="py-2">Event Name</div>
          </div>
        </div>
        <div className='mt-3'>
          <h2 className="text-xl font-bold mb-4 invisible md:visible">&nbsp;</h2>
          <div className="bg-gray-800 p-4 rounded">
            <div className="border-b border-gray-700 py-2">Most Subscribed</div>
            <div className="py-2">Event Name</div>
          </div>
        </div>
      </section>

      
    <div className="flex flex-col md:flex-row gap-6 justify-center items-center bg-black p-8">
  <button className='bg-[#d95c2d] hover:bg-orange-600 text-white font-bold uppercase px-12 py-6 rounded text-4xl w-full md:w-auto transition duration-300'>
    Start <br></br> Watching Now
  </button>
  <button className="bg-[#d95c2d] hover:bg-orange-600 text-white font-bold uppercase px-12 py-6 rounded text-4xl w-full md:w-auto transition duration-300">
    Become a <br></br> Content Provider
  </button>
   </div>
   <div>
    <Footer/>
   </div>


    </div>
  );
};

export default Homepage;