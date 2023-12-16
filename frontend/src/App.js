
import './App.css';
import Body from './components/Body';
import appStore from './utils/appStore'
import {Provider} from "react-redux"
import MyState from './context/MyState';
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <div className="App">

      <Provider store={appStore}>
        <MyState>
            <Body/>
            <ToastContainer/>
        </MyState>
         

      </Provider>  
    
    </div>
  );
}

export default App;
