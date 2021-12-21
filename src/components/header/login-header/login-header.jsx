import logo from '../../../../src/assets/login-logo.svg';
import { NavLink } from "react-router-dom";
import styled from 'styled-components';

const LoginHeader = () => {

    return (
        <Nav>
            <NavLink to="/">
                <img src={ logo } alt="Linkedin Clone Logo" />
            </NavLink>
        </Nav>
    )
}


// Styled Layout Components:
const Nav = styled.nav`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px 0;
    width: 100%;

    & > a > img {
        width: 150px;

        @media only screen and (max-wodth: 768px) {
            padding: 0 5px;
        }
    }
`;



export default LoginHeader;