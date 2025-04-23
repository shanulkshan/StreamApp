import React from "react";
import SportsImg from "./assets/sports.png";
import Footer from "./component/footer";
import Navbar from "./component/Navbar";

const SportsPage = () => {
  const isLoggedIn = !!localStorage.getItem("token");

  const handleRedirect = (e) => {
    if (!isLoggedIn) {
      e.preventDefault();
      window.location.href = "/signin"; // redirect to signin
    }
  };

  return (
    <div className="bg-black text-white min-h-screen font-sans">
      <Navbar />

      {/* Header Illustration */}
      <div className="flex justify-center mb-6">
        <img
          src={SportsImg}
          alt="Sports Header"
          className="w-full max-w-3xl"
        />
      </div>

      {/* Title and Button */}
      <div className="text-center mb-10">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">
          STREAM YOUR FAVORITE SPORTS
        </h1>
        <button className="bg-orange-600 hover:bg-orange-700 text-white font-bold py-2 px-6 rounded">
          WATCH NOW
        </button>
      </div>

      {/* Matches Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 m-3 gap-3 text-center">
        {[
          {
            label: "TEAM A vs TEAM B",
            tag: "LIVE",
            img: "https://cdn.vox-cdn.com/thumbor/UO0YsSU-PBkCzylnFyn2sOj5OQg=/0x2:600x402/1200x800/filters:focal(0x2:600x402)/cdn.vox-cdn.com/photo_images/887194/GYI0060924123.jpg",
          },
          {
            label: "SPORTS CENTER",
            tag: null,
            img: "https://e3.365dm.com/21/05/1600x900/skynews-wayne-mardle-sky-sports_5398408.jpg?20210529042739",
          },
          {
            label: "LEAGUE MATCH",
            tag: null,
            img: "https://www.usatoday.com/gcdn/authoring/authoring-images/2024/03/12/USAT/72949104007-usatsi-22557870.jpg",
          },
        ].map((item, idx) => (
          <div key={idx}>
            <div className="relative w-[550px] h-[400px] bg-gray-800 rounded-lg overflow-hidden mx-auto transform transition-transform duration-300 hover:scale-105">
              <a
                href={isLoggedIn ? "/home" : "/signin"}
                onClick={handleRedirect}
              >
                <img
                  src={item.img}
                  alt={item.label}
                  className="w-full h-full object-cover"
                />
              </a>
              {item.tag && (
                <div className="absolute top-3 left-3 bg-red-600 text-white text-xs font-bold px-3 py-1 rounded">
                  {item.tag}
                </div>
              )}
            </div>
            <p className="text-white font-bold text-lg mt-3">{item.label}</p>
          </div>
        ))}
      </div>

      {/* About Section */}
      <div className="bg-black rounded-lg p-6 flex flex-col md:flex-row items-center justify-center gap-6">
        <div>
          <img
            src="https://img.freepik.com/premium-photo/soccer-player-mid-air-kicking-ball-black-background-ai-generated_868783-6591.jpg"
            alt="Soccer Player"
            className="h-[450px] w-auto"
          />
        </div>

        <div className="text-center md:text-left max-w-md">
          <h2 className="text-xl font-bold mb-2 text-white">ABOUT SPORTS TV</h2>
          <p className="text-gray-400 mb-4">
            Provides in-depth reporting and entertainment strategy. Lorem ipsum
            dolor sit amet, consectetur adipiscing elit. Sellentesque dolor.
          </p>

          <div className="flex justify-center md:justify-start gap-4">
            <img
              src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
              alt="App Store"
              className="w-32 h-auto"
            />
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
              alt="Google Play"
              className="w-32 h-auto"
            />
          </div>
        </div>
      </div>

      <div>
        <Footer />
      </div>
    </div>
  );
};

export default SportsPage;
