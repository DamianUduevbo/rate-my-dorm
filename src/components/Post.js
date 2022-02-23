import React from 'react'

export const Post = (props) => {
  return (
    <div>
      <img src={props.src}></img>
      <div id="tags">
        {props.tags}
      </div>
    </div>
  )
}

const PostProto = (props) => {
    return <div>
        <img src={props.src}></img>
        <div id="tags">
          {["#Freshman\n", "#Sorry\n"]}
        </div>
    </div>
}

export default PostProto