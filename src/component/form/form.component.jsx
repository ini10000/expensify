import './form.sytles.scss'
import {Fragment} from "react";
import Button from "../button/button.component";


export default function Input ({submitFunction, handleChangeFunction}){


    return(
        <form onSubmit={submitFunction}>
            <div className={'form-div'}>
                <div className={'flex-input'}>
                    <input className={'text-input'} placeholder={'item'} onChange={handleChangeFunction} name= {'mainItem'} />
                    <input className={'text-input'} placeholder={'price'} onChange={handleChangeFunction} name={'itemPrice'}/>
                </div>
                <div className={'flex-input-2'}>
                    <textarea maxLength={'100'} className={'text-input'} placeholder={'description'} onChange={handleChangeFunction} name={'description'}/>
                        <select  className={'text-input'} placeholder={'category'} onChange={handleChangeFunction} name={'category'} >
                            <option value={''} disabled selected hidden>select category...</option>
                            <option>Food</option>
                            <option>Book</option>
                            <option>Gadget</option>
                            <option>Clothes</option>
                        </select>

                </div>
            </div>
            <Button/>

        </form>
    )
}