import React from 'react';

export default function Home(){
  //add track links here
  const tracks = [
    "https://open.spotify.com/embed/track/7FwBtcecmlpc1sLySPXeGE?utm_source=generator&theme=0",
    "https://open.spotify.com/embed/track/68uuz61IqrSJjO6ffO3yHc?utm_source=generator",
    "https://open.spotify.com/embed/track/6hTcuIQa0sxrrByu9wTD7s?utm_source=generator&theme=0",
  ];

  const bandPhotos = [
    "https://static.printler.com/cache/3/1/b/8/4/5/31b845beca4c198e4718cb0126138f2415c7c491.jpg",
    "https://i.ytimg.com/vi/eK_T2CpVJS0/maxresdefault.jpg",
    "https://d2cx26qpfwuhvu.cloudfront.net/millstad/wp-content/uploads/2023/10/30114553/BruceSpringsteen-cardiff-events-page-1170x660-1-737x416.jpg",
    "https://cdn-p.smehost.net/sites/e8622626f9584d40b1a8fce8dfa6f567/wp-content/uploads/2023/12/springsteen-bruce119.jpg",
    "https://i.ytimg.com/vi/eK_T2CpVJS0/maxresdefault.jpg",
    "https://d2cx26qpfwuhvu.cloudfront.net/millstad/wp-content/uploads/2023/10/30114553/BruceSpringsteen-cardiff-events-page-1170x660-1-737x416.jpg",
    "https://cdn-p.smehost.net/sites/e8622626f9584d40b1a8fce8dfa6f567/wp-content/uploads/2023/12/springsteen-bruce119.jpg",
    "https://i.ytimg.com/vi/eK_T2CpVJS0/maxresdefault.jpg",
  ];

  return(
    <main className="mypage">

      <header className="fixed left-0 top-0 w-full justify-center border bg-gray-200 p-4 dark:bg-zinc-800/30 items-center" style={{zIndex: 1}}>
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

      <video className="relative top-0 left-0 w-full object-cover" style={{ height: '100vh' }} autoPlay muted loop>
        <source src="/band_video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="tracks-container flex flex-row items-center justify-center mt-10">
          {tracks.map((track, index) => (
              <div key={index} style={{ marginBottom: '10px', marginRight: index !== tracks.length - 1 ? '10px' : '0px' }}>
                  <iframe style={{borderRadius: '12px'}} src={track} width="100%" height="352" allowFullScreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
              </div>
          ))}
      </div>

      <div className='gallery grid px-4 lg:px-8 pt-8 mb-20'>
  {bandPhotos.map((photo, index) => (
    <div key={index} style={{width: '100%', height: '250px', background: 'black', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
      <img className="zoom" src={photo} alt={`Band Photo ${index + 1}`} style={{maxHeight: '100%', objectFit: 'contain'}}/>
    </div>
  ))}
</div>
        
    </main>
  )
}