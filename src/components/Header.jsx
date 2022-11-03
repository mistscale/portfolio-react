import React from 'react';
import Socials from './Socials';
import {
	Hero,
	Container,
	HeaderText,
	HeaderName,
	HeaderTitle,
	ProfileContainer,
	Profile,
} from './Styles';

const Header = () => {
	return (
		<>
			<Hero>
				<Container>
					<Socials />
					<HeaderText>
						<HeaderName>Lisen Lundgren</HeaderName>
						<HeaderTitle>Frontend</HeaderTitle>
						<HeaderTitle>Developer</HeaderTitle>
					</HeaderText>
					<ProfileContainer>
						<Profile src='../assets/profile.jpeg' alt='Lisen profile' />
					</ProfileContainer>
				</Container>
			</Hero>
		</>
	);
};

export default Header;
