import { NavLink } from "react-router-dom";
import styled from 'styled-components';
import linkedin_home_logo from '../../../../src/assets/home-logo.svg';
import search_icon from '../../../../src/assets/search-icon.svg';

/* Images & Icons: */
import nav_home from '../../../../src/assets/nav-home.svg';
import nav_network from '../../../../src/assets/nav-network.svg';
import nav_jobs from '../../../../src/assets/nav-jobs.svg';
import nav_messaging from '../../../../src/assets/nav-messaging.svg';
import nav_notifications from '../../../../src/assets/nav-notifications.svg';
import nav_user from '../../../../src/assets/user.svg';
import nav_work from '../../../../src/assets/nav-work.svg';
import down_icon from '../../../../src/assets/down-icon.svg';


import Input from "../../UI/input/input";
import Dropdown from "../../UI/dropdown/dropdown";
import { useSelector } from "react-redux";
import { signOutWithGoogle } from "../../../redux/user/user.utils";

const MENU_ITEMS = [
    {
        text: 'Home',
        id: 1,
        url: '/home',
        icon: {
            name: nav_home,
            alt: 'Go to the Homepage'
        }
    },
    {
        text: 'Network',
        id: 2,
        url: '/home',
        icon: {
            name: nav_network,
            alt: 'Go to your Network'
        }
    },
    {
        text: 'Jobs',
        id: 3,
        url: '/home',
        icon: {
            name: nav_jobs,
            alt: 'Go to Jobs'
        }
    },
    {
        text: 'Messages',
        id: 4,
        url: '/home',
        icon: {
            name: nav_messaging,
            alt: 'Check your Messages'
        }
    },
    {
        text: 'Notifications',
        id: 5,
        url: '/home',
        icon: {
            name: nav_notifications,
            alt: 'Check your Notifications'
        }
    },
    {
        text: 'Me',
        id: 6,
        url: '/home',
        icon: {
            name: nav_user,
            alt: 'Check your Profile'
        },
        dropdownText: 'Logout'
    },
    {
        text: 'Work',
        id: 7,
        url: '/home',
        icon: {
            name: nav_work,
            alt: 'Get a Job with Linkedin'
        },
        dropdownText: 'Our Jobs'
    },
];

const HomepageHeader = () => {

    const user = useSelector( state => state.user.user );

    let googleProfilePicSrc;

    if( user && user.photoURL && user.photoURL !== '' ) {
        googleProfilePicSrc = user.photoURL;
    }

    const handleDropdownClick = e => {
        e.preventDefault();

        signOutWithGoogle();
    }

    return (
        <Header>
            <HomeHeaderContent>
                <NavLink to="/home">
                    <img src={ linkedin_home_logo } alt="Linkedin Clone Home Logo" />
                </NavLink>

                <Search>
                    <Input
                        elementType="input"
                        type="text"
                        isValid
                        placeholder="Search" />
                    <img src={ search_icon } alt="Search Something You Like" />
                </Search>

                <nav>
                    <ul>
                        { MENU_ITEMS.map( menuItem => {
                            return (
                                <li key={ menuItem.id }>
                                    <NavLink to={ menuItem.url }>
                                        {<img
                                            src={ menuItem.text === 'Me'
                                                && user
                                                && user.photoURL
                                                && user.photoURL !== ''
                                                    ? googleProfilePicSrc
                                                    : menuItem.icon.name }

                                            title = { menuItem.icon.alt }
                                            className = { menuItem.text === 'Me' ? 'radius' : '' }
                                            alt={ menuItem.icon.alt } />}
                                        <div>
                                            <span>{ menuItem.text }</span>
                                            { menuItem.text === 'Me'
                                                || menuItem.text === 'Work'
                                                    ? <img src={ down_icon }  alt="Down" className="down" />
                                                    : null
                                            }
                                        </div>
                                    </NavLink>

                                    {

                                    menuItem.text === 'Me'
                                        || menuItem.text === 'Work'
                                            ? <Dropdown>
                                                <button
                                                    className="dropdown-button"
                                                    onClick={ handleDropdownClick }>
                                                    { menuItem.dropdownText }
                                                </button>
                                              </Dropdown>
                                            : null
                                    }
                                </li>
                            )
                        } ) }
                    </ul>
                </nav>
            </HomeHeaderContent>
        </Header>
    )
}

