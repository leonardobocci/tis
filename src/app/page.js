import React from 'react';
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/next"

export default function Home(){

  const bandPhotos = [
    "band.jpeg",
    "https://i.ytimg.com/vi/eK_T2CpVJS0/maxresdefault.jpg",
    "https://d2cx26qpfwuhvu.cloudfront.net/millstad/wp-content/uploads/2023/10/30114553/BruceSpringsteen-cardiff-events-page-1170x660-1-737x416.jpg",
    "https://cdn-p.smehost.net/sites/e8622626f9584d40b1a8fce8dfa6f567/wp-content/uploads/2023/12/springsteen-bruce119.jpg",
    "https://i.ytimg.com/vi/eK_T2CpVJS0/maxresdefault.jpg",
    "https://d2cx26qpfwuhvu.cloudfront.net/millstad/wp-content/uploads/2023/10/30114553/BruceSpringsteen-cardiff-events-page-1170x660-1-737x416.jpg",
    "https://cdn-p.smehost.net/sites/e8622626f9584d40b1a8fce8dfa6f567/wp-content/uploads/2023/12/springsteen-bruce119.jpg",
    "https://i.ytimg.com/vi/eK_T2CpVJS0/maxresdefault.jpg",
  ];

  const soundcloudTracks = [
    "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1831487556&color=%23312727", //swiatlo
    "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1830548916&color=%23312727", //wiosna
    "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1831486869&color=%23312727", //kwiaty
    "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1830565767&color=%23312727", //zabierz
  ];

  return(

    <main className="mypage">
      <SpeedInsights/>
      <Analytics/>


      <header className="fixed left-0 top-0 w-full justify-center border bg-gray-200 p-4 items-center text-black" style={{zIndex: 1}}>
        <div className="flex flex-col items-center">
        <a href="#">
            <img src="/logo.png" alt="logo" className="h-12 w-auto mb-4" />
        </a>
          <nav>
            <ul className="flex space-x-4">
              <li><a href="https://open.spotify.com/artist/3eqjTLE0HfPfh78zjh6TqT" target="_blank">Spotify</a></li>
              <li><a href="https://www.youtube.com/channel/UCcu7ANuD9J7hnTQCREqIc4Q" target="_blank">Youtube</a></li>
              <li><a href="https://www.facebook.com/brucespringsteen/" target="_blank">Facebook</a></li>
            </ul>
          </nav>
        </div>
      </header>

      <video className="relative top-0 left-0 w-full object-cover" style={{ height: '100vh' }} autoPlay muted loop playsInline>
        <source src="/band_video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="soundcloud-container flex flex-row items-center justify-center mt-10 mb-10">
        {soundcloudTracks.map((track, index) => (
          <iframe 
          key={index}
          src={`${track}&auto_play=false&hide_related=false&show_comments=false&show_user=false&show_reposts=false&show_teaser=false&visual=true`}
          style={{borderRadius: '12px'}}
          loading="lazy"
        ></iframe>
        ))}
      </div>

      <div className='gallery grid px-4 lg:px-8 pt-8 mb-20'>
        {bandPhotos.map((photo, index) => (
          <div key={index} style={{width: '100%', height: '250px', background: 'black', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
            <img className="zoom" src={photo} alt={`Band Photo ${index + 1}`} style={{maxHeight: '100%', objectFit: 'contain'}}/>
          </div>
        ))}
      </div>

      <footer className="text-center p-4 bg-gray-200 text-black">
        <p>Page built by Leo Bocci. Visit Leo&apos;s other projects at:  
        <a href=" https://leobocci.pages.dev/" target="_blank" rel="noopener noreferrer" style={{color: 'blue'}}>https://leobocci.pages.dev/</a>
        </p>
      </footer>
        
    </main>
  )
}