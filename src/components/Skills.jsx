import React from 'react';
import data from '../skills.json';
import { Container, Section, SectionTitle } from './Styles';
import styled from 'styled-components';

const SkillsContainer = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr;
	margin: 40px 0 0;
`;

const SkillsList = styled.ul`
	list-style-type: none;
	font-size: 1.1rem;
	line-height: 1.8;
	text-align: center;
	margin-bottom: 20px;
`;

const SkillsTitle = styled.h3`
	font-weight: 600;
	text-transform: uppercase;
`;

const Skills = () => {
	return (
		<>
			<Section white>
				<Container>
					<SectionTitle>Skills</SectionTitle>
					<SkillsContainer>
						<SkillsList>
							<SkillsTitle>Code</SkillsTitle>
							{data
								.filter((skills) => skills.category === 'code')
								.map((skills) => (
									<li>{skills.skill}</li>
								))}
						</SkillsList>
						<SkillsList>
							<SkillsTitle>Toolbox</SkillsTitle>
							{data
								.filter((skills) => skills.category === 'toolbox')
								.map((skills) => (
									<li>{skills.skill}</li>
								))}
						</SkillsList>
						<SkillsList>
							<SkillsTitle>IT Operations</SkillsTitle>
							{data
								.filter((skills) => skills.category === 'itops')
								.map((skills) => (
									<li>{skills.skill}</li>
								))}
						</SkillsList>
					</SkillsContainer>
				</Container>
			</Section>
		</>
	);
};

export default Skills;
