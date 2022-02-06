import React from 'react';
import SchoolIcon from '../components/SchoolIcon';
import * as imgs from '../components/images/neu.png';

const Schools = () => {
  return <div>
      <div>
          <SchoolIcon image={imgs} name="Northeastern University" />
      </div>
      {" \n \n"}
      <div>
          <SchoolIcon image={null} name="Boston University" />
      </div>
      
  </div>;
};

export default Schools;
