import { useEffect, useState } from "react";
import axios from "axios";
import Link from "next/link";
//import Image from "next/image";
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';


const Search = () => {

    const [query, setQuery] = useState("");
    const [results, setResults] = useState([]);
    const [artworkID, setArtworkID] = useState();
    const [artworks, setArtworks] = useState();

    //https://api.artic.edu/api/v1/artworks/search?q=monet
    //https://api.artic.edu/api/v1/artworks/search?q=cats&query[term][is_public_domain]=true

        // useEffect(() => {
    //     axios(`https://api.artic.edu/api/v1/artworks/${artworkID}`, {
    //     })
    //     .then((result) => {
    //         console.log(result.data.data)
    //         //setArtworks(result.data.data.image_id)
    //     });
	// 	}
	// , []);

    const onChange = (e) => {
        const query = e.target.value;
        setQuery(query)
        if (query.length) {
            axios(`https://api.artic.edu/api/v1/artworks/search?q=${query}`, {
            })
            .then((result) => {
                //console.log(result.data.data[0].id)
                setResults(result.data.data)
                //setArtworkID(result.data.data[0].id)
            });
        } else {
            setResults([])
        }
    }

    const style = css`
        margin: 0 auto;
        height: 100%;
        & .searchTitle {
            text-align: center;
            padding-top: 2.5rem;
            color: gray;
        }
        & .searchInputField__container {
            text-align: center;
        }

        & .searchInputField {
            all: unset;
            background-color: #F4F0E8;
            border-radius: 1000px;
            border: 1px solid gray;
            padding: 0.2rem;
            display: inline-block;
            
        }
        & .searchResults__list {
            list-style: none;
            padding-left: 0;
        }
        & .searchResult__listItem {
            border-top: 1px solid gray;
            height: 10.2rem;
            overflow: hidden;
            margin: 0.8rem;
            padding: 0.8rem;
        }
        & .searchResult__title {
            text-transform: uppercase;
            color: gray;
            font-weight: 400;
            height: 1.4rem;
            overflow: hidden;
        }
    `;



    return ( 
        <div css={style}>
            <h1 className="searchTitle">show me more art</h1>
            <div className="searchInputField__container"> 
                <input 
                type="search" 
                name="search" 
                id="search"
                placeholder="search here..."
                className="searchInputField"
                onChange={onChange}
                value={query}
                />
            </div>
            <ul className="searchResults__list">
                {results?.map((result, index) => (
                    <Link key={index} href={`/artwork/${result?.id}`} scroll>
                        <a >
                            <li className="searchResult__listItem">
                            {/* <div className="listItem__imgContainer">
                                <Image src={`https://www.artic.edu/iiif/2/${artworks}/full/843,/0/default.jpg` } 
                                alt={result?.thumbnail?.alt_text} 
                                width={200} 
                                height={200}
                                layout="responsive"
                                className="listItem__img"
                                />
                            </div> */}
                                <h3 className="searchResult__title">{result?.title}</h3>
                                <p className="searchResult__altText">{result?.thumbnail?.alt_text}</p>
                            </li>
                        </a>
                    </Link>
                ))}
            </ul>
        </div>
     );
}
 
export default Search;