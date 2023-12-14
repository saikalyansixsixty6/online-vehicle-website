import { BrowserRouter as Router, Route } from 'react-router-dom';

import Chatpopup from '../pages/Chatpopup';

function Routes() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/chatpopup" component={Chatpopup} />
        
      </Switch>
    </Router>
  )
}

export default Routes