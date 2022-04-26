import SearchCars from './components/SearchCars';
import ResultSearchCars from './components/ResultSearchCars';
import DetailCars from './components/DetailCars';
import { Routes, Route, Link } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<SearchCars />}>
          <Route index element={<ResultSearchCars />}/>
          <Route path='detail/:id' element={<DetailCars />}/>
          <Route path='*' element={<div>page tidak ada</div>}/>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
