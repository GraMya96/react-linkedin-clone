/* Styled Components: */
import { Section } from '../../global/section/section';
import { Content } from '../../global/content/content';
import styled from 'styled-components';

/* Other Components: */

/* Hooks: */

/* Actions: */

/* Images: */

/* Other .js Files: */


const HiringBanner = () => {
    return (
        <HiringBannerSection
            paddingTop="50px">
            <HiringBannerContent
                alignItems="center">
                <h5 className="text-underline">Hiring in a hurry? - </h5>
                <p className="text-underline">Find talented pros in record time with Upwork and keep business moving.</p>
            </HiringBannerContent>
        </HiringBannerSection>
    )
}

const HiringBannerSection = styled(Section)`

    & h5 {
        color: #0a66c2;
        font-size: .95rem;
        font-weight: 700;
    }
    & p {
        font-size:.95rem;
        color: #434649;
        font-weight: 700;
        margin-left: 5px;

        @media only screen and (max-width: 768px) {
            margin-left: 0;
        }
    }
`
const HiringBannerContent = styled(Content)`

    @media only screen and (max-width: 768px) {
        flex-direction: column;
        align-items: center;
        text-align: center;
    }
`

export default HiringBanner;