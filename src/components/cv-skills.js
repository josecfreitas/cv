import React from "react"
import CvSectionTitle from "./cv-section-title"
import CvCustomLi from "./cv-custom-li"

const CvSkills = () => (
	<>
		<CvSectionTitle>Skills</CvSectionTitle>
		<ul className="list-unstyled">
			<CvCustomLi title="Languages">
				<p>
					Java11 (1 year), Java8 (3 years), Java7 (3 years), HTML (7
					years), CSS (7 years), JavaScript (7 years), Scala (trained
					in 2018), Node (trained in 2018), PHP (trained in 2017), C#
					(trained in 2016), C (trained in 2013), C++ (trained in
					2012), Visual Basic (trained in 2012).
				</p>
			</CvCustomLi>
			<CvCustomLi title="Databases">
				<p>
					PostgresQL (7 years), MySql (2 years), Neo4j (2 years),
					MongoDB (trained in 2020), Reddis (trained in 2019), Sqlite
					(trained in 2012).
				</p>
			</CvCustomLi>
			<CvCustomLi title="Frameworks and Libraries">
				<p>
					Bootstrap 3/4 (7 years), Spring MVC (6 years), Spring Boot
					(4 years), jQuery (4 years), Angular7+ (3 years), Sass (3
					year), Ionic (2 years), jUnit (2 years), Less (1 year),
					Spark (1 year), Wordpress (1 year), Docker (1 year), React
					(1 year), GatsbyJS (1 year), Jenkins (trained in 2021),
					Apache Kafka (trained in 2021), NextJS (trained in 2020),
					Flutter (trained in 2020), AWS (trained in 2020), Webpack
					(trained in 2018) and Laravel (trained in 2017).
				</p>
			</CvCustomLi>
			<CvCustomLi title="Others">
				<p>
					Maven (7 years), Git (5 years), SEO (4 years), NPM (4
					years), Postman (4 years), UX/UI (3 years), PWA (3 years),
					SVN (3 years), Lombok (2 years), Unit Testing (2 years),
					Docker (1 year), Scrum (1 year), Integration Testing (1
					year), Kubernetes (trained in 2021) and Kanban (trained in
					2017).
				</p>
			</CvCustomLi>
		</ul>
	</>
)

export default CvSkills
