import React from 'react';

import './HomePage.scss';

import { Link } from 'react-router-dom';
import { FaExclamation } from 'react-icons/fa';

import Page from '../../Layout/Page/Page';
import AnimatedImage from '../../Components/AnimatedImage/AnimatedImage';
import { ReactComponent as CIT_Illustration } from '../../Assets/CIT_Logo/CIT_Illustration.svg';
import { ReactComponent as CIT_Logo_1 } from '../../Assets/CIT_Logo/CIT_Logo_1.svg';
import AssignmentsCard from '../../Components/AssignmentsCard/AssignmentsCard';

import Homeworks from '../../Info/Assignments/Homeworks/Homeworks';
import Projects from '../../Info/Assignments/Projects/Projects';
import Labs from '../../Info/Assignments/Labs/Labs';
import { ImportantLinks } from '../../Info/Resources/Resources';

class HomePage extends React.Component {
	getAssignments() {
		const activeH = Homeworks.filter((h) => h.active); 
		let curH;
		if (activeH.length == 0) {
			curH = Homeworks.filter((h) => !h.active)[0]; 
		} else { curH = activeH[activeH.length - 1]; }
			
		const activeL = Labs.filter((l) => l.active); 
		let curL;
		if (activeL.length == 0) {
			curL = Labs.filter((l) => !l.active)[0];
		} else { curL = activeL[activeL.length - 1] }

		const activeP = Projects.filter((p) => p.active); 
		let curP;
		if (activeP.length == 0) {
			curP = Projects.filter((p) => !p.active)[0];
		} else { curP = activeP[activeP.length - 1]; }

		return [
			{name: 'Homework', content: curH},
			{name: 'Lab', content: curL},
			{name: 'Project', content: curP},
		]
	}

	renderHomeLinks() {
		return ImportantLinks.map((l) => <div className="home-link">
			<p className="home-link-icon">{l.icon}</p>
			<a href={l.link} target="_blank" rel="noopener noreferrer">{l.label}</a>
			<p className="home-link-description">{l.description}</p>
		</div>
		)
	}

	renderDueSoonCards() {
		const curA = this.getAssignments();
		return (
			<div className='home-due-soon-content'>
				{curA.map(({name, content}) => {
					return (
						<div className="home-due-soon-section">
							<div className="home-due-soon-label">
								<p>{name}</p>
								<Link to="/homeworks">See all...</Link>
							</div>
							<AssignmentsCard number={content.number} title={content.title} active={content.active} dueDate={content.dueDate} links={content.links}/>
						</div>
					)
				})}
			</div>
		)
	}

	render() {
		return (
			<Page activeTab="Home" resizeStyle="home-resize">
				<div className="home-wrapper">
					<div className="home-left-wrapper">
						<div className="home-intro-images">
							<CIT_Illustration className="cit-illustration"/>
							{/* <AnimatedImage images={[<CIT_Logo_1/>]}/> */}
							<AnimatedImage/>
						</div>
						<div className="home-intro-text">
							<h1>Welcome to CS17 :)</h1>
							<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
						</div>
						<div className="home-links">
							<h1>Important Links</h1>
							{this.renderHomeLinks()}
						</div>
					</div>
					<div className="home-announcement">
						<div>
							<div><FaExclamation/></div>
							<p><mark>Announcement:</mark> The first lecture will be held at&nbsp;<a href="">this Zoom link</a>. We hope to see you there!</p>
						</div>
					</div>
					<div className="home-due-soon">
						<h1>Current Assignments</h1>
						{this.renderDueSoonCards()}
					</div>
					<div className="home-hours">
						<iframe src="https://calendar.google.com/calendar/embed?src=brown.edu_fechjhecobm9ec4c23lp12nfuk%40group.calendar.google.com&ctz=America%2FChicago" style={{border: 0}} frameborder="0" scrolling="no"></iframe>
					</div>
				</div>
			</Page>
		);
	}
}

export default HomePage;