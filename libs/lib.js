import React from 'react';

export var setTextLimited = (oldText, newText, elemId, limit, error) => {
    if (newText.length > limit) {
        let pa = document.getElementById(elemId)
        oldText = newText
        pa.textContent = oldText
    }
    else {
        console.log(error)
    }
}

export var setTextUnlimited = (oldText, newText, elemId, error) => {
    if (newText.length > 2) {
        let pa = document.getElementById(elemId)
        oldText = newText
        pa.textContent = oldText
    }
    else {
        console.log(error)
    }
}

const lib = () => {
  return <div></div>;
};

export default lib;
