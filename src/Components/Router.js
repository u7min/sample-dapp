import React from 'react';
import {HashRouter as Router, Route} from 'react-router-dom';
import Header from './Header';
import MyZombies from '../Screens/MyZombies';
import Zombie from '../Screens/Zombie';
import CreateZombie from '../Screens/CreateZombie';
import Profile from '../Screens/Profile';
import AllZombies from '../Screens/AllZombies';

export default () => {
	return (
		<Router>
			<Header />
			<Route path='/' exact component={MyZombies} />
			<Route path='/zombies' exact component={MyZombies} />
			<Route path='/zombies-all' exact component={AllZombies} />
			<Route path='/zombies/:id' exact component={Zombie} />
			<Route path='/create-zombie' exact component={CreateZombie} />
			<Route path='/profile/:owner' exact component={Profile} />
		</Router>
	);
};
