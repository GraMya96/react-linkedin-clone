import styled from "styled-components";

export const Section = styled.section`
    position: relative;
    width: 100%;
    padding: ${ ({ paddingTop }) => paddingTop && paddingTop !== ''
    ? `${ paddingTop } 0 0`
    : 'initial'};
    margin: ${ ({ theme, marginTop }) => marginTop && marginTop !== ''
    ? `${ marginTop } auto 0 auto`
    : theme.margin.primary };
    background: ${ ({ background }) => background && background !== ''
        ? background
        : '#F3F2EF'
    };
`

