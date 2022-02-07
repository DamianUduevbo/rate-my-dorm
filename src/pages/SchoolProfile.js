import React from 'react';
import { ButtonFoundDorm } from '../components/Button';
import * as imgs from '../components/images/white-hall.png'

const SchoolProfileProto = (props) => {
  return <div>
      <h1 id='school-name'>{props.SchoolName}</h1>
      <div>
        {/* THIS IS AN EXAMPLE OF WHAt props.DormsHTML RETURNS
              Loads a list of buttons
              props(id, style?, dormName, src, alt, rating)
        */}
        <button id='WHT' style={{color: 'white', backgroundColor: 'transparent'}} onClick={() => console.log("Redirect to White's page")}>
          <div>White Hall</div> {/* props.dormName */}
          <img src={imgs} alt='WHITE-HALL.png' style={ {height: 250, width: 250} }/>
          
          <div >Rating - 3.0 Stars</div> {/* props.Rating */}
        </button>
        {"\n"}

        <button id='STN' style={{color: 'white', backgroundColor: 'transparent'}} >
          <div>Stetson North</div> {/* props.dormName */}
          <img src={imgs} alt='East-Village.png' style={ {height: 250, width: 250} }/>
          <div >Rating - 4.3 Stars</div> {/* props.Rating */}
        </button>
        {"\n"}
        <button id='STS' style={{color: 'white', backgroundColor: 'transparent'}} >
          <div>Stetson South</div> {/* props.dormName */}
          <img src={imgs} alt='East-Village.png' style={ {height: 250, width: 250} }/>
          <div >Rating - 4.3 Stars</div> {/* props.Rating */}
        </button>
        {"\n"}
        <button id='STE' style={{color: 'white', backgroundColor: 'transparent'}} >
          <div>Levine</div> {/* props.dormName */}
          <img src={imgs} alt='East-Village.png' style={ {height: 250, width: 250} }/>
          <div >Rating - 4.3 Stars</div> {/* props.Rating */}
        </button>
        {"\n"}
        <button id='STW' style={{color: 'white', backgroundColor: 'transparent'}} >
          <div>Stetson West</div> {/* props.dormName */}
          <img src={imgs} alt='STWEST.png' style={ {height: 250, width: 250} }/>
          <div >Rating - 3.8 Stars</div> {/* props.Rating */}
        </button>
        {"\n"}
        <button id='EV' style={{color: 'white', backgroundColor: 'transparent'}} >
          <div>East Village</div> {/* props.dormName */}
          <img src={imgs} alt='East-Village.png' style={ {height: 250, width: 250} }/>
          <div >Rating - 4.3 Stars</div> {/* props.Rating */}
        </button>
        {"\n"}
        <ButtonFoundDorm id="IV" src={imgs} dormName="International Village"
                          alt="International-Village.png"
                          style={{color: 'white', backgroundColor: 'transparent'}}
                          rating={5.0} />
        {props.DormsHTML}
      </div>
  </div>;
};

export const SchoolProfile = (props) => {
  return <div>
    <h1 id='school-name'>{props.SchoolName}</h1>
    <div>
      <ButtonFoundDorm id="IV" src={imgs} dormName="International Village"
                          alt="International-Village.png"
                          style={{color: 'white', backgroundColor: 'transparent'}}
                          rating={5.0} />
    </div>
    
  </div>
}
export default SchoolProfileProto;
