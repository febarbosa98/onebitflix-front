/* eslint-disable @next/next/no-img-element */
import { Button, Container } from 'reactstrap';
import styles from './style.module.scss'
import Link from 'next/link';

const HeaderNoAuth = function () {
    return <>
        <div className={styles.ctaSection}>
            <img src="/homeNoAuth/logoCta.png" alt="logoCta" className={styles.imgCta} />
            <p>Se cadastre para ter acesso aos cursos</p>
            <img src="/homeNoAuth/logoCta.png" alt="logoCta" className={styles.imgCta} />
        </div>
        <Container className={styles.nav}>
            <img src="/logoOnebitflix.svg" alt="logoonebitflix" className={styles.imgLogoNav}/>
            <div>
                <Link href="/login">
                <Button outline  className={styles.navBtn}>Entrar</Button>
                </Link>
                <Link href="/register">
                <Button outline  className={styles.navBtn}>Quero fazer parte</Button>
                </Link>
            </div>
        </Container>
    </>
};

export default HeaderNoAuth