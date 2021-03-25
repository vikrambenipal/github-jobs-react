import React from 'react'
import Switch from '@material-ui/core/Switch';
import Box from '@material-ui/core/Box'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
    return (
        <Box display="flex" flexDirection="row" alignItems="center" justifyContent="space-between" marginLeft="5vw" marginRight="7vw">
            <h1>devjobs</h1>
            <div>
                <FontAwesomeIcon icon={faSun} size="lg"/>
                <Switch />
                <FontAwesomeIcon icon={faMoon} size="lg"/>
            </div>
        </Box>
    )
}
export default Navbar;
