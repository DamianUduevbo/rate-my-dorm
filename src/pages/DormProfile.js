import React from 'react';
import PostProto from '../components/Post';
import * as Postings from '../components/Post';

export const DormProfileProto = (props) => {
  return <div>
    <h1>
      <p>WHITE HALL</p>
      <div>
        <div>DESCRIPTION</div>
        <div>Et al.</div>
    </div>
    </h1>
    

    <div>
      Featured Gallery
      <div>
        <PostProto src={props.src} ></PostProto>
      </div>
    </div>
    
    <div>
      Gallery
      <div>
        [POSTS w/ COMMENTS]
      </div>
    </div>
  </div>;
};

export const DormProfile = (props) => {
  return <div>
    <h1>
      <p>{props.dormName}</p>
      <div>
        <div>{props.description}</div>
        <div>Et al.</div>
    </div>
    </h1>
    

    <div>
      Featured Gallery
      <div>
        <Postings.Post src={props.src} />
      </div>
    </div>
    
    <div>
      Gallery
      <div>
        {props.Posts /* THIS IS AN ARRAY OF MAPS */}
      </div>
    </div>
  </div>;
};

export default DormProfileProto;
