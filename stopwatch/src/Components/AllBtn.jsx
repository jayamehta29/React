import React from 'react'

const AllBtn = (props) => {
    return ( 
        <div className={props.classNameO} onClick={props.handle}>
        <div className={props.classNameI}>
            {props.name}
        </div>
    </div>
    
        );
}
 
export default AllBtn;