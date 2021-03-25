import React from 'react'
import Box from '@material-ui/core/Box'
import Dialog from '@material-ui/core/Dialog'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilter, faSearch } from '@fortawesome/free-solid-svg-icons';

const Search = () => {
    return (
        <div>
            <input placeholder="Filter by title..." />
            <FontAwesomeIcon icon={faFilter} size="lg" />
            <FontAwesomeIcon icon={faSearch} size="lg" />
            <Dialog open={true}>
                <h1>modal</h1>
            </Dialog>
        </div>
    )
}
export default Search;