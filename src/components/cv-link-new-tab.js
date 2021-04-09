import React from "react"

const CvLinkNewTab = ({ link, children }) => (
	<a href={link} target="_blank" rel="noreferrer">
		{children ? children : link}
	</a>
)

export default CvLinkNewTab
