import React from "react"
import CvSectionTitle from "./cv-section-title"
import CvLiWithSvg from "./cv-li-with-svg"

const CvLanguages = () => (
	<>
		<CvSectionTitle>Languages</CvSectionTitle>
		<ul className="list-unstyled">
			<CvLiWithSvg subtitle="Native">
				Portuguese
			</CvLiWithSvg>
			<CvLiWithSvg subtitle="Advanced">
				English
			</CvLiWithSvg>
		</ul>
	</>
)

export default CvLanguages
