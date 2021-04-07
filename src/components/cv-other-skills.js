import React from "react"
import CvSectionTitle from "./cv-section-title"
import CvCustomLi from "./cv-custom-li"

const CvOtherSkills = () => (
	<>
		<CvSectionTitle>Other Skills</CvSectionTitle>
		<ul className="list-unstyled">
			<CvCustomLi title="Microsoft Office">
				<p>Word (9 years), Excel (5 years) and PowerPoint (2 years).</p>
			</CvCustomLi>
			<CvCustomLi title="Adobe">
				Adobe Illustrator (trained in 2020), Adobe Photoshop (trained in
				2020) and Adobe XD (trained in 2020).
			</CvCustomLi>
		</ul>
	</>
)

export default CvOtherSkills
