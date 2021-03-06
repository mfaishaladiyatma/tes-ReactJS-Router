import Layout from './components/common/Layout';
import ResultSearchCars from './components/ResultSearchCars';
import DetailCars from './components/DetailCars';
import { Routes, Route, Link } from 'react-router-dom';
import './App.css';
import RegisterPage from './components/RegisterPage';
import LoginPage from './components/LoginPage';
import ProtectedRoute from './components/common/ProtectedRoute';
import Profile from './components/Profile';
import SearchHomePage from './components/SearchHomePage';


function App() {
  return (
    <>
    <div>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<SearchHomePage />}/>
          <Route path='result'>
            <Route index element={<ResultSearchCars />}/>
            <Route path='detail/:id' element={<DetailCars />}/>
          </Route>
          <Route path='login' element={<LoginPage />}/>
          <Route path='register' element={<RegisterPage />}/>
          <Route element={<ProtectedRoute />}>
            <Route path='profile' element={<Profile />} />
          </Route>
          <Route path='*' element={<div>page tidak ada</div>}/>
        </Route>
      </Routes>
    </div>
    {/* <div className="container mx-auto bg-gray-200 rounded-xl shadow border p-8 m-10">
      <p className="text-3xl text-gray-700 font-bold mb-5">
        Welcome!
      </p>
      <p className="text-gray-500 text-lg">
        React and Tailwind CSS in action
      </p>
    </div> */}
    </>
  );
}

export default App;
