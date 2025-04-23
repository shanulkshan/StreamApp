import React from 'react';
import Logo from './assets/Daco_240.png';


const LiveStreamingPage = () => {
  return (
    <div className="bg-black text-white min-h-screen">
      {/* Header */}
      <header style={{ backgroundColor: '#272221', padding: '1rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <img src={Logo} alt="Logo" style={{ height: '3rem', width: '4rem' }} />
          <span style={{ fontSize: '2.25rem', fontWeight: 'bold', color: 'white' }}>STREAM</span>
        </div>
        <nav style={{ display: 'flex', gap: '2rem' }} className="nav-desktop">
          <a href="#" style={{ color: 'white', textDecoration: 'none', transition: 'text-decoration 0.3s' }} onMouseOver={e => e.target.style.textDecoration = 'underline'} onMouseOut={e => e.target.style.textDecoration = 'none'}>
            LIVE STREAMING
          </a>
          <a href="#" style={{ color: 'white', textDecoration: 'none', transition: 'text-decoration 0.3s' }} onMouseOver={e => e.target.style.textDecoration = 'underline'} onMouseOut={e => e.target.style.textDecoration = 'none'}>
            ON-DEMAND
          </a>
          <a href="#" style={{ color: 'white', textDecoration: 'none', transition: 'text-decoration 0.3s' }} onMouseOver={e => e.target.style.textDecoration = 'underline'} onMouseOut={e => e.target.style.textDecoration = 'none'}>
            DASHBOARD
          </a>
        </nav>
        <button
          style={{
            backgroundColor: 'red',
            color: 'white',
            padding: '0.5rem 1rem',
            borderRadius: '0.375rem',
            transition: 'background-color 0.3s',
            border: 'none',
            cursor: 'pointer'
          }}
          onMouseOver={e => e.target.style.backgroundColor = '#c2410c'}
          onMouseOut={e => e.target.style.backgroundColor = 'red'}
        >
          SUBSCRIBE
        </button>
      </header>


      {/* Main Content */}
      <main className="container mx-auto p-4 grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
        {/* Video Player */}
        <div className="col-span-2 bg-gray-800 rounded-lg overflow-hidden">
          <video
            controls
            className="w-[1100px] h-[550px] object-cover"
            poster="https://cdn.britannica.com/69/228369-050-0B18A1F6/Asian-Cup-Final-2019-Hasan-Al-Haydos-Qatar-Japan-Takumi-Minamino.jpg"
          >
            <source src="https://www.learningcontainer.com/wp-content/uploads/2020/05/sample-mp4-file.mp4" type="video/mp4" />
          </video>

        </div>

        {/* Chat Section */}
        <div className="chat-container">
          <h2 className="chat-title text-4xl">CHAT</h2>

          <div className="chat-messages">
            <div className="chat-message">Message 1</div>
            <div className="chat-message">Message 2</div>
            <div className="chat-message">Message 3</div>
            <div className="chat-message">Message 3</div>
          </div>

          <form className="chat-form">
            <input
              type="text"
              placeholder="Add a comment..."
              className="chat-input"
            />
          </form>

          <section className="chat-subscribe-section">
            <button className="chat-button">
              SUBSCRIBE
            </button>
          </section>

        </div>

        {/* Related Matches */}

        <div className="col-span-2">
          <h2 className="text-4xl font-bold mb-2 text-left">RELATED MATCHES</h2>
          <div className="bg-gray-800 rounded-lg p-4">
            <div className="grid grid-cols-2 gap-4">
              <img
                src="https://www.fcbarcelona.com/photo-resources/2025/04/02/08a3ee8d-3cfb-4e6f-8f9d-743254322665/web-COPA_REY-FINAL.jpg?width=640&height=400"
                alt="Match 1"
                className="rounded-lg object-cover w-full h-60"
              />
              <img
                src="https://cdn.mos.cms.futurecdn.net/U8deJYzeoPJkawwkVZiDpa-1200-80.jpg"
                alt="Match 2"
                className="rounded-lg object-cover w-full h-60"
              />
              <img
                src="https://m.media-amazon.com/images/S/pv-target-images/4c84461909038f4a278d606c89dfea17d0c2e76a5f2d0d5ebba65eaa6c0a0248.jpg"
                alt="Match 3"
                className="rounded-lg object-cover w-full h-60"
              />
              <img
                src="https://assets.khelnow.com/news/uploads/2024/04/Al-Hilal-vs-Al-Nassr-copy.jpg"
                alt="Match 4"
                className="rounded-lg object-cover w-full h-60"
              />
            </div>
          </div>
        </div>


      </main>
    </div>
  );
};

export default LiveStreamingPage;