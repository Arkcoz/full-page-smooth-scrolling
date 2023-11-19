import React, { createContext, useState } from 'react'
import PropTypes from 'prop-types';

export const NavContext = createContext();

const NavProvider = ({ children }) => {
    const [activeLinkId, setActiveLinkId] = useState("");

    const providerValue = {
        activeLinkId,
        setActiveLinkId
    }

    return (
        <NavContext.Provider value={providerValue}>
            {children}
        </NavContext.Provider>
    )
}

NavProvider.propTypes = {
    children: PropTypes.node.isRequired,
};

export default NavProvider