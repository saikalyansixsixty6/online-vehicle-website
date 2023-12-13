
import './App.css';
import Body from './components/Body';
import appStore from './utils/appStore'
import {Provider} from "react-redux"
import MyState from './context/MyState';

function App() {
  return (
    <div className="App">

      <Provider store={appStore}>
        <MyState>
            <Body/>
        </MyState>
         

      </Provider>  
    
    </div>
  );
}

export default App;
