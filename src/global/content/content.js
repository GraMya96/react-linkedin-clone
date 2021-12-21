import styled from "styled-components";

export const Content = styled.div`
    width: 100%;
    padding: ${ ({ padding }) => padding && padding !== ''
    ? `${ padding }`
    : 0};
    display: flex;
    flex-wrap: wrap;
    flex-direction: ${ ({ flexDirection }) => flexDirection && flexDirection === 'column'
    ? `${ flexDirection }`
    : 'row'};
    justify-content: ${ ({ justifyContent }) => justifyContent && justifyContent !== ''
    ? `${ justifyContent }`
    : 'flex-start'};
    align-items: ${ ({ alignItems }) => alignItems && alignItems !== ''
    ? `${ alignItems }`
    : 'flex-start'};
`

