import { Outlet, Link } from "react-router-dom";
import {BsPhoneVibrateFill, GiClothes, ImBooks, MdFastfood} from "react-icons/all";
import './navigation.styles.scss'

export default function Navigation (){
    return(
        <div>
            <Outlet/>
            <div className={'navigation'}>
                <Link to={'/food'}><MdFastfood className={'icons'}/></Link>
                <Link to={'/books'}><ImBooks className={'icons'}/></Link>
                <Link to={'/clothes'}><GiClothes className={'icons'}/></Link>
                <Link to={'/gadgets'}><BsPhoneVibrateFill className={'icons'}/></Link>
            </div>

        </div>

    )
}