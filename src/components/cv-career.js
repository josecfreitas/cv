import React from "react"
import CvSectionTitle from "./cv-section-title"
import CvCustomLi from "./cv-custom-li"
import CvLinkNewTab from "./cv-link-new-tab"

const CvCareer = () => (
	<>
		<CvSectionTitle>Career</CvSectionTitle>
		<ul className="list-unstyled">
			<CvCustomLi
				title="Advanced Programmer Analyst"
				subtitle={
					<CvLinkNewTab link="https://www.qat.com">
						QAT Global
					</CvLinkNewTab>
				}
				startEnd="2020~*"
			>
				Developing and maintaining a large utility automation
				application in a team of 14 people. Working with Scrum, Java,
				Spring Boot, SQL Server, HTML, CSS, JavaScript, jQuery, Jenkins,
				Unit Testing (JUnit) and SVN.
			</CvCustomLi>
			<CvCustomLi
				title="Co-founder / Software Enginner"
				subtitle={
					<CvLinkNewTab link="https://agencia3r.com.br">
						Bicrement Software House and 3r Agência
					</CvLinkNewTab>
				}
				startEnd="2016~2020"
			>
				Creating solutions with technology for entrepreneurs and
				companies. Worked with Java, Spring Boot, HTML, CSS, JavaScript,
				PostgreSQL, MySQL, PHP, jQuery, Bootstrap, Angular7+, React,
				GatsbyJS, NextJS, Sass, Less, Laravel, Wordpress, Ionic,
				Flutter, Docker, AWS S3, jUnit, UX/UI, PWA, SEO, NPM, Maven,
				Postman, Git, Lombok, Adobe XD and Adobe Ilustrator.
			</CvCustomLi>
			<CvCustomLi
				title="Co-founder"
				subtitle={
					<CvLinkNewTab link="https://eventos3r.com.br">
						3R Eventos
					</CvLinkNewTab>
				}
				startEnd="2018~2020"
			>
				Doing parties with an average audience of 1100 people. The last
				party before the pandemic, in February 2020, had an audience of
				2500 people. My responsibilities were:
				<ul>
					<li>Financial management</li>
					<li>
						Management of the team that worked at the parties: from
						the team of bartenders to the security team, around 50
						people
					</li>
					<li>SAC</li>
					<li>
						Helping the marketing team and creating party themes
					</li>
				</ul>
			</CvCustomLi>
			<CvCustomLi
				title="Project Leader"
				subtitle={
					<CvLinkNewTab link="https://www.grupogbd.com">
						Database Group - GBD
					</CvLinkNewTab>
				}
				startEnd="2016~2018"
			>
				The main responsibilities as a project leader were:
				<ul>
					<li>
						Management of the teams for each project (about 3 people
						per project)
					</li>
					<li>Meetings with stakeholders</li>
					<li>Definition of project requirements</li>
					<li>Project version definition</li>
					<li>Definition of the schedule</li>
					<li>Development of Project Documents</li>
					<li>Assistance to the development team</li>
					<li>Review of activities developed by team members</li>
					<li>Conducting project tests</li>
					<li>Reporting bugs</li>
					<li>Database administration</li>
					<li>
						Release of systems under test, approval and production
					</li>
					<li>Developing and maintaining Database Group's systems</li>
				</ul>
				<p>
					Worked with Java, Spring Boot, JPA/Hibernate, PostgreSQL,
					JSP HTML, CSS, Less, Boostrap, JavaScript and jQuery.
				</p>
			</CvCustomLi>
			<CvCustomLi
				title="Java Full Stack Developer"
				subtitle={
					<CvLinkNewTab link="https://www.grupogbd.com">
						Database Group - GBD
					</CvLinkNewTab>
				}
				startEnd="2014~2015"
			>
				Developing and maintaining Database Group's systems. Worked with
				Java, Spring MVC, JPA/Hibernate, PostgreSQL, HTML, CSS,
				Boostrap, JavaScript, jQuery and JSP,
			</CvCustomLi>
		</ul>
	</>
)

export default CvCareer
