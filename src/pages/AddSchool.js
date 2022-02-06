import React from 'react';
import { useState } from 'react';

const AddSchool = () => {
    const [selectedFile, setSelectedFile] = useState(null)

    const onChange = (n) => {
        setSelectedFile(n.target.files[0])
        console.log("Heyyy")
        return <img src={selectedFile} alt='' />
    }
    
    return <form>
        <input id="add-school=name" placeholder="School Name" ></input>
        <button id="Set College Name" text='Set Name'>Submit</button>
        <div>
            School Image <input type="file" />
            <img src={null} alt=''/>
        </div>
        {"\n \n Add a Dorm"}
        <div>
            <input type="text" id="Dorm-Name" placeholder="Dorm name"  />
            <input type="file" onChange={ (e) => onChange(e)}
            />
            <img src={selectedFile} alt=''/>
            
        </div>
    </form>;
};

export default AddSchool;
