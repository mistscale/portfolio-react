import React from 'react';
import styled from 'styled-components';

const Socials = () => {
	return (
		<>
			<IconContainer>
				<a href='https://www.linkedin.com/in/lisolu/' target='_blank' rel='noreferrer'>
					<IconWrapper>
						<Icon className='fa-brands fa-linkedin-in'></Icon>
					</IconWrapper>
				</a>
				<a href='https://github.com/mistscale' target='_blank' rel='noreferrer'>
					<IconWrapper>
						<Icon className='fa-brands fa-github'></Icon>
					</IconWrapper>
				</a>
			</IconContainer>
		</>
	);
};

export default Socials;

const IconContainer = styled.div`
	display: flex;
	justify-content: flex-end;
	gap: 10px;
	margin-top: -10px;
`;

const IconWrapper = styled.div`
	width: 45px;
	height: 45px;
	border: 2px solid var(--white);
	border-radius: 50%;
	display: flex;
	align-items: center;
	justify-content: center;

	&:hover {
		opacity: 75%;
		transition: 0.3s ease;
	}
`;

const Icon = styled.i`
	color: white;
	font-size: 1.7rem;
`;
