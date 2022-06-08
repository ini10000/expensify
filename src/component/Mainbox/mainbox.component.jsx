import Input from "../form/form.component";
import Card from "../card-components/card.component";
import Navigation from "../routes/navigation-menu/navigation.component";
import "./mainbox.scss";
import React, { useState } from "react";

export default function MainBox({
  items,
  submit,
  handleChange,
  filter,
  filtered,
}) {
  const [show, setShow] = useState(false);
  const [description, setDescription] = useState("");
  return (
    <div className={"main-box"}>
      {show ? (
        <p className="desc">{description}</p>
      ) : (
        <Input submitFunction={submit} handleChangeFunction={handleChange} />
      )}
      <div>
        {filtered.map((shop) => {
          return (
            <Card
              click={() => {
                setShow(!show);
                setDescription(shop.description);
              }}
              shop={shop}
            />
          );
        })}
      </div>
      <Navigation filter={filter} items={items} />
    </div>
  );
}
