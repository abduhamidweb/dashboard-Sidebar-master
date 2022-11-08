import React from 'react';

const Input = ({type,classs,text,namee,id,val,setVal}) => {
    return (
        <>
            <input type={type} className={classs} placeholder={text} name={namee} id={id} value={val} onChange={(e) => {
setVal(e.target.value)                
            }} />
        </>
    );
};

export default Input;