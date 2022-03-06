import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ButtonFoundDorm } from '../components/Button';
import * as imgs from '../components/images/white-hall.png'

export const SchoolProfileProto = (props) => {
  const navigate = useNavigate()
  return (<div>
      <h1 id='school-name'>{props.SchoolName}</h1>
      <div>
        {/* THIS IS AN EXAMPLE OF WHAt props.DormsHTML RETURNS
              Loads a list of buttons
              props(id, style?, dormName, src, alt, rating)
        */}
        <ButtonFoundDorm id={props.schoolName + "-WHT"} src={imgs} dormName="White Hall"
                          alt="White-Hall.png"
                          style={{color: 'white', backgroundColor: 'transparent'}}
                          rating={3.0} onClick={() => { navigate( "/dorm-page-Northeastern-WHT", )} }/>
        {"\n"}
        <ButtonFoundDorm id="IV" src={imgs} dormName="International Village"
                          alt="International-Village.png"
                          style={{color: 'white', backgroundColor: 'transparent'}}
                          rating={5.0} />
        {props.DormsHTML}
      </div>
  </div>)
};

// 
export const SchoolProfile = (props, dorms) => {
  
  return (<div>
    <h1 id='school-name'>{props.SchoolName}</h1>
    <div>
      <ButtonFoundDorm id="IV" src={imgs} dormName="International Village"
                          alt="International-Village.png"
                          style={{color: 'white', backgroundColor: 'transparent'}}
                          rating={5.0} />
    </div>
  </div>)
}
export default SchoolProfileProto;
