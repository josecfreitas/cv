import React from "react"
import CvSectionTitle from "./cv-section-title"
import CvCustomLi from "./cv-custom-li"
import CvLinkNewTab from "./cv-link-new-tab"

const CvLiWithLink = ({ children, title, link, startEnd }) => (
	<CvCustomLi
		title={title}
		subtitle={link ? <CvLinkNewTab link={link} /> : ""}
		startEnd={startEnd}
	>
		{children}
	</CvCustomLi>
)

const CvProjects = () => (
	<>
		<CvSectionTitle>Projects</CvSectionTitle>
		<ul className="list-unstyled">
			<CvLiWithLink title="USA's utility automation" startEnd="2021~*">
				Developing and maintaining a large utility automation
				application. Working with Scrum, Java, Spring Boot, SQL Server,
				HTML, CSS, JavaScript, jQuery, Jenkins, Unit Testing (JUnit) and
				SVN.
			</CvLiWithLink>
			<CvLiWithLink
				title="Fazenda Aberta"
				link="https://fazendaaberta.com.br"
				startEnd="2019~*"
			>
				Concepting, developing and maintaining one of the largest online
				farm catalog in Brazil, which receives over a thousand daily
				accesses. Worked with Java8, Spring Boot, Hibernate/JPA,
				PostgreSQL, Thymeleaf, HTML, CSS, JavaScript, jQuery, Bootstrap
				and Google Maps.
			</CvLiWithLink>
			<CvLiWithLink
				title="Mais Fácil Contabilidade"
				link="http://maisfacilcontabil.com.br"
				startEnd="2020"
			>
				Concepting, developing and maintaining an online brokerage
				platform. Worked with Java11, Spring Boot, Hibernate/JPA,
				PostgreSQL, Angular10, HTML, CSS, TypeScript and PO UI.
			</CvLiWithLink>
			<CvLiWithLink title="WeHoo" startEnd="2020">
				Concepting, developing and maintaining a platform for product
				indication and commissioning. Worked with Java11, Spring Boot,
				Hibernate/JPA, PostgreSQL, Angular10, HTML, CSS, TypeScript, PO
				UI, React, Bootstrap and NextJS.
			</CvLiWithLink>
			<CvLiWithLink
				title="Linharia"
				link="http://linharia.com.br"
				startEnd="2020"
			>
				Concepting, developing and maintaining a women's fashion
				ecommerce. Worked with Wordpress, WooCommerce, PHP, MySQL, HTML,
				CSS and JavaScript.
			</CvLiWithLink>
			<CvLiWithLink
				title="Santos & Pinheiro"
				link="https://santosepinheiro.com.br"
				startEnd="2020"
			>
				Concepting and developing a landing page for a law firm. Worked
				with HTML, CSS, JavaScript, React and Gatsby.
			</CvLiWithLink>
			<CvLiWithLink
				title="AllLux"
				link="http://alllux.ind.br"
				startEnd="2020"
			>
				Concepting and developing a landing page for a light company.
				Worked with HTML, CSS, JavaScript, React and Gatsby.
			</CvLiWithLink>
			<CvLiWithLink
				title="TecSolar"
				link="https://tecsolar.eng.br"
				startEnd="2020"
			>
				Concepting and developing a landing page for a solar energy
				company. Worked with HTML, CSS, JavaScript, React and Gatsby.
			</CvLiWithLink>
			<CvLiWithLink
				title="3R Eventos"
				link="https://eventos3r.com.br/"
				startEnd="2020"
			>
				Concepting and developing a landing page for a events (parties)
				company. Worked with HTML, CSS, JavaScript, React and Gatsby.
			</CvLiWithLink>
			<CvLiWithLink
				title="3r Agência"
				link="https://agencia3r.com.br"
				startEnd="2020"
			>
				Concepting and developing a landing page for a digital
				transformation agency. Worked with HTML, CSS, JavaScript, React
				and Gatsby.
			</CvLiWithLink>
			<CvLiWithLink title="BrasilHig" startEnd="2020">
				Concepting and developing a landing page for a car wash company.
				Worked with HTML, CSS, JavaScript, React and Gatsby.
			</CvLiWithLink>
			<CvLiWithLink
				title="WEPS"
				link="https://weps.com.br"
				startEnd="2020"
			>
				Concepting, developing and maintaining an app for managing
				digital people documents. Worked with Java8, Spring Boot,
				Hibernate/JPA, PostgreSQL, Angular8, HTML, CSS, TypeScript,
				Angular Material and Flutter.
			</CvLiWithLink>
			<CvLiWithLink title="PeneirasFC" startEnd="2019">
				Concepting, developing and maintaining a platform for online
				selection process of soccer players for the{" "}
				<CvLinkNewTab link="https://www.corinthians.com.br">
					FC Corinthians Paulista
				</CvLinkNewTab>
				. Worked with Java8, Spring Boot, Hibernate/JPA, PostgreSQL,
				Angular8, HTML, CSS, TypeScript and Angular Material.
			</CvLiWithLink>
			<CvLiWithLink
				title="MeuGuiaCarro"
				link="https://meuguiacarro.app"
				startEnd="2019"
			>
				Concepting, developing and maintaining an app to request winch
				and other services for the car. Worked with Java8, Spring Boot,
				Hibernate/JPA, PostgreSQL, Angular8, HTML, CSS, TypeScript,
				Angular Material, Ionic and Real-time geographic location.
			</CvLiWithLink>
			<CvLiWithLink
				title="SelectGás"
				link="https://selectgas.com.br"
				startEnd="2019"
			>
				Concepting, developing and maintaining an app to order cooking
				gas. Worked with Java8, Spring Boot, Hibernate/JPA, PostgreSQL,
				Angular8, HTML, CSS, TypeScript, Angular Material, Ionic,
				Real-time geographic location and{" "}
				<CvLinkNewTab link="https://www.cielo.com.br">
					Cielo
				</CvLinkNewTab>{" "}
				integration.
			</CvLiWithLink>
			<CvLiWithLink
				title="Multiple Store Management - AC Soluções"
				link="https://acsolucoes.com.br"
				startEnd="2019"
			>
				Concepting, developing and maintaining a platform for managing
				multiple cooking gas stores. Worked with Java8, Spring Boot,
				Hibernate/JPA, PostgreSQL, Angular7, HTML, CSS, TypeScript and
				Angular Material.
			</CvLiWithLink>
			<CvLiWithLink title="Alugadinha" startEnd="2018">
				Concepting, developing and maintaining an online house and
				apartments catalog. Worked with Java8, Spring Boot,
				Hibernate/JPA, PostgreSQL, Thymeleaf, HTML, CSS, JavaScript,
				jQuery and Bootstrap.
			</CvLiWithLink>
			<CvLiWithLink title="EasyProtect" startEnd="2018">
				Concepting, developing and maintaining a platform and app for
				low cost car insurance management. Worked with Java8, Spring
				Boot, Hibernate/JPA, PostgreSQL, Thymeleaf, HTML, CSS,
				JavaScript, jQuery, Bootstrap and Ionic.
			</CvLiWithLink>
			<CvLiWithLink title="FlixImóveis" startEnd="2018">
				Concepting, developing and maintaining an online house and
				apartments catalog. Worked with Java8, Spring Boot,
				Hibernate/JPA, PostgreSQL, Thymeleaf, HTML, CSS, JavaScript,
				jQuery and Bootstrap.
			</CvLiWithLink>
			<CvLiWithLink title="Gamelive" startEnd="2018">
				Concepting, developing and maintaining a platform for betting on
				soccer matches and on single lowest betting games. Worked with
				Java8, Spring Boot, Hibernate/JPA, PostgreSQL, Thymeleaf, HTML,
				CSS, JavaScript, jQuery and Bootstrap.
			</CvLiWithLink>
			<CvLiWithLink
				title="ÁreaBim"
				link="https://areabim.com.br/"
				startEnd="2017"
			>
				Concepting, developing and maintaining a building management
				platform that shows information about the progress of works to
				customers. Worked with Java8, Spring Boot, Hibernate/JPA,
				PostgreSQL, Thymeleaf, HTML, CSS, JavaScript, jQuery and
				Bootstrap.
			</CvLiWithLink>
			<CvLiWithLink
				title="Itallian Rio Preto"
				link="https://itallian.riopreto.br/"
				startEnd="2016~2017"
			>
				Concepting, developing and maintaining a platform for managing a
				semi-jewelry company. Worked with Java8, Spring Boot,
				Hibernate/JPA, PostgreSQL, Thymeleaf, HTML, CSS, JavaScript,
				jQuery, MaterializeCSS,{" "}
				<CvLinkNewTab link="https://pagseguro.uol.com.br/">
					PagSeguro
				</CvLinkNewTab>{" "}
				integration and NFe integration.
			</CvLiWithLink>
			<CvLiWithLink
				title="RD SemiJoias"
				link="https://rdsemijoias.com.br/"
				startEnd="2017"
			>
				Concepting, developing and maintaining a platform for managing a
				semi-jewelry company. Worked with Java8, Spring MVC,
				Hibernate/JPA, PostgreSQL, JSP, HTML, CSS, JavaScript, jQuery
				and Bootstrap.
			</CvLiWithLink>
			<CvLiWithLink
				title="SRU - Sistema do Restaurante Universitário"
				link="https://sru.ibilce.unesp.br/"
				startEnd="2016"
			>
				Concepting, developing and maintaining a platform for managing
				the Unesp's University Restaurant and for booking and selling
				meal tickets. Worked with Java8, Spring MVC, Hibernate/JPA,
				PostgreSQL, JSP, HTML, CSS, JavaScript, jQuery and Bootstrap.
			</CvLiWithLink>
			<CvLiWithLink
				title="PLATCOL"
				link="https://www.institucional.grupogbd.com/dicionario"
				startEnd="2016"
			>
				Concepting, developing and maintaining an online platform of
				collocations dictionary. Worked with Java7, Spring MVC, Spring
				Internationalization, Hibernate/JPA, PostgreSQL, JSP, HTML, CSS,
				JavaScript, jQuery and Bootstrap.
			</CvLiWithLink>
			<CvLiWithLink
				title="Portal GBD"
				link="https://www.grupogbd.com"
				startEnd="2016"
			>
				Concepting, developing and maintaining a platform to show
				information about Database Group. Worked with Java7, Spring MVC,
				Hibernate/JPA, PostgreSQL, JSP, HTML, CSS, JavaScript, jQuery
				and Bootstrap.
			</CvLiWithLink>
			<CvLiWithLink
				title="Portal GBD Lattes"
				link="https://institucional.grupogbd.com/PortalGBD-Lattes"
				startEnd="2015"
			>
				Concepting, developing and maintaining a platform to show
				information of Unesp's scientific production, which are
				collected from the{" "}
				<CvLinkNewTab link="https://lattes.cnpq.br">
					Lattes Platform
				</CvLinkNewTab>
				with some enhancements when compared to Portal PROPe. Worked
				with Java7, Spring MVC, Hibernate/JPA, PostgreSQL, JSP, HTML,
				CSS, JavaScript, jQuery and Bootstrap.
			</CvLiWithLink>
			<CvLiWithLink
				title="Portal PROPe"
				link="http://www.gbd.sasd.ibilce.unesp.br/PortalPROPe/"
				startEnd="2015~2017"
			>
				Developing and maintaining a platform to show information of
				Unesp's scientific production, which are collected from the{" "}
				<CvLinkNewTab link="https://lattes.cnpq.br">
					Lattes Platform
				</CvLinkNewTab>
				. Worked with Java7, Spring MVC, Hibernate/JPA, PostgreSQL, JSP,
				HTML, CSS, JavaScript, jQuery and Bootstrap.
			</CvLiWithLink>
			<CvLiWithLink
				title="Online English Collocations Workbook"
				link="https://www.institucional.grupogbd.com/workbook"
				startEnd="2015"
			>
				Developing and maintaining a platform to learn English
				collocations by playing games. Worked with Java7, Spring MVC,
				Hibernate/JPA, PostgreSQL, JSP, HTML, CSS, JavaScript, jQuery
				and Bootstrap.
			</CvLiWithLink>
			<CvLiWithLink
				title="Proceedings"
				link="https://unesp.br/anaiscongressoeducadores"
				startEnd="2014"
			>
				Concepting, developing a website for presenting the proceedings
				of the congress "III Congresso Nacional de Formação de
				Professores (CNFP) e XIII Congresso Estadual Paulista sobre
				Formação de Educadores (CEPFE)". Worked with Java7, Spring MVC,
				Hibernate/JPA, PostgreSQL, JSP, HTML, CSS, JavaScript, jQuery
				and Bootstrap.
			</CvLiWithLink>
			<CvLiWithLink
				title="GECi"
				link="https://www.geci.ibilce.unesp.br"
				startEnd="2014"
			>
				Developing and maintaining a Scientific Events Management
				System. Worked with Java7, PostgreSQL, HTML, CSS, JavaScript and
				jQuery.
			</CvLiWithLink>
			<CvLiWithLink title="SoftGym" startEnd="2012">
				Gym management software developed as work of completion of the
				technical computer course. Worked with Visual Basic and MySql.
			</CvLiWithLink>
		</ul>
	</>
)

export default CvProjects
