/* Dependencies: */
import styled from "styled-components";

/* Styled Components: */
import { Section } from "../../global/section/section";

/* Other Components: */

/* Hooks: */
import { useDispatch } from 'react-redux';

/* Actions: */
import { setUser } from '../../redux/user/user.actions';

/* Images: */
import google_logo from '../../assets/google.svg';
import { signInWithGoogle } from "../../redux/user/user.utils";

/* Other .js Files: */


const LoginForm = () => {

    const dispatch = useDispatch();

    const handleSignIn = e => {
        e.preventDefault();

        dispatch( setUser( signInWithGoogle() ) );
    }

    return (
        <>
            <Section
                background="transparent"
                marginTop="15px">
                <Form>
                    <GoogleSignIn onClick={ handleSignIn }>
                        <img src={ google_logo } alt="Sign-in with Google" />
                        <span>Sign in with Google</span>
                    </GoogleSignIn>
                </Form>
            </Section>
        </>
    )
}

const Form = styled.form`
    display: flex;
    justify-content: flex-start;

    @media only screen and (max-width: 768px) {
        justify-content: center;
    }
`
const GoogleSignIn = styled.button`
    display: flex;
    align-items: center;
    background-color: #fff;
    color: rgba(0,0,0,.6);
    padding: 12px 120px;
    font-size: 1.3rem;
    justify-content: center;
    transition: ${ ({ theme }) => theme.transitions.primary };
    border-radius: 28px;
    box-shadow: inset 0 0 0 1px rgb(0 0 0 / 60%), inset 0 0 0 2px rgb(0 0 0 / 0%) inset 0 0 0 1px rgb(0 0 0 / 0%);

    &:hover {
        background-color: rgba(207, 207, 207, .25);
        color: rgba(0,0,0,.75);
    }

    @media only screen and (max-width: 768px) {
        font-size: 1.15rem;
        padding: 10px 120px;
    }
    @media only screen and (max-width: 567px) {
        font-size: 1rem;
        width: 100%;
    }
    @media only screen and (max-width: 450px) {
        width: 100%;
        padding: 10px 50px;
        padding-bottom: 8px;
    }

    & > img {
        margin-right: 5px;
    }
    & > span {
        display: block;
    }
`


export default LoginForm;