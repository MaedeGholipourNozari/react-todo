import React, { useRef, useEffect } from "react";



const InputWithLabel=(props)=>{

    const inputRef = useRef();

    useEffect(() => {
         inputRef.current.focus();
      }, []);

    return(
    <>
            <label htmlFor="todoTitle" title="Title">{props.children}</label>
            <input type="text" 
                id="todoTitle"
                value={props.value} 
                onChange={props.onChange} 
                name="title" 
                placeholder="Enter todo title"
                ref={inputRef}
                required
                />

        
    </>
       
    );
};

export default InputWithLabel