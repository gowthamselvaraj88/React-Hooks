import Effect from './effecthook';
import './App.css';
import Navbar from './navbar';
import Context from './contexthook';
import Ref from './refhook';
import { Route, Routes } from 'react-router-dom';
import Home from './home';
import Callback from './callback';
import Memo from './memo';
import Reducer from './reducer';


function App() {


  return (
    <div className='App'>
      <Navbar/>
      <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='effecthook' element={<Effect/>}/>
      <Route path='contexthook' element={<Context/>}/>
      <Route path='refhook' element={<Ref/>}/>
      <Route path='callback' element={<Callback/>}/>
      <Route path='memo' element={<Memo/>}/>
      <Route path='reducer' element={<Reducer/>}/>
    </Routes>
    </div>
  );
}

export default App;
