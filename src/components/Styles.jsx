import styled, { css } from 'styled-components';

export const Section = styled.section`
	background-color: var(--light-grey);
	${(props) =>
		props.white &&
		css`
			background: var(--white);
		`};
`;

export const Container = styled.div`
	width: 375px;
	margin: 0 auto;
	padding: 40px 24px;
`;

export const Hero = styled.header`
	background-image: url(./assets/hero4.jpg);
	background-size: cover;
	height: 520px;
	color: var(--white);
`;

export const HeaderText = styled.div`
	padding-top: 70px;
`;

export const HeaderTitle = styled.h1`
	font-weight: 700;
	font-size: 3rem;
	line-height: 1;
	text-transform: uppercase;
`;

export const HeaderName = styled.h3`
	font-weight: 400;
	font-size: 18px;
	line-height: 18px;
	letter-spacing: 1px;
	text-transform: uppercase;
`;

export const ProfileContainer = styled.div`
	display: flex;
	justify-content: flex-end;
	padding-top: 100px;
`;

export const Profile = styled.img`
	height: 180px;
	width: 180px;
	border-radius: 50%;
	border: 2px solid var(--light-grey);
`;

export const Line = styled.span`
	border: 1px solid var(--tertiary);
	width: 40px;
	display: inline-block;
	margin-bottom: 4px;
`;

export const Dot = styled.span`
	height: 10px;
	width: 10px;
	background-color: var(--tertiary);
	border-radius: 50%;
	display: inline-block;
	margin-right: 10px;
`;

export const Paragraph = styled.p`
	color: var(--primary);
	font-size: 1.1rem;
	line-height: 1.6;
`;

export const SectionTitle = styled.h2`
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

export const SectionSubtitle = styled.h2`
	font-weight: 700;
	font-size: 1.5rem;
	color: var(--primary);
	padding: 0 5px;
	margin: 40px 0 20px;
	text-transform: uppercase;
	text-align: center;
`;

export const ProjectTitle = styled.h3`
	color: var(--primary);
	font-weight: 700;
	font-size: 1.3rem;
	text-transform: uppercase;
	text-align: left;
	margin: 10px 0 0;
`;

export const TagWrapper = styled.div`
	display: flex;
	flex-wrap: wrap;
	align-items: center;
	gap: 7px;
`;

export const Tag = styled.p`
	color: var(--primary);
    border: 2px solid;
	font-size: .9rem;
	line-height: 1;
	font-weight: 500;
	padding: 5px 7px;
`;
