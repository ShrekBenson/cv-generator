import moment from "moment";
import "./education.css";

export default function EducationSection({ data }) {
  return (
    <ul className="school-list">
      {data.map((info) => (
        <li key={info.id}>
          <div className="school-info">
            <h3>{!info.school ? "[University Name]" : info.school}</h3>
            <p className="location">{info.location}</p>
          </div>
          <div className="major-info">
            <h3 className="major-info__title">
              {!info.major
                ? "[Degree Information]"
                : `${info.degree} of ${info.major}`}
            </h3>
            <p className="dates">
              {!info.startDate || !info.endDate
                ? "[Date Start - End Date]"
                : `${moment(info.startDate, "YYYY-MM-DD").format("MMM YYYY")} - ${moment(
                    info.endDate, "YYYY-MM-DD"
                  ).format("MMM YYYY")}`}
            </p>
          </div>
        </li>
      ))}
    </ul>
  );
}
