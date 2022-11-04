import React from 'react';
import Header from './components/Header';
import About from './components/About';
import FeaturedProjects from './components/FeaturedProjects';
import OtherProjects from './components/OtherProjects';
import Skills from './components/Skills';

const App = () => {
	return (
		<>
			<Header />
			<About />
			<FeaturedProjects />
			<OtherProjects />
			<Skills />
		</>
	);
};

export default App;
