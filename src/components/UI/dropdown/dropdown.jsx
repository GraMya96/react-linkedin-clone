/* Dependencies: */
import styled from "styled-components";

/* Styled Components: */

/* Other Components: */

/* Hooks: */

/* Actions: */

/* Images: */

/* Other .js Files: */


const Dropdown = props => {
    return (
        <DropdownContainer className="dropdown-container">
            { props.children }
        </DropdownContainer>
    )
}
const DropdownContainer = styled.div`
    position: absolute;
    text-align: center;
    width: 100%;
    display: none;
    box-shadow: 0px 4px 4px rgba(0,0,0,.2);
    z-index: 10000;
    min-height: 70px;
    border: 1px solid rgba(0,0,0,.08);
    border-radius: 5px 0 5px 5px;
    background: #fff;
    top: 97%;
    z-index: -1;
    border-top: 0;
`


export default Dropdown;