const Header = styled.header`
    background: #fff;
    border-bottom: 1px solid rgba(0,0,0,.08);
    width: 100vw;
    height: 65px;
    position: fixed;
    top: 0;
    z-index: 100;
`;

const HomeHeaderContent = styled.div`
    display: flex;
    max-width: ${ ({ theme }) => theme.maxWidth.primary };
    padding: ${ ({ theme }) => theme.padding.secondary };
    height: 100%;
    margin: 0 auto;
    align-items: center;

    & > a {
        display: flex;
        align-items: center;
        margin-right: 10px;
        height: 100%;
        padding: 12px 0;

        & > img {
            height: 100%;
        }
    }

    & nav {
        margin-left: auto;
        display: block;
        height: 100%;

        @media only screen and (max-width: 915px) {
            position: fixed;
            left: 0;
            bottom: 0;
            height: auto;
            background: #fff;
            width: 100%;
        }

        & > ul {
            display: flex;
            list-style: none;
            flex-wrap: nowrap;
            height: 100%;

            @media only screen and (max-width: 915px) {
                align-items: flex-end;
                border-top: 1.5px solid rgba(0,0,0,.6);
            }
            @media only screen and (max-width: 600px) {
                flex-wrap: wrap;
                justify-content: center;
                align-items: center;
            }

            & > li {
                position: relative;

                &:hover {

                    .dropdown-container {
                        display: flex;
                        align-items: center;
                        justify-content: center;
                    }
                }

                &:last-of-type {
                    @media only screen and (min-width: 600px) {
                        border-left: 1px solid rgba(0,0,0,.08);
                    }
                }

                & > a {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                    line-height: 1.45;
                    height: 100%;
                    min-width: 85px;
                    font-weight: 400;
                    border-bottom: 2px solid transparent;

                    @media only screen and (max-width: 915px) {
                        padding-top: 7px;
                    }

                    &:hover,
                    &:active {
                        border-bottom: 2px solid #000;

                        & span {
                            color: #000;
                        }
                    }

                    & > div {
                        display: flex;
                        align-items: center;

                        & > span {
                            color: rgba(0,0,0,.7);
                            display: flex;
                            align-items: center;
                            font-size: .85rem;
                        }
                        & > img.down {
                            margin-top: 4px;
                            margin-left: 2px;
                        }
                    }

                    & > img {
                        width: 24px;

                        &.radius {
                            border-radius: 50%;
                        }
                    }
                }

                & > .dropdown-container {
                    @media only screen and (max-width: 915px) {
                        top : -70px;
                        z-index: 2000000;
                    }
                    @media only screen and (max-width: 600px) {
                        border: 1.5px solid rgba(0,0,0,.6);
                    }
                }
            }
        }
    }

    button.dropdown-button {
        color: #fff;
        background:${ ({ theme }) => theme.colors.primary };
        font-size: .9rem;
        border-radius:${ ({ theme }) => theme.borderRadius.secondary };
        border: none;
        padding: 5px 12px;

        &:hover {
            filter: brightness(80%);
        }
    }
`

const Search = styled.div`
    display: flex;
    position: relative;
    height: 100%;
    padding: 12px 0;

    & > input {
        border: none;
        box-shadow: none;
        background: #eef3f8;
        border-radius: 2px;
        color: rgba(0,0,0,.9);
        padding: 0 8px 0 40px;
        height: 100%;
        line-height: 1.75;
        font-weight: 600;
        font-size: .95rem;
    }

    & > img {
        cursor: pointer;
        width: 18px;
        top: 50%;
        pointer-events: none;
        left: 10px;
        transform: translateY(-50%);
        position: absolute;
        z-index: 1;
    }
`

export default HomepageHeader;
