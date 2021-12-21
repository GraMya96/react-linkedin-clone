/* Dependencies: */
import styled from 'styled-components';
import { Section } from '../../global/section/section';

/* Images: */
import hero_image from '../../assets/login-hero.svg';


const Hero = () => {
    return (
        <HeroSection marginTop="30px"
            background="transparent">
            <h1>Welcome to your professional community</h1>

            <img src={ hero_image } alt="Welcome to Your Professional Community" />
        </HeroSection>
    )
}

const HeroSection = styled( Section )`

    & h1 {
        width: 55%;
        font-size: 4rem;
        color: ${ ({ theme }) => theme.colors.primary };
        font-weight: 400;
        line-height: 70px;
        margin-bottom: 2vw;

        @media only screen and (max-width: 920px) {
            width: 70%;
        }
        @media only screen and (max-width: 768px) {
            text-align: center;
            font-size: 1.6rem;
            width: 100%;
            line-height: 2;
        }
        @media only screen and (max-width: 500px) {
            font-size: 1.45rem;
        }
    }
    & img {
        position: absolute;
        z-index: 1;
        width: 600px;
        top: 8vw;
        right: 3vw;

        @media only screen and (max-width: 1200px) {
            z-index: -1;
        }
        @media only screen and (max-width: 768px) {
            width: initial;
            position: initial;
            display: block;
            width: 380px;
            margin: 0 auto;
            margin-top: 25px;
        }
        @media only screen and (max-width: 430px) {
            width: 100%;
        }
        @media only screen and (min-width: 1400px) {
            width: 700px;
            right: 0;
        }
    }

`

export default Hero;