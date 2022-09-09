import React from 'react';
import NavBar from '../navBar/NavBar';
import Hero from '../hero/Hero';
import AboutUs from '../aboutUs/AboutUs';
import Services from '../services/Services';
import shape1 from '../../images/shape1-2.svg'
import shape2 from '../../images/shape2.svg'
import './app.css';

function App() {
return (
	<div className="App">
		<img src={shape1} alt='' className='shape-one'/>
		<img src={shape2} alt='' className='shape-two'/>
		<NavBar/>
		<Hero/>
		<AboutUs/>
		<Services/>
	</div>
);
}

export default App;
