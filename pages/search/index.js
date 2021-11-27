import { useEffect, useState } from "react";
import axios from "axios";
import Link from "next/link";


const Search = () => {

    const [query, setQuery] = useState("");
    const [results, setResults] = useState([]);

    //https://api.artic.edu/api/v1/artworks/search?q=monet
    //https://api.artic.edu/api/v1/artworks/search?q=cats&query[term][is_public_domain]=true

    const onChange = (e) => {
        const query = e.target.value;
        setQuery(query)
        if (query.length) {
            axios(`https://api.artic.edu/api/v1/artworks/search?q=${query}`, {
            })
            .then((result) => {
                console.log(result.data.data)
                setResults(result.data.data)
            });
        } else {
            //setResults([])
        }
    }

    return ( 
        <>
        <h1>This is the search page</h1>
            <input 
            type="search" 
            name="search" 
            id="search"
            onChange={onChange}
            value={query}
            />
            <ul>
                {results?.map((result, index) => (
                    <Link key={index} href={`/artwork/${result?.id}`}>
                        <a >
                            <li>
                                <p>{result?.thumbnail?.alt_text}</p>
                            </li>
                        </a>
                    </Link>
                ))}
            </ul>
        </>
     );
}
 
export default Search;