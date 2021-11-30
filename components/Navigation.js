import Link from "next/link";
import { useState } from "react";
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';


const Navigation = () => {

    const [isVisible, setIsVisible] = useState(false);

    const x = 0;
    const x2 = -140;
    const listX = 10;
    const listX2 = -30;

    const style = css`
        & .nav {
            background-color: yellow;
            opacity: 50%;
            width: fit-content;
            height: 3rem;
            position: fixed;
            bottom: 0;
            right: 0;
            z-index: 2000;
            display: flex;
            justify-content: flex-end;
            align-items: center;
            margin: 1rem 1rem 2rem;
            border-radius: 0 1000px 1000px 0;
        }

        & .nav__link {
            font-size: 0.8rem;
            margin: 0 1rem;
        }
        & .nav__link:first-of-type {
            margin-left: 3rem;
        }

        & .nav__btn {
            position: fixed;
            bottom: 0;
            right: 0;
            z-index: 2010;
            margin: 1rem 1rem 2rem;
            background-color: yellow;
            opacity: 100%;
            border-radius: 50%;
            color: #000;
            height: 3rem;
            width: 3rem;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 0.8rem;
            transition: transform 0.5s ease;
            transform: ${!isVisible ? `translate(${x}px)` : `translate(${x2}px)`};
            border: none;
            //     display: "inline-block",
            //     boxShadow: "20px 30px 75px #000",
        }       
    `;


    return (
        <div css={style}>
                <button 
                className="nav__btn"
                onClick={() => {
                setIsVisible(!isVisible);
                }} >
                    art
                </button>
            <nav className="nav">
                {isVisible ? <Link href="/" scroll>
                    <a className="nav__link">
                        <p>home</p>
                    </a>
                </Link> : null }
                {isVisible ? <Link href="/search" scroll>
                    <a className="nav__link">
                        <p>search</p>
                    </a>
                </Link> : null }
            </nav>
        </div>
     );
}
 
export default Navigation;