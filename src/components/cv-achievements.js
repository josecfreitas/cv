import React from "react"
import CvSectionTitle from "./cv-section-title"
import CvCustomLi from "./cv-custom-li"

import SvgAchievements from "../assets/svg/achievement.svg"

const CvAchievements = () => (
	<>
		<CvSectionTitle>Achievements</CvSectionTitle>
		<ul className="list-unstyled">
			<CvCustomLi
				svg={<SvgAchievements />}
				title="Reduced waiting time in the meal ticket purchase queue at the
				university restaurant from 30 minutes to 1 minute by developing
				a system and optimizing the sales process."
			/>
			<CvCustomLi
				svg={<SvgAchievements />}
				title="Made transitivity extraction algorithm 4.08 times faster by
				using Multithreading."
			/>
			<CvCustomLi
				svg={<SvgAchievements />}
				title="Made transitivity extraction algorithm 12.76 times faster by
				using Apache Spark."
			/>
		</ul>
	</>
)

export default CvAchievements
