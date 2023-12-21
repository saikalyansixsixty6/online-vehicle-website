
import './App.css';
import Body from './components/Body';

import MyState from './context/MyState';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {
  return (
    <div className="App">

      
        <MyState>

            <Body/>
            <ToastContainer/>
            
        </MyState>
       
    
    </div>
  );
}

export default App;
