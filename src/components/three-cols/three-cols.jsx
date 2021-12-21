/* Dependencies: */

import styled from "styled-components";
import { Content } from "../../global/content/content";
import { Section } from "../../global/section/section";
import AddPic from "../add-pic/add-pic";
import AddToFeed from '../add-to-feed/add-to-feed';
import Main from "../main/main";


/* Styled Components: */

/* Other Components:

/* Hooks: */

/* Actions: */

/* Images: */

/* Other .js Files: */


const ThreeCols = () => (
    <Section>
        <ThreeColsContent>
            <div className="first-col add-image">
                <AddPic />
            </div>
            <div className="second-col main-post">
                <Main />
            </div>
            <div className="third-col follow-us">
                <AddToFeed />
            </div>
        </ThreeColsContent>
    </Section>
)

const ThreeColsContent = styled(Content)`
    display: grid;
    grid-template-areas: "left center right";
    grid-template-columns: minmax(0, 5fr) minmax(0, 12fr) minmax(300px, 7fr);
    grid-gap: 25px;

    @media only screen and (max-width: 991px) {
        grid-template-areas:    "add-image    main-post"
                                "follow-us main-post";
        grid-gap: 18px;
        grid-template-columns: minmax(0, .45fr) 1fr;
        grid-template-rows: auto 100vh;
    }
    @media only screen and (max-width: 768px) {
        display: flex;
        flex-direction: column;
        align-items: center;

        & > .first-col.add-image, .second-col.main-post, .third-col.follow-us {
            width: 100%;
            margin-bottom: 30px;
        }
    }

    .first-col.add-image {
        @media only screen and (max-width: 991px) {
            grid-area: add-image;
            align-content: space-between;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
        }

    }
    .second-col.main-post {
        @media only screen and (max-width: 991px) {
            grid-area: main-post;
            align-content: space-between;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
        }
    }
    .third-col.follow-us {
        @media only screen and (max-width: 991px) {
            grid-area: follow-us;
        }

        @media only screen and (max-width: 768px) {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding-bottom: 60px;
        }
        @media only screen and (max-width: 595px) {
            flex-direction: column;
            align-items: center;
            padding-bottom: 100px;
        }

        & > div {
            @media only screen and (max-width: 768px) {
                flex: 0 0 49%;
            }
        }
    }
`

export default ThreeCols;