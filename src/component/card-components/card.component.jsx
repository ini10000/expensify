
import './card.style.scss'
import {AiFillCloseCircle, BsFillCheckCircleFill, BsFillTrashFill} from "react-icons/all";
import {Link} from "react-router-dom";
import {Fragment} from "react";
export default function Card({shop}){
    let description = shop.description.slice(0,20)
    function checkCardType(){
        if(shop.category=== 'food'){
            return(
                <Fragment>
                    <p>{shop.mainItem}</p>
                    <p>{shop.itemPrice}</p>
                </Fragment>


            )
        }
        else if(shop.category==='book'){
            return(
                <Fragment>
                    <p>{shop.mainItem}</p>
                    <p>{shop.itemPrice}</p>
                </Fragment>
            )
        }
    }
    return(
        <div>
                <div className={'card-item'} >
                    <div className={'card-info-delete'}>
                        {checkCardType}
                        <div>
                            <BsFillCheckCircleFill className={'icons'}/>
                            <BsFillTrashFill className={'icons'}/>
                        </div>

                    </div>
                    <div className={'description'}>
                        <p>{`${description}...`}</p>
                    </div>

                </div>


        </div>


    )
}