import React from 'react'



const Comment = (props) => {
    const style = {padding: 8, width: 900, background: "LightGrey", border: "thick solid transparent", color: "Black"}
    const nilValue = null;
    return <div style={ {padding: 8} }>
        <div style={style}>
            {props.rating}
            <div>{props.text}</div>
            <button>👍🏿 {props.likes} </button>
            <button>👎🏿 {props.dislikes}</button>
        </div>
    </div>
}

export default Comment