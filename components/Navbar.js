import Link from "next/link";
import { useState } from "react";
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';


const Navbar = () => {

    const [isVisible, setIsVisible] = useState(false);

    const style = css`
        position: fixed;
        bottom: 0;
        right: 0;
        z-index: 2000;
        display: flex;
        justify-content: flex-end;
        align-items: center;
        margin: 1rem;
        
    `;

    const x = 0;
    const x2 = -25;
    const listX = 10;
    const listX2 = -30;

    return (
        <nav css={style}
        // style={{
        //     position: "fixed",
        //     bottom: "0",
        //     right: "0",
        //     zIndex: "1000",
        //     height: "3rem",
        //     display: "flex",
        //     justifyContent: "flex-end",
        //     alignItems: "center",
        //     borderRadius: "2rem 0 0 2rem"
        // }}
        >
            <button 
            style={{
                backgroundColor: "yellow",
                borderRadius: "50%",
                color: "#000",
                height: "3rem",
                width: "3rem",
                display: "flex",
                display: "inline-block",
                alignItems: "center",
                justifyContent: "center",
                boxShadow: "20px 30px 75px #000",
                fontSize: ".8rem",
                transition: "transform 0.5s ease",
                transform: `${!isVisible ? `translate(${x}px)` : `translate(${x2}px)`}`,
                border: "none"
            }}
            onClick={() => {
			setIsVisible(!isVisible);
			}} >
                art
            </button>
            {isVisible ? <Link href="/" style={{margin: "0 1rem"}}>
                <a>
                    <p>Home</p>
                </a>
            </Link> : null }
            {isVisible ? <Link href="/search"  style={{margin: "0 1rem"}}>
                <a >
                    <p>Search</p>
                </a>
            </Link> : null }
        </nav>
     );
}
 
export default Navbar;