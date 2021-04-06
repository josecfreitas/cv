import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"

const LogoImageHeader = ({ siteTitle }) => {
	const data = useStaticQuery(graphql`
		query {
			smImage: file(relativePath: { eq: "logo.png" }) {
				childImageSharp {
					fixed(width: 50, height: 50) {
						...GatsbyImageSharpFixed_tracedSVG
					}
				}
			}
			mdImage: file(relativePath: { eq: "logo.png" }) {
				childImageSharp {
					fixed(width: 100, height: 100) {
						...GatsbyImageSharpFixed_tracedSVG
					}
				}
			}
		}
	`)

	const sources = [
		data.smImage.childImageSharp.fixed,
		{
			...data.mdImage.childImageSharp.fixed,
			media: `(min-width: 768px)`,
		},
	]

	return <Img fixed={sources} alt={`Logo:  ${siteTitle}`} />
}

export default LogoImageHeader
