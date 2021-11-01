import PersonalForm from '../pages/PersonalForm'
import Preview from '../pages/Preview'

export const routeNames=  {
personalForm : {path:'/',nameLink:"Форма"},
preview : {path:'/preview',nameLink:"Превью"},
}

export const routes = [
    {path:routeNames.personalForm.path,exact:true,component:PersonalForm},
    {path:routeNames.preview.path,exact:true,component:Preview}

]
