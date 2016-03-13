import { Route, Router } from 'react-router';
import BrowserHistory from 'react-router/lib/BrowserHistory';
import HashHistory from 'react-router/lib/HashHistory';


import Blank from 'routes/blank';
import Lock from 'routes/lock';
import Login from 'routes/login';
import Inbox from 'routes/inbox';
import Mail from 'routes/mail';
import Compose from 'routes/compose';
import Calendar from 'routes/calendar';
import StatePopulation from 'routes/statepopulation';
import Population from 'routes/population'
import Population1 from 'routes/population1'
import TotalPopulation from 'routes/totalpopulation'
import TotalPopulation1 from 'routes/totalpopulation1'
import TotalPopulation2 from 'routes/totalpopulation2'
import TotalPopulation3 from 'routes/totalpopulation3'


export default (withHistory, onUpdate) => {
  const history = withHistory?
                  (Modernizr.history ?
                    new BrowserHistory
                  : new HashHistory)
                : null;
  return (
    <Router history={history} onUpdate={onUpdate}>
   <Route path='/' component={Lock} />
   <Route path='/app/lock' component={Lock} />
   <Route path='/app/dashboard' component={Blank} />
         <Route path='/app/statepopulationdashboard' component={StatePopulation} />
        <Route path='/app/populationdashboard' component={Population} />
        <Route path='/app/populationdashboard1' component={Population1} />
        <Route path='/app/totalpopulationdashboard' component={TotalPopulation} />
        <Route path='/app/totalpopulationdashboard1' component={TotalPopulation1} />
        <Route path='/app/totalpopulationdashboard2' component={TotalPopulation2} />
        <Route path='/app/totalpopulationdashboard3' component={TotalPopulation3} />
<Route path='/app/login' component={Login} />

 <Route path='/app/mailbox/inbox' component={Inbox} />
      <Route path='/app/mailbox/mail' component={Mail} />
      <Route path='/app/mailbox/compose' component={Compose} />
<Route path='/app/calendar' component={Calendar} />
    </Router>

  );
};
