import React from "react"
import CvSectionTitle from "./cv-section-title"
import CvCustomLi from "./cv-custom-li"

const CvSkills = () => (
	<>
		<CvSectionTitle>Skills</CvSectionTitle>
		<ul className="list-unstyled">
			<CvCustomLi
				title="Front-end"
				subtitle="HTML, CSS, JavaScript, jQuery, Angular 2+, ReactJS, Next, Gatsby"
			/>
			<CvCustomLi
				title="Back-end"
				subtitle="Java, Spring Boot, Spring MVC, Spring Security, JPA 2 (Hibernate)"
			/>
			<CvCustomLi
				title="Databases"
				subtitle="MySQL, PostgresQL, Neo4J, MongoDB, Redis"
			/>
			<CvCustomLi
				title="Others"
				subtitle="Git, SVN, Postman, jUnit, Typescript, SEO optimizations, PHP (Laravel), Wordpress, AWS, Docker"
			/>
		</ul>
	</>
)

export default CvSkills
