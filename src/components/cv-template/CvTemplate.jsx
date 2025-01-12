import EducationSection from "../cv-template-sections/education/EducationSection";
import PersonalSection from "../cv-template-sections/personal/PersonalSection";
import WorkHistory from '../cv-template-sections/work/WorkHistory'
import "./cv_template.css";

export default function CvTemplate({ data }) {
  return (
    <>
      <div className="template text-new-roman">
        <div className="content">
          {/* Personal Info */}
          <PersonalSection data={data.personal}></PersonalSection>
          {/* Education */}
          <section className="education">
            <div className="section-title">
              <h2>Education</h2>
            </div>
            <EducationSection data={data.education}></EducationSection>
          </section>
          {/* Work History */}
          <section className="work">
            <div className="section-title">
              <h2>Work history</h2>
            </div>
            <WorkHistory data={data.work}></WorkHistory>
          </section>
        </div>
      </div>
    </>
  );
}
