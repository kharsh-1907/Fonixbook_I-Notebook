'use client';
import React from 'react';
// import PropTypes from 'prop-types';

const Alert = (props) => {
    return (
        props.showmsg && <div className={`alert  ${props.showmsg.type ==="success"? "bg-primary-subtle" : "bg-danger-subtle"}  alert-dismissible fade show fixed-top`}  role="alert">
                           <strong className='text-success' style={{textTransform:"uppercase"}}>{props.showmsg.type}</strong>: <b style={{color:"black"}}>{props.showmsg.msg}</b>
                {/* <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button> */}
            </div>
    )
}
export default Alert;
