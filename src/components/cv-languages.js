import React from "react"
import CvSectionTitle from "./cv-section-title"
import CvCustomLi from "./cv-custom-li"

const CvLanguages = () => (
	<>
		<CvSectionTitle>Languages</CvSectionTitle>
		<ul className="list-unstyled">
			<CvCustomLi title="Portuguese" subtitle="Native" />
			<CvCustomLi title="English" subtitle="Advanced (B1~B2)" />
		</ul>
	</>
)

export default CvLanguages
