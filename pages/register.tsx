/* eslint-disable @next/next/no-sync-scripts */
/* eslint-disable @typescript-eslint/no-unused-vars */
import HeaderGeneric from "@/src/components/common/headerGeneric";
import styles from "../styles/registerLogin.module.scss";
import Head from "next/head";
import { Form, FormGroup, Label, Container, Button, Input } from "reactstrap";
import Footer from "@/src/components/common/footer";

const Register = function () {
  return (
    <>
      <Head>
        <title>Onebitflix - Registro</title>
        <link rel="shortcut icon" href="/favicon.svg" type="image/x-icon" />
        <script src="https://jsuites.net/v4/jsuites.js"></script>
      </Head>
      <main className={styles.main}>
        <HeaderGeneric
          logoUrl="/"
          btnUrl="/login"
          btnContent="Quero fazer login"
        />
        <Container className="py-5">
          <p className={styles.formTitle}>Bem-Vindo(a) ao OneBitFlix</p>
          <Form className={styles.form}>
            <p className="text-center">
              <strong>Faça a sua conta</strong>
            </p>
          
          <FormGroup>
            <Label form="firstName" className={styles.Label}>
              NOME
            </Label>
            <Input id="firstName" name="firstName" type="text" placeholder="Qual o seu nome" required maxLength={20} className={styles.inputName}/>
          </FormGroup>
          <FormGroup>
            <Label form="lastName" className={styles.Label}>
              SOBRENOME
            </Label>
            <Input id="lastName" name="lastName" type="text" placeholder="Qual o seu sobrenome" required maxLength={20} className={styles.inputName}/>
          </FormGroup>
          <FormGroup>
            <Label form="phone" className={styles.Label}>
              WHATSAPP / TELEGRAM
            </Label>
            <Input id="phone" name="phone" type="tel" placeholder="(xx) 9xxxx-xxxx" data-mask="[-]+55 (00) 00000-0000" required  className={styles.input}/>
          </FormGroup>
          <FormGroup>
            <Label form="email" className={styles.Label}>
              EMAIL
            </Label>
            <Input id="email" name="email" type="email" placeholder="Digite o seu email" required  className={styles.input}/>
          </FormGroup>
          <FormGroup>
            <Label form="birth" className={styles.Label}>
              DATA DE NASCIMENTO
            </Label>
            <Input id="birth" name="birth" type="date" min="1930-01-01" max='2022-12-31' required  className={styles.input}/>
          </FormGroup>
          <FormGroup>
            <Label form="password" className={styles.Label}>
              SENHA
            </Label>
            <Input id="password" name="password" type="password" placeholder="Digite a sua senha (min: 6 | max: 20)" required minLength={6} maxLength={20} className={styles.input}/>
          </FormGroup>
          <FormGroup>
            <Label form="password" className={styles.Label}>
              CONFIRME SUA SENHA
            </Label>
            <Input id="password" name="password" type="password" placeholder="Confirme a sua senha" required minLength={6} maxLength={20} className={styles.input}/>
          </FormGroup>
          <Button type="submit" outline className={styles.formBtn}>CADASTRAR</Button>
          </Form>
        </Container>
        <Footer/>
      </main>
    </>
  );
};

export default Register;