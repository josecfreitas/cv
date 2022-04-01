import React from "react"
import CvSectionTitle from "./cv-section-title"
import CvCustomLi from "./cv-custom-li"

const CvSkills = () => (
	<>
		<CvSectionTitle>Skills</CvSectionTitle>
		<ul className="list-unstyled">
			<CvCustomLi title="Programming Languages">
				<p>
					HTML (8 years), CSS (8 years), JavaScript (8 years),
					TypeScript (4 years), NodeJS (3 years), Go (1 year), Java11
					(1 year), Java8 (3 years), Java7 (3 years), Scala (trained
					in 2018), PHP (trained in 2017), C# (trained in 2016), C
					(trained in 2013), C++ (trained in 2012), and Visual Basic
					(trained in 2012).
				</p>
			</CvCustomLi>
			<CvCustomLi title="Databases">
				<p>
					MongoDB (2 years), Redis (1 year), ElasticSearch (1 year),
					PostgresQL (7 years), MySql (2 years), Neo4j (2 years), and
					Sqlite (trained in 2012).
				</p>
			</CvCustomLi>
			<CvCustomLi title="Frameworks and Libraries">
				<p>
					Vue (1 year), ExpressJS (2 year), NestJS (1 year), Angular7+
					(3 years), Bootstrap 3/4 (7 years), Spring MVC (6 years),
					Spring Boot (4 years), jQuery (4 years), Sass (4 year),
					Ionic (2 years), jUnit (2 years), Less (1 year), Spark (1
					year), Wordpress (1 year), React (1 year), GatsbyJS (1
					year), NextJS (1 year), Jenkins (trained in 2021), Apache
					Kafka (trained in 2021), Flutter (trained in 2020), Webpack
					(trained in 2018), and Laravel (trained in 2017).
				</p>
			</CvCustomLi>
			<CvCustomLi title="Others">
				<p>
					Docker (1 year), Kubernetes (1 year), AWS (1 year), Unit
					Testing (4 years), Integration Testing (4 years),Git (6
					years), SEO (5 years), NPM (4 years), Postman (5 years),
					UX/UI (4 years), Maven (7 years), PWA (3 years), SVN (3
					years), Lombok (2 years), Scrum (1 year), and Kanban
					(trained in 2017).
				</p>
			</CvCustomLi>
		</ul>
	</>
)

export default CvSkills
