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
import Population from 'routes/population'


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
        <Route path='/app/populationdashboard' component={Population} />
<Route path='/app/login' component={Login} />

 <Route path='/app/mailbox/inbox' component={Inbox} />
      <Route path='/app/mailbox/mail' component={Mail} />
      <Route path='/app/mailbox/compose' component={Compose} />
<Route path='/app/calendar' component={Calendar} />
    </Router>

  );
};
