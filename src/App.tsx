import routers from './routers';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          {routers.map((route) => {
            return (
              <Route
                component={route.component}
                path={route.path}
                key={route.name}
                exact={!!route.exact}></Route>
            );
          })}
        </Switch>
      </Router>
    </div>
  );
}

export default App;
