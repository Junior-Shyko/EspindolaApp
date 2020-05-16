import React from 'react';
import Home from './pages/immobile';
import Imoveis from './pages/immobile/imoveis';
import Detail from './pages/immobile/detail';
import Main from './pages/main';
import './config/statusBarConfig';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator} from 'react-navigation-stack';

const Routes = createAppContainer(
    createStackNavigator({
      Home: Home,
      Imoveis: Main,
      Immobile: Detail
    })
  );
  
export default Routes;
  
// const App = () => <Route />;

// export default App;