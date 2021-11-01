import React from 'react';
import { useContext } from 'react';
import { Context } from '../Context';
import Pokazatel from './Pokazatel';
import PoolChildren from './PoolChildren';


function PersonalData(){
    
    const [userNameHook, userAgeHook] = useContext(Context);
    

    return <div className="personal-data">
        <div className="personal-data-content">
            <div className="personal-data-content__chapter">
            Персональные данные
            </div>
            <Pokazatel chapter={"Имя"} typeInput={"text"} stateHook={userNameHook} />
            <Pokazatel chapter={"Возраст"} typeInput={"number"} stateHook={userAgeHook}/>
            <PoolChildren />
        </div>
    </div>
}




export default PersonalData