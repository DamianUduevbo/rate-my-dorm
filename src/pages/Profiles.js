import React from 'react'

import { useNavigate } from 'react-router-dom';
import * as Buttons from '../components/Button';
import PostProto from '../components/Post';
import * as Postings from '../components/Post';
import * as imgs from '../components/images/white-hall.png'
import * as wht1 from '../components/images/white-hall-room1.jpeg'
import * as wht2 from '../components/images/white-hall-room2.jpeg'
import * as wht3 from '../components/images/white-hall-room3.jpeg'
import * as whtmilk from '../components/images/white-hall-milk1.jpeg'


export const SchoolProfile = (props) => {
  const navigate = useNavigate()
  
  const createDormButton = (schoolName, dormName, img, iD, rating, nav) => {
    return (<Buttons.ButtonFoundDorm id={dormName}
                            src={imgs} dormName={dormName} alt={iD+".png"}
                            style={{color: 'white', backgroundColor: 'transparent'}}
                            rating={rating} 
                            onClick={() => {
                                navigate(nav)
                                //return createRoute1(nav, dormName) && navigate(nav);
                            }}
                            key={Math.floor(Math.random() * 88000)} />)
  }

  let ovrall = 0
  return (<div style={{position:"fixed", top: 0}}>
    <div style={{padding: 30}}>
      <h1 id='school-name'>{props.SchoolName}</h1>
      <h1 id='ovr-rating'>Overall Rating: {props.overallRating / props.dormsList.length } / 5</h1>
    </div>
    <div>
      {props.dormsList.map( (v) => {
        ovrall = ovrall + v.rating

        /**/
        return createDormButton(props.SchoolName,
          v.dormName, null, v.id, v.rating,
          v.dormName.replace(" ", "-")) 
        })
      }
    </div>
  </div>)
}

export const DormProfile = (props) => {
  return (<div style={{ top: 0}} >
    <h1>
      <p>{props.dormName}</p>
      <div>
        <div>{props.description}</div>
        <div>other stuff here</div>
    </div>
    </h1>
    <div>
      Featured Gallery
      <div>
        <Postings.CondensedPost src={whtmilk} key={Math.floor(Math.random() * 88000)} />
      </div>
    </div>
    <div>
      Gallery
      <div>
        <Postings.CondensedPost src={wht1} key={Math.floor(Math.random() * 88000)} />
        <Postings.CondensedPost src={wht3} key={Math.floor(Math.random() * 88000)} />
        {props.Posts /* THIS IS AN ARRAY OF MAPS */}
      </div>
    </div>
  </div>)
};


export const SchoolProfileProto = (props) => {
  const navigate = useNavigate()
  return (<div>
      <h1 id='school-name'>{props.SchoolName}</h1>
      <div>
        {/* THIS IS AN EXAMPLE OF WHAt props.DormsHTML RETURNS
              Loads a list of buttons
              props(id, style?, dormName, src, alt, rating)
        */}
        <Buttons.ButtonFoundDorm id={props.schoolName + "-WHT"} src={imgs} dormName="White Hall"
                          alt="White-Hall.png"
                          style={{color: 'white', backgroundColor: 'transparent'}}
                          rating={3.0} onClick={() => { navigate( "/dorm-page-Northeastern-WHT", )} }/>
        {"\n"}
        <Buttons.ButtonFoundDorm id="IV" src={imgs} dormName="International Village"
                          alt="International-Village.png"
                          style={{color: 'white', backgroundColor: 'transparent'}}
                          rating={5.0} />
        {props.DormsHTML}
      </div>
  </div>)
};

export const DormProfileProto = (props) => {
  return (<div>
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
  </div>)
};

