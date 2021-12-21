/* Other Components: */
import HomepageHeader from '../components/header/homepage-header/homepage-header';
import HiringBanner from '../components/hiring-banner/hiring-banner';
import ThreeCols from '../components/three-cols/three-cols';

/* Styled Components: */
import { Container, ContainerFluid } from '../global/containers/containers';

/* Hooks: */

/* Actions: */

/* Images: */

/* Other .js Files: */

const HomePage = () => {

    return (
        <>
            <ContainerFluid
                background='#F3F2EF'>

                <HomepageHeader />

                <Container>
                    <HiringBanner />

                    <ThreeCols />
                </Container>

            </ContainerFluid>
        </>
    )
}

export default HomePage;


