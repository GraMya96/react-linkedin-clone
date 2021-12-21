import styled from "styled-components";
import { Content } from "../../global/content/content";

export const ShareBox = styled(Content)`
    background-color: #fff;
    text-align: center;
    margin: 0 0 8px;
    color:${ ({ theme }) => theme.colors.primary };
    border-radius:${ ({ theme }) => theme.borderRadius.secondary };
    margin-bottom: 8px;
    position: relative;
    box-shadow: 0 0 0 1px rgb(0 0 0 / 15%), 0 0 0 rgb(0 0 0 / 20%);

    & div {
        width: 100%;

        button {
            outline: none;
            color: rgba(0,0,0,.6);
            font-size: .9rem;
            background: transparent;
            line-height: 1.5;
            min-height: 50px;
            border: none;
            display: flex;
            align-items: center;
            font-weight: 700;
        }
        &:first-child { //start a post
            display: flex;
            align-items: center;
            padding: 8px 16px 0 16px;

            img {
                width: 48px;
                border-radius: 50%;
                margin-right: 8px;
            }
            button {
                margin: 4px 0;
                flex-grow: 1;
                border-radius: 35px;
                padding-left: 1rem;
                width: 100%;
                border: 1px solid rgba(0,0,0,.15);
                text-align: left;
            }
        }
        &:nth-child(2) {
            display: flex;
            flex-wrap: wrap;
            justify-content: space-around;
            padding-bottom: 4px;

            button {
                display: flex;
                align-items: center;

                img {
                    margin: 0 4px 0 -2px;
                    width: 28px;
                }
                span {
                    color: #70b5f9;
                }
            }
        }
    }
`

export const Article = styled.div`
    background-color: #fff;
    text-align: center;
    padding: 0;
    margin: 0 0 8px;
    color:${ ({ theme }) => theme.colors.primary };
    border-radius:${ ({ theme }) => theme.borderRadius.secondary };
    margin-bottom: 8px;
    position: relative;
    box-shadow: 0 0 0 1px rgb(0 0 0 / 15%), 0 0 0 rgb(0 0 0 / 20%);
`

export const SharedActor = styled.div`
    padding-right: 40px;
    flex-wrap: nowrap;
    padding: 12px 16px 0;
    margin-bottom: 8px;
    display: flex;
    align-items: center;

    a {
        display: flex;

        img {
            width: 58px;
            height: 58px;
        }
        & > div {
            display: flex;
            flex-direction: column;
            flex-grow: 1;
            flex-basis: 0;
            margin-left: 8px;
            overflow: hidden;

            span {
                text-align: left;

                &:first-child {
                    font-size: .9rem;
                    font-weight: 700;
                    color: rgba(0,0,0,1);
                }
                &:nth-child(n+1) {
                    font-size: .8rem;
                    color: rgba(0,0,0,.6);
                }
            }
        }
    }

    button.circle-options {
        position: absolute;
        right: 12px;
        top: 12px;
        background: transparent;
        border: none;
        outline: none;
        display: flex;
        align-items: center;

        & > div {
            width: 6.5px;
            height: 6.5px;
            background: rgba(0,0,0,0.6);
            border-radius: 50%;

            &:not(:last-of-type) {
                margin-right: 2px;
            }
        }
    }
`

export const Description = styled.div`
    padding: 0 1rem;
    overflow: hidden;
    color: rgba(0,0,0,.9);
    text-align: left;
`
export const SharedImg = styled.div`
    margin-top: 8px;

    img {
        width: 100%;
    }
`
export const SocialCounts = styled.ul`
    list-style: none;
    line-height: 1.3;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 1rem;
    padding: 8px 0;
    border-bottom: 1px solid #e9e5df;

    li {
        margin-right: 5px;
        font-size: .8rem;

        * {
            color: rgba(0,0,0,.6);
        }

        button {
            display: flex;
            align-items: center;
            outline: none;
            border: none;
            background: none;
            background-color: #fff;

            span {
                margin-left: 2px;
            }
        }
    }
`

