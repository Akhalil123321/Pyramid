import React from 'react';
import NavBar from '../navBar/NavBar';
import shape1 from '../../images/shape1.svg'
import './app.css';

function App() {
return (
	<div className="App">
		<img src={shape1} alt='' className='shape-one'/>
		<NavBar/>
	</div>
);
}

export default App;
