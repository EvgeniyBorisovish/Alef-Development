import { useState } from "react"

export default function useChildren(initialState){
    const [stateChildren, setState] = useState({})
    const addChild = (name,age)=>{
        setState({...stateChildren,[Object.keys(stateChildren).length+1]:{name,age}})
    }

    const changeChild = (id,propName,propValue)=>{
        setState({...stateChildren,[id]:{...stateChildren[id],[propName]:propValue}})
    }

    const deleteChild = (id)=>{
        if (delete stateChildren[id] ){
            setState({...stateChildren})
        }
    }


    return {
        stateChildren,
        addChild,
        changeChild,
        deleteChild
    }

}
