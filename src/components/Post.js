import React from 'react';
import Comment from './Comment';

export const Post = (props) => {
  
  return <div>
    <div>
      <img src={props.src} style={ {height: 500, width: 500} } />
      <div id="tags"> #{props.tags} </div>
      <div id="caption"> caption here </div>
    </div>
    <li id="Comments" style={ {width: 900} }>
      <Comment text="MY REVIEW" rating={3.5} likes={4} dislikes={20}/>
      <Comment text="MY REVIEW" rating={3.5} likes={4} dislikes={20}/>
      <Comment text="MY REVIEW" rating={3.5} likes={4} dislikes={20}/>
      <Comment text="MY REVIEW" rating={3.5} likes={4} dislikes={20}/>
    </li>
  </div>
}

const PostProto = (props) => {
    return <div>
        <img src={props.src} />
        <div id="tags">
          {["#Freshman\n", "#Sorry\n"]}
        </div>
    </div>
}

export default PostProto