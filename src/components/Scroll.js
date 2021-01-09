import React from 'react';

const Scroll=(props) => {
    console.log(props);
    return (
        <div style={{overflow: 'scroll', border:'0px solid black', height:'800px'}}>
            {props.children}
        </div>
    );
}
{
    //we are able to give the scroll property to everything in berwttn the scroll tags by using the concept of children
}


export default Scroll;
