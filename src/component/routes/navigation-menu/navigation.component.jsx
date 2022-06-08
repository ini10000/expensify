import { BsPhoneVibrateFill } from "react-icons/bs";
import { GiClothes } from "react-icons/gi";
import { ImBooks } from "react-icons/im";
import { MdFastfood } from "react-icons/md";
import "./navigation.styles.scss";

export default function Navigation({ filter, items }) {
  return (
    <div className={"navigation-container"}>
      <div className={"navigation"}>
        <div onClick={() => filter("Food")}>
          <MdFastfood className={"icons"} />
        </div>
        <div onClick={() => filter("Book")}>
          <ImBooks className={"icons"} />
        </div>
        <div onClick={() => filter("Clothes")}>
          <GiClothes className={"icons"} />
        </div>
        <div onClick={() => filter("Gadgets")}>
          <BsPhoneVibrateFill className={"icons"} />
        </div>
      </div>
    </div>
  );
}
