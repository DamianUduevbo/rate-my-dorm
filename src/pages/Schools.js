import React from 'react';
import neu from '../components/images/neu.png';
import bu from '../components/images/bu.png';
import Button from '../components/Button';

const Schools = () => {
    return <div>
        <Button id="neu-boston" style={ {color: 'white', backgroundColor: 'transparent'} }
                src={neu} alt="Northeastern-University.png" 
                schoolName="Northeastern University" />
        {" \n \n"}
        <Button id="bu-boston" style={ {color: 'white', backgroundColor: 'transparent'} }
                src={bu} alt="Boston-University.png" 
                schoolName="Boston University" />
    </div>
}

export default Schools;
