import React from 'react';
import neu from '../components/images/neu.png';
import bu from '../components/images/bu.png';
import Button from '../components/Button';

const Schools = () => {
    return <div>
        {/* EXAMPLE OF HOW THIS WILL LOOK. USE A DB AND AN ALGO TO LOAD THESE */}
        <Button id="neu-boston" style={ {color: 'white', backgroundColor: 'transparent'} }
                src={neu} alt="Northeastern-University.png"
                schoolName="Northeastern University" />
        {" \n"}
        <Button id="bu-boston" style={ {color: 'white', backgroundColor: 'transparent'} }
                src={bu} alt="Boston-University.png" 
                schoolName="Boston University" />
    </div>
}

export default Schools;
