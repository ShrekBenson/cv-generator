import './menu.css'

import PersonalIcon from '../../assets/icons/personal_info.svg'
import EducationIcon from '../../assets/icons/education.svg'
import WorkIcon from '../../assets/icons/work_history.svg'

export default function Menu({callback = ()=>{}}) {
  return (
    <>
      <div className="menu">
        <ul className="nav">
          <li className="nav__opt" title="Personal information">
            <button id='personal' className="nav__button active" aria-label="Personal information" onClick={callback}>
              <img
                className="nav__icon"
                src={PersonalIcon}
                alt="Personal information"
              />
              <div className="bg"></div>
            </button>
          </li>
          <li className="nav__opt" title="Education">
            <button id='education' className="nav__button" aria-label="Education" onClick={callback}>
              <img
                className="nav__icon"
                src={EducationIcon}
                alt="Education"
              />
              <div className="bg"></div>
            </button>
          </li>
          <li className="nav__opt" title="Work history">
            <button id='work' className="nav__button" aria-label="Work history" onClick={callback}>
              <img
                className="nav__icon"
                src={WorkIcon}
                alt="Work history"
              />
              <div className="bg"></div>
            </button>
          </li>
        </ul>
      </div>
    </>
  );
}
