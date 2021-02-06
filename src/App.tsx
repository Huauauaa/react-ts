import routers from './routers';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import Layouts from './views/Layouts';
import './assets/styles/App.less';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Layouts routers={routers}>
            {routers.map((route) => {
              return (
                <Route
                  component={route.component}
                  path={route.path}
                  key={route.name}
                  exact={!!route.exact}></Route>
              );
            })}
          </Layouts>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
