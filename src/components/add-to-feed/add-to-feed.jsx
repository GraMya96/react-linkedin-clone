import styled from "styled-components";
import { Content } from "../../global/content/content";

import icon_logo from '../../assets/feed-icon.svg';
import right_icon from '../../assets/right-icon.svg';

const AddToFeed = () => {
    return (
        <>
            <AddToFeedContent
                flexDirection="column"
                justifyContent='space-between'
                alignItems='flex-start'>

                <div className="d-flex justify-content-between w-100 mb-3">
                    <h2>Add to your feed</h2>
                    <img src={ icon_logo } alt="Icon" />
                </div>

                <ul className="feed-list">
                    <li className="mb-3">
                        <div className="background"></div>
                        <div className="d-flex flex-column">
                            <span>#Linkedin</span>
                            <button>Follow</button>
                        </div>
                    </li>
                    <li className="mb-3">
                        <div className="background"></div>
                        <div className="d-flex flex-column">
                            <span>#Video</span>
                            <button>Follow</button>
                        </div>
                    </li>
                </ul>

                <div className="recommendations">
                    <span className='d-flex align-items-center'>
                        View all recommendations
                        <img src={ right_icon } alt="Right Icon" />
                    </span>
                </div>
            </AddToFeedContent>

            <BannerCard>
                <img className="w-100" src='https://static-exp1.licdn.com/scds/common/u/images/promo/ads/li_evergreen_jobs_ad_300x250_v1.jpg' alt="A man Laughing" />
            </BannerCard>
        </>
    )
}

const AddToFeedContent = styled(Content)`
    margin-bottom: 8px;
    text-align: center;
    background-color: #fff;
    border-radius: ${ ({ theme }) => theme.borderRadius.secondary };
    box-shadow: 0 0 0 1px rgb(0 0 0 / 15%), 0 0 0 rgb(0 0 0 / 20%);
    padding: 12px;

    & h2 {
        font-size: 1rem;
        color: rgba(0,0,0,.6);
    }

    & > ul.feed-list {
        display: flex;
        align-items: center;
        position: relative;
        flex-direction: column;

        & > li {
            display: flex;
            align-items: center;

            div.background {
                background: url('https://static-exp1.licdn.com/sc/h/1b4vl1r54ijmrmcyxzoidwmxs');
                background-size: contain;
                background-repeat: no-repeat;
                width: 48px;
                height: 48px;
                margin-right: 10px;
            }

            button {
                background-color: transparent;
                color: rgba(0,0,0,.6);
                box-shadow: inset 0 0 0 1px rgba(0,0,0,.6);
                padding: 1rem;
                align-items: center;
                border-radius: 15px;
                font-weight: 600;
                max-height: 2rem;
                text-align: center;
                display: flex;
                align-items: center;
                outline: none;
                transition: all .2s;

                &:hover {
                    transform: scale(1.04);
                }
            }
        }
    }

    & > div.recommendations {
        color:${ ({ theme }) => theme.colors.primary };
        cursor: pointer;
        font-size: .95rem;

        & > span {
            border-bottom: 1.5px solid transparent;

            &:hover {
                border-bottom:${ ({ theme }) => '1.5px solid' + theme.colors.primary };
            }
        }

        & img {
            margin-left: 3px;
        }
    }
`

const BannerCard = styled.div`
`



export default AddToFeed;