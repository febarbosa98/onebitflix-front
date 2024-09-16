/* eslint-disable @typescript-eslint/no-unused-vars */
import Head from "next/head";
import styles from "../styles/homeNoAuth.module.scss" 
import HeaderNoAuth from "@/src/components/homeNoAuth/headerNoAuth";

const HomeNotAuth = function () {
  return (
		<>
			<Head>
				<title>Onebitflix</title>
				<link rel="shortcut icon" href="/favicon.svg" type="image/x-icon" />
				<meta property="og: title" content="Onebitflix" key='title'/>
				<meta name="description" content="tenha acesso aos melhores conteudos de programação simples e facil"/>
			</Head>
			<main>
				<HeaderNoAuth/>
			</main>
		</>
  )
};

export default HomeNotAuth;