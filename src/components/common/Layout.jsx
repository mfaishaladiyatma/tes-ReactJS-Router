import { Outlet, Link } from 'react-router-dom'

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
    </>
  )
}

export default Layout