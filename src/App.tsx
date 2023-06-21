import './App.css'

function App() {

  return (
    <>
      <header className='container'>
        <div className="logo">
          <img src="/assets/rfrsh_logo_white.png" alt="" />
        </div>
        <div className="box-1"></div>
      </header>
      <div className="hero-section container">
        <div className="hero-section-content">
          <div className="text">
            <h1 id='title'>Burn and claim your next digital assets with BrighSwitch</h1>
            <p>Create custom landing pages with Omega that convert more visitors than any website. With lots of unique blocks, you can easily build a page without coding.</p>
            <a  id='burn-btn' href="#">LET IT BURN!</a>
          </div>
          <div className="hero">
            <img src="/assets/Brightswitch_Logo_gradient.png" alt="logo-gradient" />
          </div>
        </div>
        <div className="botton-bg">
          <div className="flame"></div>
          <div className="hero-box"></div>
        </div>
      </div>
      <div className="poster-section">
        <div className="poster-cards">
          <div className="poster-card">
            <div className="poster-img">
              <video autoPlay muted loop playsInline>
                <source src="/assets/GoldenTicket_Animation.mp4" type="video/mp4" />{/*Safari / iOS video*/}
	              <source src="/assets/GoldenTicket_Animation.mp4" type="video/ogg" />{/* Firefox / Opera / Chrome10 */}
              </video>
              {/* <img src="/assets/GoldenTicket_Animation_PosterImage.png" alt="poster" /> */}
              <h2>Golden Ticket</h2>
            </div>
            <div className='poster-content'>
              <div>
                <img src="/assets/3702398_box_gift_present_surprise_icon.svg" alt="" />
                <p>Any three GENEFTEE Editions</p>
              </div>
              <div>
                <img src="/assets/8725868_fire_icon.svg" alt="" />
                <p>Raffle ticket for ongoing editions, giveaways, and more</p>
              </div>
            </div>
            <div className="btn">
              <a id='burn-btn' href="#">LET IT BURN!</a>
            </div>
          </div>
          <div className="poster-card">
            <div className="poster-img">
              {/* <img src="/assets/Og_Coin_Animation_PosterImage.png" alt="poster" /> */}
              <video autoPlay muted loop playsInline>
                <source src="/assets/Og_Coin_Animation.mp4" type="video/mp4" />{/*Safari / iOS video*/}
	              <source src="/assets/Og_Coin_Animation.mp4" type="video/ogg" />{/* Firefox / Opera / Chrome10 */}
              </video>
              <h2>OG Status</h2>
            </div>
            <div className='poster-content'>
              <div>
                <img src="/assets/3702398_box_gift_present_surprise_icon.svg" alt="" />
                <p>Any three GENEFTEE Editions</p>
              </div>
              <div>
                <img src="/assets/8725868_fire_icon.svg" alt="" />
                <p>OG status in the Discord</p>
              </div>
            </div>
            <div className="btn">
              <a id='burn-btn' href="#">LET IT BURN!</a>
            </div>
          </div>
          <div className="poster-card">
            <div className="poster-img">
            {/* <img src="/assets/Wl_Coin_Animation_PosterImage.png" alt="poster" /> */}
            <video autoPlay muted loop playsInline>
              <source src="/assets/Wl_Coin_Animation.mp4" type="video/mp4" />{/*Safari / iOS video*/}
              <source src="/assets/Wl_Coin_Animation.mp4" type="video/ogg" />{/* Firefox / Opera / Chrome10 */}
            </video>
              <h2>OG Status </h2>
            </div>
            <div className='poster-content'>
              <div>
                <img src="/assets/3702398_box_gift_present_surprise_icon.svg" alt="" />
                <p>One of each GENEFTEE Editions (8 total)</p>
              </div>
              <div>
                <img src="/assets/8725868_fire_icon.svg" alt="" />
                <p>One Edition from a big artist in the space</p>
              </div>
            </div>
            <div className="btn">
              <a id='burn-btn' href="#">LET IT BURN!</a>
            </div>
          </div>
        </div>
        <div className="croped-image-left">
          <img src="/assets/Brightswitch_Logo_gradient.png" alt="" />
        </div>
      </div>
      <div className="real-time-section">
        <h1 id='title'>Real-time Activity</h1>
        <div className='activity-cards'>
          <div className="activity-card">
            <h2>Wallet Address</h2>
            <div className="activity-data">
              <span>Q-09jfpoa8wpqr pwu - apsoidufj pasf]</span>
              <span>Q-09jfpoa8wpqr pwu - apsoidufj pasf]</span>
              <span>Q-09jfpoa8wpqr pwu - apsoidufj pasf]</span>
              <span>Q-09jfpoa8wpqr pwu - apsoidufj pasf]</span>
              <span>Q-09jfpoa8wpqr pwu - apsoidufj pasf]</span>
              <span>Q-09jfpoa8wpqr pwu - apsoidufj pasf]</span>
              <span>Q-09jfpoa8wpqr pwu - apsoidufj pasf]</span>
              <span>Q-09jfpoa8wpqr pwu - apsoidufj pasf]</span>
              <span>Q-09jfpoa8wpqr pwu - apsoidufj pasf]</span>
            </div>
          </div>
          <div className="activity-card">
            <h2>Edition Claimed</h2>
            <div className="activity-data">
              <span>Q-09jfpoa8wpqr pwu - apsoidufj pasf]</span>
              <span>Q-09jfpoa8wpqr pwu - apsoidufj pasf]</span>
              <span>Q-09jfpoa8wpqr pwu - apsoidufj pasf]</span>
              <span>Q-09jfpoa8wpqr pwu - apsoidufj pasf]</span>
              <span>Q-09jfpoa8wpqr pwu - apsoidufj pasf]</span>
              <span>Q-09jfpoa8wpqr pwu - apsoidufj pasf]</span>
              <span>Q-09jfpoa8wpqr pwu - apsoidufj pasf]</span>
              <span>Q-09jfpoa8wpqr pwu - apsoidufj pasf]</span>
              <span>Q-09jfpoa8wpqr pwu - apsoidufj pasf]</span>
            </div>
          </div>
          <div className="activity-card">
            <h2>Transaction Signature </h2>
            <div className="activity-data">
              <span>Q-09jfpoa8wpqr pwu - apsoidufj pasf]</span>
              <span>Q-09jfpoa8wpqr pwu - apsoidufj pasf]</span>
              <span>Q-09jfpoa8wpqr pwu - apsoidufj pasf]</span>
              <span>Q-09jfpoa8wpqr pwu - apsoidufj pasf]</span>
              <span>Q-09jfpoa8wpqr pwu - apsoidufj pasf]</span>
              <span>Q-09jfpoa8wpqr pwu - apsoidufj pasf]</span>
              <span>Q-09jfpoa8wpqr pwu - apsoidufj pasf]</span>
              <span>Q-09jfpoa8wpqr pwu - apsoidufj pasf]</span>
              <span>Q-09jfpoa8wpqr pwu - apsoidufj pasf]</span>
            </div>
          </div>
          <div className="activity-card">
            <h2>Time</h2>
            <div className="activity-data">
              <span>Q-09jfpoa8wpqr pwu - apsoidufj pasf]</span>
              <span>Q-09jfpoa8wpqr pwu - apsoidufj pasf]</span>
              <span>Q-09jfpoa8wpqr pwu - apsoidufj pasf]</span>
              <span>Q-09jfpoa8wpqr pwu - apsoidufj pasf]</span>
              <span>Q-09jfpoa8wpqr pwu - apsoidufj pasf]</span>
              <span>Q-09jfpoa8wpqr pwu - apsoidufj pasf]</span>
              <span>Q-09jfpoa8wpqr pwu - apsoidufj pasf]</span>
              <span>Q-09jfpoa8wpqr pwu - apsoidufj pasf]</span>
              <span>Q-09jfpoa8wpqr pwu - apsoidufj pasf]</span>
            </div>
          </div>
        </div>
      </div>
      <div className="stat-section">
        <div className="stat-section-container">
          <h1 id='title'>Stats</h1>
          <div className="stat-cards">
            <div className="stat-card">
              {/* <img src="/assets/Mask Group 9.png" alt="" /> */}
              <video autoPlay muted loop playsInline>
                <source src="/assets/80sblockSlide1_3.mp4" type="video/mp4" />{/*Safari / iOS video*/}
	              <source src="/assets/80sblockSlide1_3.mp4" type="video/ogg" />{/* Firefox / Opera / Chrome10 */}
              </video>
              <h3>8-Block</h3>
              <div className="total">
                <span>Total: 420</span>
                <span>Circulating Supply: 19</span>
              </div>
            </div>
            <div className="stat-card">
              {/* <img src="/assets/Mask Group 10.png" alt="" /> */}
              <video autoPlay muted loop playsInline>
                <source src="/assets/90sblockSlide2_2.mp4" type="video/mp4" />{/*Safari / iOS video*/}
	              <source src="/assets/90sblockSlide2_2.mp4" type="video/ogg" />{/* Firefox / Opera / Chrome10 */}
              </video>
              <h3>9-Block</h3>
              <div className="total">
                <span>Total: 420</span>
                <span>Circulating Supply: 19</span>
              </div>
            </div>
            <div className="stat-card">
              <video autoPlay muted loop playsInline>
                <source src="/assets/00sblockslide3_3.mp4" type="video/mp4" />{/*Safari / iOS video*/}
	              <source src="/assets/00sblockslide3_3.mp4" type="video/ogg" />{/* Firefox / Opera / Chrome10 */}
              </video>
              {/* <img src="/assets/Mask Group 9.png" alt="" /> */}
              <h3>0-Block</h3>
              <div className="total">
                <span>Total: 420</span>
                <span>Circulating Supply: 19</span>
              </div>
            </div>
            <div className="stat-card">
              <img src="/assets/Simpsons copy 3.jpg" alt="" />
              <h3>The Couch</h3>
              <div className="total">
                <span>Total: 420</span>
                <span>Circulating Supply: 19</span>
              </div>
            </div>
            <div className="stat-card">
              <img src="/assets/WaynesWorld copy 2.jpg" alt="" />
              <h3>GENEFTEE’s World</h3>
              <div className="total">
                <span>Total: 420</span>
                <span>Circulating Supply: 19</span>
              </div>
            </div>
            <div className="stat-card">
              <img src="/assets/Speed Post copy.JPG" alt="" />
              <h3>Keep it over 50</h3>
              <div className="total">
                <span>Total: 420</span>
                <span>Circulating Supply: 19</span>
              </div>
            </div>
            <div className="stat-card">
              <img src="/assets/33300d0a-b044-459c-8604-0a08c28ddd1a.JPG" alt="" />
              <h3>Keep it over 50</h3>
              <div className="total">
                <span>Total: 420</span>
                <span>Circulating Supply: 19</span>
              </div>
            </div>
            <div className="stat-card">
              <img src="/assets/8820871d-e950-494d-ab8f-33175ee233cd.JPG" alt="" />
              <h3>The Next Generation</h3>
              <div className="total">
                <span>Total: 420</span>
                <span>Circulating Supply: 19</span>
              </div>
            </div>
          </div>
        </div>
        <div className="croped-image-left left-bottom">
          <img src="/assets/Brightswitch_Logo_gradient.png" alt="" />
        </div>
        <div className="croped-image-right">
          <img src="/assets/Brightswitch_Logo_gradient.png" alt="" />
        </div>
      </div>
      <footer></footer>
    </>
  )
}

export default App
