import React from 'react'
import loading from '../ajax-loader.gif'
function Loading() {
    return (
        <div>
            <img src={loading} alt="Loading..." />
        </div>
    )
}

export default Loading
