import Head from "next/head";
import styles from '../styles/profile.module.scss';
import UserForm from "@/src/components/profile/user";
import HeaderAuth from "@/src/components/common/headerAuth";
import { Button, Col, Container, Row } from "reactstrap";
import Footer from "@/src/components/common/footer";
import { useState } from "react";
import PasswordForm from "@/src/components/profile/password";

const UserInfo = function () {
    const [form, setForm] = useState("userForm")
    

    return(
        <>

            <Head>
                <title>Onebitflix - Meus dados</title>
                <link rel="shortcut icon" href="/favicon.svg" type="image/x-icon" />
            </Head>
            <main>
                <div className={styles.header}>
                    <HeaderAuth/>
                </div>
                <Container className="py-5">
                    <p className={styles.title}>MINHA CONTA</p>
                    <Row className="pt-3 pb-5">
                        <Col md={4} className={styles.btnColumn}>

                            <Button className={styles.renderForm}
                             onClick={()=>{setForm("userForm")}}
                             style={{color: form === "userForm" ? "#ff0044" : "white"}}
                             >DADOS PESSOAIS</Button>

                            <Button className={styles.renderForm}  
                            onClick={()=>{setForm("passwordForm")}}
                            style={{color: form === "passwordForm" ? "#ff0044" : "white"}}
                            >SENHA</Button>
                        </Col>
                        <Col md>
                        {form === "userForm" ? <UserForm/> : <PasswordForm/>}
                        </Col>
                    </Row>
                </Container>
                <div className={styles.footer}>
                    <Footer/>
                </div>
            </main>
        </>
    )
}

export default UserInfo