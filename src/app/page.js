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
      
      <header className="fixed left-0 top-0 w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30 items-center">
        <div className="flex flex-col items-center">
          <img src="/logo.png" alt="logo" className="h-12 w-auto mb-4" />
          <nav>
            <ul className="flex space-x-4">
              <li><a href="https://open.spotify.com/artist/3eqjTLE0HfPfh78zjh6TqT" target="_blank">Spotify</a></li>
              <li><a href="https://www.youtube.com/channel/UCcu7ANuD9J7hnTQCREqIc4Q" target="_blank">Youtube</a></li>
              <li><a href="https://www.facebook.com/brucespringsteen/" target="_blank">Facebook</a></li>
            </ul>
          </nav>
        </div>
      </header>
      
      <div className="tracks-container flex flex-row items-center justify-center mt-40">
          {tracks.map((track, index) => (
              <div key={index} style={{ marginBottom: '10px', marginRight: index !== tracks.length - 1 ? '10px' : '0px' }}>
                  <iframe style={{borderRadius: '12px'}} src={track} width="100%" height="152" allowFullScreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
              </div>
          ))}
      </div>

      <div className='gallery grid px-4 lg:px-8 pt-8'>
        {bandPhotos.map((photo, index) => (
          <div key={index} style={{width: '100%', height: '250px', background: 'black', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
            <img src={photo} alt={`Band Photo ${index + 1}`} style={{maxHeight: '100%', objectFit: 'contain'}}/>
          </div>
        ))}
      </div>

    </main>
  )
}