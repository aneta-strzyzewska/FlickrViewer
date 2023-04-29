import { useState } from "react";

import Results from "./Results";
import '../styles.css';
import type { SearchQuery } from "./types";

const Search = () => {
    const [ text, setText ] = useState<string | undefined>();
    const [ searchQuery, setSearchQuery ] = useState<SearchQuery | undefined>()

    return <>
        <div className="app-header">
            <h2>Flickr Viewer</h2>
        </div>
        <form onSubmit={(e) => {
            e.preventDefault();  
            setSearchQuery({
                text: text,
                page: 1,
                perPage: 30
            });
        }}>
            <input 
                className="search-field"
                placeholder="Search Flickr"
                name="text"
                type="text"
                value={text} 
                onChange={(e) => setText(e.target.value)} 
            />
        </form>
        { searchQuery &&
            <Results query={searchQuery} />
        }
        
    </>
}

export default Search;