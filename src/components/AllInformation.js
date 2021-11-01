import React from 'react';
import { useContext } from 'react';
import { Context } from '../Context';


function AllInformation(){
    const [userNameHook,userAgeHook,childrenApiState] = useContext(Context);
    
    const {stateChildren}  = childrenApiState

  return(<div className="personal-data">
            <div className="personal-data-content table-conteiner">
                <table cellPadding="10" className="table-conteiner-max_width">
                <caption className="personal-data-content__chapter">Сводная информация</caption>
                
                <thead>
                <tr className="table-conteiner__row table-conteiner__row-color-grey" key={0}>
                    <th className="personal-data-content-pokazatel__chapter">Имя</th>
                    <th className="personal-data-content-pokazatel__chapter">Возраст</th>
                </tr>
                </thead>
                <tbody>
                <tr className="table-conteiner__row" key={1}>
                    <td className="personal-data-content-pokazatel__value">{userNameHook.state}</td>
                    <td className="personal-data-content-pokazatel__value">{userAgeHook.state}</td>
                </tr>
                <tr className="table-conteiner__row" key={2}>
                        <td className="personal-data-content-pokazatel__value" colSpan="2">Дети:</td>
                </tr>
                <tr className="table-conteiner__row table-conteiner__row-color-grey" key={3}>
                    <th className="personal-data-content-pokazatel__chapter">Имя</th>
                    <th className="personal-data-content-pokazatel__chapter">Возраст</th>
                </tr>
                
                {
                Object.values(stateChildren).map((child,index)=>(
                    <tr className="table-conteiner__row" key={4+index}>
                        <td className="personal-data-content-pokazatel__value">{child.name}</td>
                        <td className="personal-data-content-pokazatel__value">{child.age}</td>
                    </tr>
                    )
                  )
                }
                </tbody>
                </table>
            </div>
         </div>)
    

}

export default AllInformation