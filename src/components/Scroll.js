import React from 'react';

const Scroll = (props) => {
    return (
        // css: overflow-y | jsx: overflowY 
        // Must camelCase for JSX
        <div style={{overflowY: 'scroll', border: '5px solid black', height: '500px'}}>
            {props.children}
        </div>  
    );
}

export default Scroll;