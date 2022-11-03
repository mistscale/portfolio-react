import React from 'react';
import Header from './components/Header';
import About from './components/About';
import FeaturedProjects from './components/FeaturedProjects';
import OtherProjects from './components/OtherProjects';

const App = () => {
	return (
		<>
			<Header />
			<About />
			<FeaturedProjects />
			<OtherProjects />
		</>
	);
};

export default App;
