import './App.css';
import { BrowserRouter ,Switch,Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import AuthProvider from './Context/AuthProvider';
import Header from './Sharing/Header/Header';
import Home from './pages/Home/Home';
import Services from './pages/services/Services';
import PrivateRoute from './pages/PrivateRoute/PrivateRoute';
import PlaceOrder from './pages/PlaceOrder/PlaceOrder';
import Items from './pages/Items/Items';
import Login from './pages/Login/Login';
import Fooder from './Sharing/Footer/Fooder';

function App() {
  return (
    <div className="App">
    <AuthProvider>
    <BrowserRouter>
    <Header></Header>
    <Switch>
      <Route exact path='/'>
        <Home></Home>
      </Route>
      <Route path='/home'>
        <Home></Home>
      </Route>
      <Route path='/Services'>
        <Services></Services>
      </Route>
      <PrivateRoute path='/placeOrder/:book'>
        <PlaceOrder></PlaceOrder>
      </PrivateRoute>
      <Route path='/Specialoffer'>
        <Items></Items>
      </Route>
      <Route path='/Login'>
        <Login></Login>
      </Route>
    </Switch>
    <Fooder></Fooder>
    </BrowserRouter>
    </AuthProvider>
    </div>
  );
}

export default App;
