import PersonalInfo from "./personal-form/PersonalForm";
import EducationForm from "./education-form/EducationForm";
import WorkForm from "./work-form/WorkForm";
import RepoLink from "../RepoLink/RepoLink";
import "./form.css";

export default function Form({
  data,
  activeSection = "",
  callback = () => {},
}) {
  const sectionHandlers = {
    personal: () => <PersonalInfo data={data} onChange={callback}></PersonalInfo>,
    education: () => <EducationForm data={data[0]} onChange={callback}></EducationForm>,
    work: () => <WorkForm data={data[0]} onChange={callback}></WorkForm>,
  };

  const selectedSection = sectionHandlers[activeSection];

  return (
    <>
      <div className="form">        
        {selectedSection()}        

        <RepoLink></RepoLink>
      </div>
    </>
  );
}
