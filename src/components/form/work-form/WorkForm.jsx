import { useState } from "react";
import Field from "../../field/Field";
import "./work_form.css";
import FormItem from "../form-item/FormItem";

export default function WorkForm({ data, onChange = () => {} }) {
  const [hidden, setHidden] = useState(true);

  function showForm() {
    setHidden(true);
  }

  return (
    <>
      <div className="form__title">
        <h1>Work Experiencie</h1>
      </div>
      
      <div className="input-section">
        <FormItem id={data.id} title={data.employer} subtitle={data.position}>
          <Field
            id="employer"
            type="text"
            value={data.employer}
            onChange={onChange}>
            Employer
          </Field>

          <Field
            id="location"
            type="text"
            value={data.location}
            onChange={onChange}>
            Location
          </Field>

          <Field
            id="position"
            type="text"
            value={data.position}
            onChange={onChange}>
            Position
          </Field>

          <div className="date-fields">
            <Field
              id="startDate"
              type="date"
              value={data.startDate}
              onChange={onChange}>
              Start Date
            </Field>

            <Field
              id="endDate"
              type="date"
              value={data.endDate}
              onChange={onChange}>
              End Date (Expected)
            </Field>        
          </div>
        </FormItem>
      </div>
    </>
  );
}
