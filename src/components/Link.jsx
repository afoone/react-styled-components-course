import React from 'react'
import PropTypes from 'prop-types'

const Link = ({ className, children }) => {
    return (
        <a className={className}>
            {children}
        </a>
    )
}

Link.propTypes = {
    children: PropTypes.array.isRequired,
    className: PropTypes.string
}

export default Link