import React from "react"
import CvSectionTitle from "./cv-section-title"
import CvLiWithSvg from "./cv-li-with-svg"

import SvgAchievements from "../assets/svg/achievement.svg"

const CvAchievements = () => (
	<>
		<CvSectionTitle>Achievements</CvSectionTitle>
		<ul className="list-unstyled">
			<CvLiWithSvg svg={<SvgAchievements />}>
				Reduced waiting time in the meal ticket purchase queue at the
				university restaurant from 30 minutes to 1 minute by developing
				a system and optimizing the sales process.
			</CvLiWithSvg>
			<CvLiWithSvg svg={<SvgAchievements />}>
				Made transitivity extraction algorithm 4.08 times faster by
				using Multithreading.
			</CvLiWithSvg>
			<CvLiWithSvg svg={<SvgAchievements />}>
				Made transitivity extraction algorithm 12.76 times faster by
				using Apache Spark.
			</CvLiWithSvg>
		</ul>
	</>
)

export default CvAchievements
