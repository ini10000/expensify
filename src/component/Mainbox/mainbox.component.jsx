import Input from "../form/form.component";
import Card from "../card-components/card.component";
import Navigation from "../routes/navigation-menu/navigation.component";
import './mainbox.scss'
import {Outlet, Route, Routes} from "react-router-dom";
import Food from "../routes/links/food.links";
import Books from "../routes/links/books.links";
import Clothes from "../routes/links/clothes.links";
import Gadget from "../routes/links/gadget.links";
import React from "react";

export default function MainBox ({items,submit,handleChange}){
   /* function changeList(){
        if(items.category === 'Food'){
            return
        }
    }*/

    return(
        <div className={'main-box'}>
            <Input submitFunction = {submit} handleChangeFunction ={handleChange}/>
            <div>
                {items.map((shop)=>{
                    return (
                        <div>

                            <div>
                                <Card shop={shop}/>
                            </div>
                        </div>

                    )
                })}
            </div>
            <Outlet/>
        </div>

    )
}