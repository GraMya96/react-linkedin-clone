import styled from "styled-components"

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    position: relative;
    margin: 0 auto;
    width: 100%;
    padding: ${ ({ theme }) => theme.padding.secondary };
    max-width: ${ ({ theme }) => theme.maxWidth.primary };
`

export const ContainerFluid = styled.div`
    display: flex;
    flex-direction: column;
    background: ${ ({ background }) => background && background !== ''
        ? background
        : '#fff'
    };
    position: relative;
    width: 100%;
`