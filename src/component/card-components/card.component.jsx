import "./card.style.scss";
import { BsFillCheckCircleFill, BsFillTrashFill } from "react-icons/bs";
export default function Card({ shop, click }) {
  let description = shop.description.slice(0, 20);
  return (
    <div onClick={click}>
      <div className={"card-item"}>
        <div className={"card-info-delete"}>
          <p onClick={click}>{shop.mainItem}</p>
          <p onClick={click}>&#8358;{shop.itemPrice}</p>
          <div>
            <BsFillCheckCircleFill className={"icons"} />
            <BsFillTrashFill className={"icons"} />
          </div>
        </div>
        <div className={"description"}>
          <p onClick={click}>{`${description}...`}</p>
        </div>
      </div>
    </div>
  );
}
