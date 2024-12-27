import { useState } from "react"
import PersonalInfo from "../personal-form/PersonalInfo";
import './container.css';
import GitIcon from '../../assets/icons/git.svg';

const curriculum = {
  name: 'Diego Antonio',
  lastname: 'Angel Rodriguez',
  email: 'diego@email.com',
  phone: '1278459635'
}

export function Container() {
  const [data, setData] = useState(curriculum);

  function updatePersonalInfo(e) {
    const key = e.target.id;
    setData({...data, [key]:e.target.value});
  }

  return (
    <>
      <div className="container">        
        <div className="cv-input">
          <div className="menu">
            <ul>
              <li>item-1</li>
              <li>item-2</li>
              <li>item-3</li>
              <li>item-4</li>
              <li>item-5</li>
            </ul>
          </div>
          <div className="forms">
            <PersonalInfo
              data={data}
              onChange={updatePersonalInfo}            
            ></PersonalInfo>

            <a href="#" id="gitRepository">
              <img src={GitIcon} alt="My git repository" />
              <span>See the repo here.</span>
            </a>
          </div>
        </div>
        
        {/* Preview of CV */}
        <div className="cv-template">
          
        </div>
      </div>
    </>
  )
}