export const SocialActions = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    margin: 0;
    min-height: 40px;
    padding: 4px 8px;

    button {
        display: inline-flex;
        align-items: center;
        padding: 8px;
        color:${ ({ theme }) => theme.colors.primary };
        border: none;
        background-color: #fff;

        &:hover {
            filter: brightness(90%);
        }

        span {
            font-weight: 600;
            font-size: .8rem;
        }

    }
`

export const ModalContent = styled.div`

    @keyframes slide-down {
        from {
            opacity: 0;
            transform: translateY(-3rem);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }

    position: fixed;
    top: 20vh;
    overflow: auto;
    max-height: 75vh;
    left: 5%;
    width: 90%;
    background-color: white;
    border-radius: ${ ({ theme }) => theme.borderRadius.secondary };
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.25);
    z-index: 30;
    animation: slide-down 300ms ease-out forwards;

    @media (min-width: 768px) {
        width: 40rem;
        left: calc(50% - 20rem);
    }
    @media (max-width: 991px) {
        top: 13vh;
        max-height: 60vh;
    }

    & > h2 {
        line-height: 1.5;
        padding: 1rem 1.1rem;
        font-size: 1.3rem;
        font-weight: 400;
        color: rgba(0,0,0,.6);
        border-bottom: 1px solid rgba(0,0,0,.15);

        @media only screen and (max-width: 991px) {
            font-size: 1.1rem;
        }
    }
    & > .user-info {
        display:flex;
        align-items: center;
        padding: .8rem 1.3rem;

        img, svg {
            width: 48px;
            height: 48px;
            border-radius: 50%;
        }
        span {
            font-weight: 600;
            font-size: 1.05rem;
            line-height: 1.5;
            margin-left: 10px;

            @media only screen and (max-width: 991px) {
                font-size: .95rem;
            }
        }
    }

    & > .editor {
        width: 100%;
        padding: .8rem 1.3rem;

        textarea {
            width: 100%;
            resize: none;
            font-size: 1rem;
            font-weight: 600;
            padding: .7rem;

            @media only screen and (max-width: 991px) {
                max-height: 30vh;
            }
        }

        & > .upload {
            text-align: center;

            .image, .video {
                width: 100%;
                font-size: .85rem;
                font-weight: 600;
                padding: .5rem;
                margin-top: 15px;
            }

            img {
                width: 100%;
                margin-top: 15px;
            }
            iframe {
                margin-top: 15px;
            }
            p {
                font-size: .9rem;
                font-weight: 600;

                label {
                    cursor: pointer;
                    color:${ ({ theme }) => theme.colors.primary };
                    transition: all .25s;

                    &:hover {
                        text-decoration: underline;
                    }
                }
            }
            input {

            }
        }
    }


    & > .share-content {
        margin-top: 15px;
        display: flex;
        justify-content: space-between;
        padding: .8rem 1.3rem .8rem 1rem;

        button {
            border-radius:${ ({ theme }) => theme.borderRadius.secondary };
            min-height: 40px;
            border: none;
            padding: 7px 10px;
            box-shadow: 0 0 0 1px rgb(0 0  0 / 15%), 0 0 0 rgb(0 0 0 / 20%);

            &:first-of-type {
                margin-right: 8px;
            }
        }
    }
`

export const PostButton = styled.button`
    min-width: 60px;
    border-radius: 20px;
    padding-left: 1rem;
    padding-right: 1rem;

    color: ${ ({ disabled }) => disabled
        ?  'rgba(256,256,256,.5)'
        : '#fff' };

    background:${ ({ theme, disabled }) => disabled
        ?  'rgba(0,0,0,.8)'
        : theme.colors.primary };

    cursor: ${ ({ disabled }) => disabled
        ?  'initial'
        :  'pointer' };

    &:hover {
        background:${ ({ disabled }) => disabled
            ?  'rgba(0,0,0,.8)'
            : '#004182' };
    }
`