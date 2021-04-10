const name = "José Carlos' CV"
const shortName = "JC"
const description =
	"Master’s and Bachelor's in Computer Science" +
	" with 2 international articles," +
	" Java developer, 180+ technology courses," +
	" developed 30+ tech projects."

const primaryColor = "#4A4A49"
const bgColor = "#4A4A49"

module.exports = {
	siteMetadata: {
		title: name,
		description: description,
		author: `José Carlos de Freitas`,
	},
	plugins: [
		{
			resolve: `gatsby-plugin-build-date`,
			options: {
				formatAsDateString: true,
				formatting: {
					format: "MMM DD, YYYY",
				},
			},
		},
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
			resolve: "gatsby-plugin-react-svg",
			options: {
				rule: {
					include: /assets/,
				},
			},
		},
		{
			resolve: `gatsby-plugin-google-fonts`,
			options: {
				fonts: [`Montserrat\:400,500`],
				display: "swap",
			},
		},
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
