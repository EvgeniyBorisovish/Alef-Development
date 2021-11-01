import React from 'react';
import { useHistory } from 'react-router';
import Plus from '../images/Plus.png'
import { Context } from '../Context';
import Row from './Row';
import { useContext } from 'react';


function PoolChildren(){
    const [,,childrenApiState] = useContext(Context);
    
    const {stateChildren,addChild}  = childrenApiState

    const history= useHistory()
 
    return (
            <div className="children-content" onKeyDown={(e)=>{
                if (e.target.className==="personal-data-content-pokazatel__value"){
                    
                    if ( e.target.name==="number" && (e.code==="Enter" || e.code==="Tab" || e.code==="NumpadEnter") && Object.values(stateChildren).length<5){
                        addChild()
                    }
                }
            }}>
                    <div className="children-content-header">
                        <div className="children-content-header__chapter">
                        Дети (макс. 5)
                        </div>  
                        { Object.values(stateChildren).length<5 && 
                        <div className="children-content-header__add-child" onClick={()=>{  addChild()}}>
                            <img src={Plus} alt="Logo" width="24px" height="24px" className="children-content-header__add-child__logo"/>
                                <div className="children-content-header__add-child__chapter"  >Добавить ребенка</div>  
                        </div>  
                        }
                    </div>    
                    <div className="children-content-data">
                        {
                        Object.entries(stateChildren).map((childEl,index)=>
                            <div className="children-content-data-row" key={index}>
                                <Row child={childEl[1]} idChild={childEl[0]} /> 
                            </div>)
                        }
                    </div>
                    <div className="children-content__btn-save" onClick={()=>{ history.push('/preview')}}>
                        Сохранить
                    </div>
            </div>
            )
        
}
//<Row child={childEl[1]} idChild={childEl[0]} changeChild={changeChild} deleteChild={deleteChild}/> 
export default PoolChildren