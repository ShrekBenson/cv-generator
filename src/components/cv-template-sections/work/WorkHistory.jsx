import moment from "moment";
import "./work.css";
import Tasks from "./task/Tasks";

export default function WorkHistory({ data }) {
  return (
    <ul>
      {data.map((info) => (
        <li key={info.id} className="job">
          <div className="job-info">
            <div className="employer">
              <h3>
                {!info.employer ? "[Employer name]" : info.employer}
              </h3>
              <p className="location">
                {!info.location ? "[Location]" : info.location}
              </p>
            </div>
            <div className="position">
              <h3 className="position__title">
                {" "}
                {!info.position ? "[Position title]" : info.position}{" "}
              </h3>
              <p className="position__period">
                {!info.startDate || !info.endDate
                  ? "[Start date] - [End date]"
                  : `${moment(info.startDate, "YYYY-MM-DD").format("MMM YYYY")} - ${moment(
                      info.endDate, "YYYY-MM-DD"
                    ).format("MMM YYYY")}`}
              </p>
            </div>
          </div>
          <div className="job-description">
            <div className="job-description__summary">
              {!info.description ?
                '[Summary sentence stating what you did and the overall results of your work]' :
                info.description}
            </div>
            <div className="job-description__tasks">
              <Tasks tasks={info.tasks}></Tasks>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
}
