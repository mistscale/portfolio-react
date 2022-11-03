import React from 'react';
import { Container, Line, Dot, Paragraph, Section } from './Styles';

const About = () => {
	return (
		<Section white>
			<Container>
				<Paragraph>
					<Line></Line>
					<Dot></Dot>
					Hello! I'm Lisen, a detail-oriented frontend developer with passion for cloud computing
					and background in IT operations. I aspire to develop the IT solutions of the future.
				</Paragraph>
			</Container>
		</Section>
	);
};

export default About;
