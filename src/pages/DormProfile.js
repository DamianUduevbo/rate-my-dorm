import React from 'react';
import PostProto from '../components/Post';

const DormProfileProto = (props) => {
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

const DormProfile = (props) => {
  return <div>
    DORM PAGE
  </div>;
};
export default DormProfileProto;
