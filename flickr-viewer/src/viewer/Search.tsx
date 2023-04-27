import { useState } from "react";

const Search = () => {
    const [ query, setQuery ] = useState<string | undefined>();

    return <>
        <form>
            <label>Search Flickr: <br />
                <input 
                    type="text"
                    name="query"
                    value={query} 
                    onChange={(e) => setQuery(e.target.value)} 
                />
            </label>
        </form>
    </>
}

export default Search;