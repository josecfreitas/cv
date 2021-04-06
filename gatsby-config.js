const name = 'Nome do site'
const shortName = 'Site'
const description = 'Apenas mais uma linda Landing Page da 3r Agência'

const primaryColor = '#990000'
const bgColor = '#ffffff'

module.exports = {
	siteMetadata: {
		title: name,
		description: description,
		author: `3r Agência`,
	},
	plugins: [
		`gatsby-plugin-react-helmet`,
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `images`,
				path: `${__dirname}/src/assets/images`,
			},
		},
		`gatsby-transformer-sharp`,
		`gatsby-plugin-svg-sprite`,
		`gatsby-plugin-styled-components`,
		`gatsby-plugin-sharp`,
		`gatsby-plugin-sass`,
		{
			resolve: `gatsby-plugin-manifest`,
			options: {
				name: name,
				short_name: shortName,
				start_url: `/`,
				background_color: bgColor,
				theme_color: primaryColor,
				display: `standalone`,
				icon: `src/assets/favicon.svg`,
				icon_options: {
					purpose: `maskable`,
				},
			},
		},
		"gatsby-plugin-offline",
	],
}
