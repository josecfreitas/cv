const name = 'José Carlos\' CV'
const shortName = 'CV'
const description = 'José Carlos de Freitas\' Curriculum Vitae'

const primaryColor = '#4A4A49'
const bgColor = '#4A4A49'

module.exports = {
	siteMetadata: {
		title: name,
		description: description,
		author: `José Carlos de Freitas`,
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
		{
			resolve: "gatsby-plugin-react-svg",
			options: {
				rule: {
					include: /assets/
				}
			}
		},
		{
			resolve: `gatsby-plugin-google-fonts`,
			options: {
				fonts: [
					`Montserrat\:400`,
				],
				display: 'swap'
			}
		},
	],
}
