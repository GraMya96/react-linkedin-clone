import { Link } from 'react-router-dom';

const Button = ( { children, elementType, color, background, clickHandler, ...otherProps } ) => {

    const buttonStyle = {
        color: color,
        backgroundColor: background,
    }

    let htmlElement = null;

    if( elementType === 'a' ) {
        htmlElement = (
            <Link
                style = { buttonStyle }
                className = { `button ${ otherProps.otherClass ? otherProps.otherClass : '' }` }
                to = { clickHandler }>
                { children }
            </Link>
        )
    }
    else if ( elementType === 'button' )  {
        htmlElement = (
            <button
                { ...otherProps }
                style = { buttonStyle }
                className = { `button ${ otherProps.otherClass ? otherProps.otherClass : '' }` }
                onClick = { clickHandler }>
                { children }
            </button>
        )
    }

    return htmlElement;
}


export default Button;