/* Dependencies: */
import styled from "styled-components";

/* Styled Components: */
import { Content } from "../../global/content/content";

/* Other Components: */

/* Hooks: */

/* Actions: */

/* Images: */
import photo_background from "../../assets/card-bg.svg";
import photo_img from "../../assets/photo.svg";
import widget_icon from "../../assets/widget-icon.svg";
import item_icon from "../../assets/item-icon.svg";
import plus_icon from "../../assets/plus-icon.svg";
import { useSelector } from "react-redux";

/* Other .js Files: */


const AddPic = props => {
    const user = useSelector( state => state.user.user );

    return (
        <>
            <AddPicContent>
                <div className="background-img">

                </div>
                <div className="photo-container">
                    <img src={ photo_img } alt="Nothing Special" />
                </div>
                <div className="user-info">
                    <p>Welcome, { user && user.displayName && user.displayName !== '' ? user.displayName : 'there' }! <span>Add a photo</span></p>
                </div>
                <div className="widget">
                    <div className="background">
                        <div className="text">
                            <span>Connections</span>
                            <span>Grow your network</span>
                        </div>
                        <img src={ widget_icon } alt="Widget" />
                    </div>
                </div>
                <div className="item">
                    <img src={ item_icon } alt="Item Icon" />
                    My Items
                </div>
            </AddPicContent>

            <InfoBox>
                <div className="groups w-100">
                    <span>Groups</span>
                </div>
                <div className="events w-100">
                    <span>Events</span>
                    <img src={ plus_icon } alt="Plus Icon" />
                </div>
                <div className="hashtags w-100">
                    <span>Follow Hashtags</span>
                </div>
                <div className="discover-more w-100">
                    <span>Discover more</span>
                </div>
            </InfoBox>
        </>
    )
}


const AddPicContent = styled(Content)`
    grid-area: left;
    background: #fff;
    border-radius: 5px;
    text-align: center;
    min-height: 200px;
    position: relative;
    transition: box-shadow 83ms;
    box-shadow: 0 0 0 1px rgb(0 0  0 / 15%), 0 0 0 rgb(0 0 0 / 20%);

    --background-img-height: 60px;

    & .background-img {
        background: url(${ photo_background });
        background-position: center;
        background-size: cover;
        height: var(--background-img-height);
        width: 100%;
        overflow: hidden;
    }

    & svg {

    }

    & .photo-container {
        --size: 70px;

        position: absolute;
        border: 1px solid #A0B4B7;
        display: flex;
        border-radius: 50%;
        left: 50%;
        transform: translateX(-50%);
        /* padding: 12px; */
        width: var(--size);
        height: var(--size);
        top: calc( var(--background-img-height) - var(--size) / 2 );
        box-shadow: 0 0 0 2px #fff;
        background: #fff;
        align-items: center;
        justify-content: center;
        cursor: pointer;

        & > img {
            width: 40px;
            height: 40px;
        }
    }

    & .user-info {
        border-bottom: 1px;
        padding: 50px 12px 16px;
        width: 100%;
        text-align: center;

        p {
            line-height: 1.5;
            font-size: 1rem;
            font-weight: 700;
            color: rgba(0,0,0,.9);

            & > span {
                display: block;
                font-size: .8rem;
                margin-top: 3px;
                font-weight: 400;
                cursor: pointer;
                color: ${ ({ theme }) => theme.colors.primary };

                &:hover {
                    text-decoration: underline;
                }
            }
        }

    }

    .widget {
        border-bottom: 1px solid rgba(0,0,0,.15);
        border-top: 1px solid rgba(0,0,0,.15);
        padding: 10px 0;
        width: 100%;

        & > .background {
            display: flex;
            justify-content: space-between;
            padding: 5px 12px;


            & .text {
                display: flex;
                flex-direction: column;
                text-align: left;
                font-size: .85rem;
                line-height: 1.35;

                & > span:first-of-type {
                    color: rgba(0,0,0,.6);
                }
            }
            & > img {
                width: 20px;
            }
        }

        &:hover {

            & > .background {
                background: rgba(0,0,0,.08);
            }
        }
    }

    & .item {
        padding: 12px;
        display: flex;
        font-size: .85rem;
        text-align: left;
        align-items: center;
        width: 100%;

        &:hover {
            background: rgba(0,0,0,.08);
        }
    }

`

const InfoBox = styled(AddPicContent)`
    margin-top: 10px;
    text-align: left;
    padding: 8px 0 0;
    min-height: auto;

    & > div {
        display: flex;
        align-items: center;

        & > img {
            cursor: pointer;
        }

        & > span {
            display: block;
            width: 100%;
            font-size: .9rem;
            padding: 4px 12px;

            &:hover {
                color: ${ ({ theme }) => theme.colors.primary };
            }
        }
    }
    & > div.events {
        justify-content: space-between;
        padding-right: 12px;

        & > span {
            padding-right: 0;
        }
    }

    & > div.discover-more {

        & > span {
            color: rgba(0,0,0,.6);
            border-top: 1px solid #d6cec2;
            padding: 12px;

            &:hover {
                background-color: rgba(0,0,0,.08);
            }
        }
    }
`


export default AddPic;