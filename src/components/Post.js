import React from 'react';
import Comment from './Comment';
import { useState } from 'react';

import * as imgs from '../components/images/white-hall.png'
import * as wht1 from '../components/images/white-hall-room1.jpeg'
import * as wht2 from '../components/images/white-hall-room2.jpeg'
import * as wht3 from '../components/images/white-hall-room3.jpeg'

export const Post = (props) => {
  let postedComments = []
  
  const createComment = (text, rating) => {
    if (text.length > 10 && (rating >= 0 && rating <= 5)) {
      return <Comment text={text} rating={rating} likes={0} dislikes={0}
              key={Math.floor(Math.random() * 88000)}/>
    }
    else {
      console.log("check conditions")
    }
  }

  const [comment, setComments] = useState([]);

  const updateComments = (c) => {
    setComments( [... comment, c] )
  }



  return (
  <div style={{top: 90, padding: 30}}>
    <div style={ {padding: 30} }>
      <img src={props.src} style={ {height: 500, width: 500} } />
      <div id="caption"> Well this was check-unexpected </div>
      <div id="tags"> {props.tags} </div>
    </div>

    <input id="newComment" type="text" placeholder="Comment Here" ></input>
    <input id="inputRating" type="number" placeholder="Enter a rating"></input>
    <button onClick={() => {
      let textBox = document.getElementById("newComment")
      let inputRating = document.getElementById("inputRating")
      let c = createComment(textBox.value, inputRating.value)
      updateComments(c)
      console.log()

      //postedComments.push( createComment(textBox.value, inputRating.value) )
    }}>Post</button>


    <li id="Comments" style={ {width: 900} }>
      {comment}
      <Comment sender="Ezgi" text="modern art😍😍" rating={3.0} likes={4} dislikes={20} key={Math.floor(Math.random() * 88000)}/>
      <Comment sender="Krane" text="It's an interactive installation " rating={2.0} likes={20} dislikes={5} key={Math.floor(Math.random() * 88000)}/>
      <Comment sender="Dylan" text="better then the " rating={2.5} likes={0} dislikes={50} key={Math.floor(Math.random() * 88000)}/>
      <Comment sender="Dennis" text="The custodial services here are impeccable" rating={5} likes={11} dislikes={0} key={Math.floor(Math.random() * 88000)}/>
      <Comment sender="Bigman" text="^" rating={2.5} likes={0} dislikes={0} key={Math.floor(Math.random() * 88000)}/>
      <Comment sender="Ryan Jung" text="Wow that's insane" rating={3.5} likes={2} dislikes={0} key={Math.floor(Math.random() * 88000)}/>
    </li>
  </div>
  )
}

export const CondensedPost = (props) => {
  return <button style={{color: 'white', backgroundColor: 'transparent'}}>
    <div style={ {padding: 30} }>
      <img src={props.src} style={ {height: 200, width: 200} } />
      <div id="tags"> {props.tags} </div>
    </div>
  </button>
}


const PostProto = (props) => {
  /*
    return <div>
        <img src={props.src} />
        <div id="tags">
          {["#Freshman\n", "#Sorry\n"]}
        </div>
    </div>
    */
}

export default PostProto