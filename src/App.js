import 'antd/dist/antd.min.css';
import './styles/styles.css';
import './styles/media.css';
import React, { useEffect, useState } from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Main from './components/Main';
import Order from './components/Order';
import Ship from './components/Ship';
import Login from './components/Login';
import Slider from './components/planets/Slider';
import Planets from './components/planets/Planets';
import SearchPage from './components/search/SearchPage';
import User from './components/User';

export const AppContext = React.createContext();

function App() {
	const [planets, setPlanets] = useState(Planets);
	const [orders, setOrders] = useState([]);
	const [users, setUsers] = useState([]);
	const [toggleElem, setToggleElem] = useState(false);

	useEffect(() => {
		if (orders.length === 0) {
            let ordersLocal = localStorage.getItem('ordersLocal');
            if (ordersLocal && ordersLocal.length > 0) {
                ordersLocal = JSON.parse(ordersLocal);

                if (ordersLocal && ordersLocal.length > 0) setOrders(ordersLocal);
            }
        }

		if (users.length === 0) {
            let usersLocal = localStorage.getItem('usersLocal');
            if (usersLocal && usersLocal.length > 0) {
                usersLocal = JSON.parse(usersLocal);

                if (usersLocal && usersLocal.length > 0) {
					setUsers(usersLocal);
					setToggleElem(true);
				} 
            }
        }

		localStorage.setItem('ordersLocal', JSON.stringify(orders));
		localStorage.setItem('usersLocal', JSON.stringify(users));
	}, [orders, users])


  	return (
    <AppContext.Provider value={{planets, setPlanets, orders, setOrders, users, setUsers, toggleElem, setToggleElem}}>
			<Router basename="/spaceApp">
				<Header />
				<Routes>
					<Route path="/" element={<Main />}></Route>
					<Route path="/order/" element={<Order />}></Route>
					<Route path="/ship/" element={<Ship />}></Route>
					<Route path="/planets/" element={<Slider />}></Route>
					<Route path="/search/" element={<SearchPage />}></Route>
					<Route path="/login/" element={<Login />}></Route>
					<Route path="/user/" element={<User />}></Route>
				</Routes>
        		<Footer />
			</Router>
	</AppContext.Provider>
  );
}

export default App;
