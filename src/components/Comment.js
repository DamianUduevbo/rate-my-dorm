import React from 'react'

const Comment = (props) => {
    const style = {padding: 8, width: 900, background: "LightGrey", border: "thick solid transparent", color: "Black"}
    
    return <div style={ {padding: 8} }>
        
        <div style={style}>
            <div>{props.sender || "Admin"}: {"\n"+props.text}</div>
            <button>👍🏿 {props.likes} </button>
            <button>👎🏿 {props.dislikes}</button>
            <div style={{fontSize: 15}}>Gave this dorm {props.rating}/5 stars</div> 
        </div>
    </div>
}

export default Comment