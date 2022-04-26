import SearchCars from './components/SearchCars';
import ResultSearchCars from './components/ResultSearchCars';
import DetailCars from './components/DetailCars';
import { Routes, Route, Link } from 'react-router-dom';
import './App.css';
import RegisterPage from './components/RegisterPage';
import LoginPage from './components/LoginPage';

function App() {
  return (
    <>
    <div>
      <Routes>
        <Route path='/' element={<SearchCars />}>
          <Route index element={<ResultSearchCars />}/>
          <Route path='login' element={<LoginPage />}/>
          <Route path='register' element={<RegisterPage />}/>
          <Route path='detail/:id' element={<DetailCars />}/>
          <Route path='*' element={<div>page tidak ada</div>}/>
        </Route>
      </Routes>
    </div>
    <div className="container mx-auto bg-gray-200 rounded-xl shadow border p-8 m-10">
      <p className="text-3xl text-gray-700 font-bold mb-5">
        Welcome!
      </p>
      <p className="text-gray-500 text-lg">
        React and Tailwind CSS in action
      </p>
    </div>
    </>
  );
}

export default App;
