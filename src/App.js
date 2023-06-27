import './App.css';
import CreateResident from './Components/CreateResidents';
import LoginResident from './Components/login';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
      <Route path='/' element={<LoginResident/>}/>
        <Route path='/create' element={<CreateResident/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
