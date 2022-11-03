import React from 'react';
import data from '../projects.json';
import {
	SectionTitle,
	ProjectTitle,
	Paragraph,
	TagWrapper,
	Tag,
	Container,
	Section,
} from './Styles';

const FeaturedProjects = () => {
	return (
		<>
			<Section>
				<Container>
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
											<i class='fa-brands fa-github'></i>
										</a>
									</TagWrapper>
								</article>
							))}
					</div>
				</Container>
			</Section>
		</>
	);
};

export default FeaturedProjects;
