import { useState } from "react";

import Results from "./Results";

const Search = () => {
    const [ query, setQuery ] = useState<string | undefined>();
    const [ search, setSearch ] = useState<boolean>(false)

    return <>
        <form onSubmit={(e) => {
            e.preventDefault();  
            setSearch(true);
        }}>
            <label>Search Flickr: <br />
                <input 
                    type="text"
                    name="query"
                    value={query} 
                    onChange={(e) => setQuery(e.target.value)} 
                />
            </label>
        </form>
        { search &&
            <Results query={query} />
        }
        
    </>
}

export default Search;