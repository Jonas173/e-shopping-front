import { Component } from 'react';
import Navbar from './components/navbar';
import { Route } from 'react-router-dom';
import Home from './components/home';
import Explore from './components/explore';
import Cart from './components/cart';
import Orders from './components/orders';
import { createBrowserHistory } from 'history'

const newHistory = createBrowserHistory();

class App extends Component {
    render() {
        return (
            <div>
                <Navbar />
                <Route path='/explore' component={Explore} />
                <Route path='/cart' component={Cart} />
                <Route path='/orders' component={Orders} />
                <Route exact path='/' component={Home} />
            </div>
        );
    }
}

export default App;