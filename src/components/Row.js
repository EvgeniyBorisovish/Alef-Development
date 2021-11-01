import React from 'react';
import { useContext } from 'react';
import { useEffect } from 'react';
import { Context } from '../Context';
import useInput from '../hooks/useInput';
import Pokazatel from './Pokazatel';

function Row({child,idChild}){
    const [,,childrenApiState] = useContext(Context);
    
    const {changeChild,deleteChild}  = childrenApiState

    const userNameHook = useInput(child.name)

    const userAgeHook = useInput(child.age)

    useEffect(()=>{
        changeChild(idChild,'name',userNameHook.state)
    },[userNameHook.state])

    useEffect(()=>{
        changeChild(idChild,'age',userAgeHook.state)
    },[userAgeHook.state])
    

    return(<>
            <Pokazatel chapter={"Имя"} typeInput={"text"} stateHook={userNameHook}/>
            <div className="children-content-data-row__interval"></div>
            <Pokazatel chapter={"Возраст"} typeInput={"number"} stateHook={userAgeHook}/>
            <div className="children-content-data-row__interval"></div>
            <div className="children-content-data-row__btn-delete" onClick={()=>{deleteChild(idChild)}} >Удалить</div>
        </>)
}

export default Row