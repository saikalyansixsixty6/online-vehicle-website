import { BrowserRouter as Router, Route,Switch } from 'react-router-dom';

import ChatPopup from '../pages/Chatpopup';

function Routes() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/chatpopup" component={ChatPopup} />
    </Switch>
       
    </Router>
  )
}

export default Routes