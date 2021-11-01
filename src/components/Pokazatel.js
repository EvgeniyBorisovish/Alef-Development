import React from 'react';
import { useContext } from 'react';
import { useEffect } from 'react';
import { useRef } from 'react';
import { Context } from '../Context';

function Pokazatel({chapter,typeInput,stateHook}){
    const textInput = useRef();
    const [,,childrenApiState] = useContext(Context);

    const {stateChildren} = childrenApiState

    const countChild =  Object.values(stateChildren).length

    useEffect(()=>{
        if (typeInput==="text" && countChild>1){
            textInput.current.focus()
        }
        
    },[countChild,typeInput])
    
    
    return (
            <div className="personal-data-content-pokazatel">
                <div className="personal-data-content-pokazatel__chapter">
                    {chapter}
                </div>
                {
                    typeInput==="number"?
                    <input {...stateHook} name="number" type={typeInput} min="0"  className="personal-data-content-pokazatel__value" value={stateHook.state}/>:
                    <input {...stateHook} autoComplete="off" name="text" ref={textInput} type={typeInput}  className="personal-data-content-pokazatel__value" value={stateHook.state}/>
                }
                
            </div>
            )
        
}


export default Pokazatel