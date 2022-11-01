import React from 'react';
import data from '../projects.json';

const Projects = () => {
	return (
		<div>
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
						<h3>{project.title}</h3>
						<p>{project.description}</p>
						{project.tags.map((tag) => (
							<div>
								<p key={tag}>{tag}</p>
							</div>
						))}
						<a href={project.url_github} target='_blank' rel='noopener noreferrer'>
							<i class='github-btn fa-brands fa-github-square'></i>
						</a>
					</article>
				))}
		</div>
	);
};

export default Projects;
