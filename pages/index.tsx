import Head from "next/head";
import styles from "../styles/homeNoAuth.module.scss" 
import HeaderNoAuth from "@/src/components/homeNoAuth/headerNoAuth";
import PresentationSection from "@/src/components/homeNoAuth/presentationSection";
import CardsSection from "@/src/components/homeNoAuth/cardsSection";

const HomeNoAuth = function () {
  return (
		<>
			<Head>
				<title>Onebitflix</title>
				<link rel="shortcut icon" href="/favicon.svg" type="image/x-icon" />
				<meta property="og: title" content="Onebitflix" key='title'/>
				<meta name="description" content="tenha acesso aos melhores conteudos de programação simples e facil"/>
			</Head>
			<main>
				<div className={styles.sectionBackground}>
				<HeaderNoAuth/>
				<PresentationSection/>
				</div>
				<CardsSection/>
			</main>
		</>
  )
};

export default HomeNoAuth;