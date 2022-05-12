import { Outlet, Link } from 'react-router-dom'
import facebookLogo from '../../images/icon_facebook.svg'
import instagramLogo from '../../images/icon_instagram.svg'
import emailLogo from '../../images/icon_mail.svg'
import twitterLogo from '../../images/icon_twitter.svg'
import twitchLogo from '../../images/icon_twitch.svg'

function Layout() {
  return (
    <>
      <div className='flex flex-col bg-whitesmoke h-28 z-10 relative'>
        <nav className='flex flex-row justify-between items-center  h-full'>
          {/* <h1 className='text-3xl font-bold ml-5'>LOGO</h1> */}
          <Link to={'/'}>
            <li className='ml-5 flex justify-center rounded-lg h-12 w-28 items-center shadow-custom-shadow-1'><div className='font-helvetica font-bold'>Home</div></li>
          </Link>
          <ol className='flex flex-row gap-x-12 mr-5'>
            <Link to={'/services'}>
              <li className='flex justify-center rounded-lg h-12 w-32 items-center shadow-custom-shadow-1'><div className='font-helvetica font-bold'>Our Services</div></li>
            </Link>
            <Link to={'/profile'}>
              <li className='flex justify-center rounded-lg h-12 w-28 items-center shadow-custom-shadow-1'><div className='font-helvetica font-bold'>Profile</div></li>
            </Link>
            <Link to={'/login'}>
              <li className='flex justify-center rounded-lg h-12 w-28 items-center shadow-custom-shadow-1'><div className='font-helvetica font-bold'>Login</div></li>
            </Link>
            <Link to={'/register'}>
              <li className='flex justify-center bg-[#38d424] rounded-lg h-12 w-28 items-center shadow-custom-shadow-1'><div className='font-helvetica text-white font-bold'>Register</div></li>
            </Link>
          </ol>
        </nav>
      </div>
      <Outlet />
      <div className='jumbotron  w-full h-screen-60vh flex flex-col justify-center items-center '>
        <div className="wrapper-home-footer flex flex-row justify-around items-center mt-36  h-full w-full">
          <div className="font-normal font-helvetica rental-profil max-w-268px  h-1/2 flex flex-col gap-y-5">
            <p>Jalan Suroyo No. 161 Mayangan Kota Probolinggo 672000</p>
            <p>binarcarrental@gmail.com</p>
            <p>081-233-334-808</p>
          </div>
          <div className="font-semibold font-helvetica rental-services  h-1/2 flex flex-col gap-y-6">
            <p>Our services</p>
            <p>Why Us</p>
            <p>Testimonial</p>
            <p>FAQ</p>
          </div>
          <div className="rental-contact flex flex-row gap-x-6">
            <Link to={{ pathname: 'https://www.facebook.com/' }} target="_blank">
              <img className='w-10' src={facebookLogo} alt="" />
            </Link>
            <img className='w-10' src={instagramLogo} alt="" />
            <img className='w-10' src={twitterLogo} alt="" />
            <img className='w-10' src={emailLogo} alt="" />
            <img className='w-10' src={twitchLogo} alt="" />
          </div>
          <div className="font-helvetica rental-copyright flex flex-col gap-y-5">
            <p>Copyright Binar 2022</p>
            <p>BINARIAN</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Layout