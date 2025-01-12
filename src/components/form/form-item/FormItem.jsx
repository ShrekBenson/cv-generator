import { useState } from "react";
import "./form_item.css";

import arrowIcon from "../../../assets/icons/down_arrow.svg";

export default function FormItem({ children, id, title, subtitle }) {
  const [hidden, setHidden] = useState(true);

  function showForm() {
    const hiddenForm = document.getElementById(id);
    const hiddenFormInfo = hiddenForm.querySelector('.form-item-info');
    const arrowButton = hiddenForm.querySelector(".form-item-button");

    hiddenForm.classList.add('disappear-l');
    hiddenFormInfo.classList.add('disappear-l');
    arrowButton.classList.remove('rotate-90');

    setTimeout(() => setHidden(false), 450);
  }

  function hideForm() {
    const form = document.querySelector('.input-section__fields');
    form.classList.remove('show-r');
    form.classList.add('disappear-l');

    setTimeout(() => setHidden(true), 450);
  }

  return (
    <>
      {hidden ? (
        <div id={id} className="input-section__fields--hidden">
          <div className="form-item-info">
            <h2>{title}</h2>
            <p>{subtitle}</p>
          </div>
          <button className="form-item-button rotate-90" onClick={showForm}>
            <img src={arrowIcon} alt="Show form" />
          </button>
        </div>
      ) : (
        <div className="input-section__fields show-r">
          <div className="edit-form-title">
            <h2>Edit information</h2>
            <button className="form-item-button" onClick={hideForm}>
              <img src={arrowIcon} alt="Show form" />
            </button>
          </div>

          { children }
        </div>
      )}
    </>
  );
}
