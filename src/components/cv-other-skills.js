import React from "react"
import CvSectionTitle from "./cv-section-title"
import CvCustomLi from "./cv-custom-li"

const CvOtherSkills = () => (
	<>
		<CvSectionTitle>Other Skills</CvSectionTitle>
		<ul className="list-unstyled">
			<CvCustomLi
				title="Microsoft Office"
				subtitle="Excel, Word and PowerPoint"
			>
				<p>teste</p>
			</CvCustomLi>
			<CvCustomLi
				title="Adobe"
				subtitle="Adobe XD, Photoshop and Illustrator"
			/>
		</ul>
	</>
)

export default CvOtherSkills
