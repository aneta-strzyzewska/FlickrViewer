import { useState } from "react";

import Results from "./Results";
import '../styles.css';

const Search = () => {
    const [ query, setQuery ] = useState<string | undefined>();
    const [ search, setSearch ] = useState<boolean>(false)

    return <>
        <div className="app-header">
            <h2>Flickr Viewer</h2>
        </div>
        <form onSubmit={(e) => {
            e.preventDefault();  
            setSearch(true);
        }}>
            <input 
                className="search-field"
                placeholder="Search Flickr"
                type="text"
                value={query} 
                onChange={(e) => setQuery(e.target.value)} 
            />
        </form>
        { search &&
            <Results query={query} />
        }
        
    </>
}

export default Search;