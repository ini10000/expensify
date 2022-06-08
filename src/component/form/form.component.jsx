import "./form.sytles.scss";
import Button from "../button/button.component";

export default function Input({ submitFunction, handleChangeFunction }) {
  return (
    <form onSubmit={submitFunction}>
      <div className={"form-div"}>
        <div className={"flex-input"}>
          <input
            className={"text-input"}
            placeholder={"Item"}
            onChange={handleChangeFunction}
            name={"mainItem"}
          />
          <input
            className={"text-input"}
            placeholder={"Price"}
            onChange={handleChangeFunction}
            name={"itemPrice"}
          />
        </div>
        <div className={"flex-input-2"}>
          <textarea
            maxLength={"100"}
            className={"text-input"}
            placeholder={"Description"}
            onChange={handleChangeFunction}
            name={"description"}
          />
          <select
            className={"text-input"}
            placeholder={"Category"}
            onChange={handleChangeFunction}
            name={"category"}
          >
            <option value={""} disabled selected hidden>
              select category...
            </option>
            <option>Food</option>
            <option>Book</option>
            <option>Gadget</option>
            <option>Clothes</option>
          </select>
        </div>
      </div>
      <Button />
    </form>
  );
}
