import React from 'react';
import data from '../projects.json';
import {
	Section,
	SectionSubtitle,
	ProjectTitle,
	Paragraph,
	TagWrapper,
	Tag,
	Container,
} from './Styles';

const OtherProjects = () => {
	return (
		<>
			<Section>
				<Container>
					<div>
						<SectionSubtitle>Other Projects</SectionSubtitle>
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
				</Container>
			</Section>
		</>
	);
};

export default OtherProjects;
