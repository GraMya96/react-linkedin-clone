/* Other Components: */

import LoginHeader from '../components/header/login-header/login-header';
import Hero from '../components/hero/hero';
import LoginForm from '../components/login-form/login-form';

/* Styled Components: */
import { Container } from '../global/containers/containers';

/* Hooks: */

/* Actions: */

/* Images: */

/* Other .js Files: */

const LoginPage = () => {

    return (
        <>
            <Container>

                <LoginHeader />
                <Hero />
                <LoginForm />

            </Container>
        </>
    )
}

export default LoginPage;


