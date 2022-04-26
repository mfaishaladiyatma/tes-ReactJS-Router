import { Outlet } from 'react-router-dom'

function SearchCars() {
  return (
    <div>
        <nav>
            Navigation
            <ol>
                <li>Home</li>
            </ol>
        </nav>
        <Outlet />
    </div>
  )
}

export default SearchCars