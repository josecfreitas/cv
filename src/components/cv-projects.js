import React from "react"
import CvSectionTitle from "./cv-section-title"
import CvCustomLi from "./cv-custom-li"

const CvProjects = () => (
	<>
		<CvSectionTitle>Projects</CvSectionTitle>
		<ul className="list-unstyled">
			<CvCustomLi title="Mais Fácil Contabilidade">-</CvCustomLi>
			<CvCustomLi title="Fazenda Aberta">-</CvCustomLi>
			<CvCustomLi title="WeHoo">-</CvCustomLi>
			<CvCustomLi title="WEPS">-</CvCustomLi>
			<CvCustomLi title="SelectGás">-</CvCustomLi>
			<CvCustomLi title="PeneirasFC">-</CvCustomLi>
			<CvCustomLi title="MeuGuiaCarro">-</CvCustomLi>
			<CvCustomLi title="Gerenciador de Lojas - AC Soluções">
				-
			</CvCustomLi>
			<CvCustomLi title="Alugadinha">-</CvCustomLi>
			<CvCustomLi title="EasyProtect">-</CvCustomLi>
			<CvCustomLi title="FlixImóveis">-</CvCustomLi>
			<CvCustomLi title="Gamelive">-</CvCustomLi>
			<CvCustomLi title="ÁreaBim">-</CvCustomLi>
			<CvCustomLi title="Itallian Rio Preto">-</CvCustomLi>
			<CvCustomLi title="RD SemiJoias">-</CvCustomLi>
			<CvCustomLi title="TecSolar">-</CvCustomLi>
			<CvCustomLi title="SRU - Sistema do Restaurante Universitário">
				-
			</CvCustomLi>
			<CvCustomLi title="Dicionário de Colocações Português-Inglês">
				-
			</CvCustomLi>
			<CvCustomLi title="Portal GBD">-</CvCustomLi>
			<CvCustomLi title="Portal GBD Lattes">-</CvCustomLi>
			<CvCustomLi title="Portal PROPe">-</CvCustomLi>
			<CvCustomLi title="Online English Collocations Workbook">
				-
			</CvCustomLi>
			<CvCustomLi
				title="GECi"
				subtitle={
					<a
						href="https://www.geci.ibilce.unesp.br/"
						target="_blank"
						rel="noreferrer"
					>
						https://www.geci.ibilce.unesp.br/
					</a>
				}
			>
				-
			</CvCustomLi>
			<CvCustomLi
				title="Proceedings"
				subtitle={
					<a
						href="https://unesp.br/anaiscongressoeducadores"
						target="_blank"
						rel="noreferrer"
					>
						https://unesp.br/anaiscongressoeducadores
					</a>
				}
			>
				-
			</CvCustomLi>
			<CvCustomLi title="SoftGym">-</CvCustomLi>
		</ul>
	</>
)

export default CvProjects
