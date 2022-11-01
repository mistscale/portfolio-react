import React from 'react';
import data from '../projects.json';
import styled from 'styled-components';

const SectionTitle = styled.h2`
	font-weight: 700;
	font-size: 1.5rem;
	color: var(--white);
	background-color: var(--primary);
	display: table;
	text-align: center;
	padding: 3px 10px;
	margin: 20px auto;
	text-transform: uppercase;
	border-radius: 3px;
`;

const ProjectTitle = styled.h3`
	color: var(--primary);
	font-weight: 700;
	font-size: 1.3rem;
	text-transform: uppercase;
	text-align: left;
	margin: 10px 0 0;
`;

const Paragraph = styled.p`
	color: var(--primary);
	font-size: 1.1rem;
	line-height: 1.6;
`;

const TagWrapper = styled.div`
	display: flex;
	flex-wrap: wrap;
	align-items: center;
	gap: 7px;
`;

const Tag = styled.p`
	color: var(--primary);
	background-color: var(--secondary);
	font-size: 1rem;
	line-height: 1;
	font-weight: 500;
	padding: 7px;
	border-radius: 3px;
	margin: 5px 0 0;
	height: 30px;
`;

const Projects = () => {
	return (
		<>
			<SectionTitle>Featured Projects</SectionTitle>
			<div className='project-group'>
				{data
					.filter((project) => project.featured)
					.map((project) => (
						<article key={project.title}>
							<a
								href={project.url_deploy}
								alt='deployed project'
								target='_blank'
								rel='noopener noreferrer'
							>
								<img src={project.image} alt='project screenshot' />
								<div className='project-overlay'>
									<h2 className='project-overlay-title'>{project.title}</h2>
								</div>
							</a>
							<ProjectTitle>{project.title}</ProjectTitle>
							<Paragraph>{project.description}</Paragraph>
							<TagWrapper>
								{project.tags.map((tag) => (
									<Tag key={tag}>{tag}</Tag>
								))}
								<a href={project.url_github} target='_blank' rel='noopener noreferrer'>
									<i class='github-btn fa-brands fa-github-square'></i>
								</a>
							</TagWrapper>
						</article>
					))}
			</div>
			<div>
				{data
					.filter((project) => !project.featured)
					.map((project) => (
						<article key={project.title}>
							<a
								href={project.url_deploy}
								alt='deployed project'
								target='_blank'
								rel='noopener noreferrer'
							>
								<ProjectTitle>{project.title}</ProjectTitle>
							</a>
							<Paragraph>{project.description}</Paragraph>
							<TagWrapper>
								{project.tags.map((tag) => (
									<Tag key={tag}>{tag}</Tag>
								))}
								<a href={project.url_github} target='_blank' rel='noopener noreferrer'>
									<i class='github-btn fa-brands fa-github-square'></i>
								</a>
							</TagWrapper>
						</article>
					))}
			</div>
		</>
	);
};

export default Projects;
