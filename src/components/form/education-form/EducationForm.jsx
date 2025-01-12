import Field from "../../field/Field";
import FormItem from "../form-item/FormItem";
import "./education_form.css";

export default function EducationForm({ data, onChange = () => {} }) {
  return (
    <>
      <div className="form__title">
        <h1>Education</h1>
      </div>
      <div className="input-section">
        <FormItem id={data.id} title={data.school} subtitle={data.major}>
          <Field
            id="school"
            type="text"
            value={data.school}
            onChange={onChange}>
            School
          </Field>

          <Field
            id="location"
            type="text"
            value={data.location}
            onChange={onChange}>
            Location
          </Field>

          <Field
            id="degree"
            type="text"
            value={data.degree}
            onChange={onChange}>
            Degree
          </Field>

          <Field id="major" type="text" value={data.major} onChange={onChange}>
            Major
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
