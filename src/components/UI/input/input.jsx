import styled from "styled-components";

const Input = ({ key, elementType, hasLabel, labelText, options, isValid, errorMessage, ...otherProps }) => {
    let inputElement = null;

    if ( elementType === "input" ) {
        inputElement = (
            <InputElement
                { ...otherProps }
                className={ !isValid && 'invalid' }
            />
        );
    }
    if ( elementType === "select" ) {
        inputElement = (
            <Select
                { ...otherProps }
                id = { key }
                className={ !isValid && 'invalid' }>

                    { options && options.map( singleOption => {
                        return <option
                                    key = { singleOption.value }
                                    value = { singleOption.value }>
                                    { singleOption.name }
                                </option>
                    } ) }
            </Select>
        );
    }

    return (
        <>
            { hasLabel
                ?   <WithLabel>
                        <label htmlFor={ key }>{ labelText }</label>
                        { inputElement }
                        { !isValid && errorMessage ? <p className="error-message">{ errorMessage }</p> : null }
                    </WithLabel>

                :  (
                    <>
                        { inputElement }
                        { !isValid && errorMessage ? <p className="error-message">{ errorMessage }</p> : null }
                    </>
                )
            }
        </>
    )
}

const InputElement = styled.input`
    cursor: pointer;

    &.invalid {
        border: 2px solid rgba(255, 0, 0, 0.9) !important;
    }
`
const Select = styled.select`
    cursor: pointer;

    &.invalid {
        border: 2px solid rgba(255, 0, 0, 0.9) !important;
    }
`
const WithLabel = styled.div`
    display: flex;
    align-items: center;
    position: relative;

    &:not(:last-of-type) {
        margin-bottom: 25px;
    }

    & label {
        margin-right: auto;
    }

    & .error-message {
        color: red;
        font-size: .75rem;
    }
`

export default Input;