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
				title="Made transitivity extraction algorithm 12.76 times faster by
				using Apache Spark."
			/>
			<CvCustomLi
				svg={<SvgAchievements />}
				title="Made transitivity extraction algorithm 4.08 times faster by
				using Multithreading."
				subtitle={
					<>
						<a
							href="https://ieeexplore.ieee.org/abstract/document/8327078"
							target="_blank"
							rel="noreferrer"
						>
							ieeexplore.ieee.org/abstract/document/8327078
						</a>
						<br />
						<a
							href="https://www.inderscience.com/info/inarticle.php?artid=106061"
							target="_blank"
							rel="noreferrer"
						>
							inderscience.com/info/inarticle.php?artid=106061
						</a>
					</>
				}
			/>
			<CvCustomLi
				svg={<SvgAchievements />}
				title="Reduced waiting time in the meal ticket purchase queue at the
				university restaurant from 30 minutes to 1 minute by developing
				a system and optimizing the sales process."
				subtitle={
					<a
						href="https://sru.ibilce.unesp.br"
						target="_blank"
						rel="noreferrer"
					>
						sru.ibilce.unesp.br
					</a>
				}
			/>
		</ul>
	</>
)

export default CvAchievements
