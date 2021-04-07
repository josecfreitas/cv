import React from "react"
import CvSectionTitle from "./cv-section-title"
import CvLiWithSvg from "./cv-li-with-svg"

const CvSkills = () => (
	<>
		<CvSectionTitle>Skills</CvSectionTitle>
		<ul className="list-unstyled">
			<CvLiWithSvg subtitle="HTML, CSS, JavaScript, jQuery, Angular 2+, ReactJS, Next, Gatsby">
				Front-end
			</CvLiWithSvg>
			<CvLiWithSvg subtitle="Java, Spring Boot, Spring MVC, Spring Security, JPA 2 (Hibernate)">
				Back-end
			</CvLiWithSvg>
			<CvLiWithSvg subtitle="MySQL, PostgresQL, Neo4J, MongoDB, Redis">
				Databases
			</CvLiWithSvg>
			<CvLiWithSvg subtitle="Git, SVN, Postman, jUnit, Typescript, SEO optimizations, PHP (Laravel), Wordpress, AWS, Docker">
				Others
			</CvLiWithSvg>
		</ul>
	</>
)

export default CvSkills
