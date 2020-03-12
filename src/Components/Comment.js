import React from 'react';

function Comment(props){
    return(
        <li>
            <span>{props.data}</span><br/>
            {/* <span><img src={props.data.img} alt="" width='150px' height='150px'/></span> */}

        </li>
    )
}

export default Comment