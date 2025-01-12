import { useState } from "react"

import CvTemplate from "../cv-template/CvTemplate";
import Menu from "../Menu/Menu";
import Form from "../form/Form";
import './container.css';

import userDefaultData from "../../js/utils/user_default_data";

export function Container() {  
  const [data, setData] = useState(userDefaultData);
  const [section, setSection] = useState('personal');

  function updateData(e) {
    const key = e.target.id;
    const sectionData = data[section];

    setData({...data, [section]:{...sectionData, [key]:e.target.value}});
  }

  function changeSection(e) {    
    const sectionButtons = document.querySelectorAll('.nav__button');
    sectionButtons.forEach(button => {
      if (button.classList.contains('active')) button.classList.remove('active');
      button.id === e.currentTarget.id && button.classList.add('active');
    });

    setSection(e.currentTarget.id);
  }

  return (
    <>
      <div className="container">
        {/* Inputs of data */}
        <div className="cv-input">
          <Menu callback={changeSection}></Menu>
          <Form data={data[section]} activeSection={section}></Form>
        </div>
        
        {/* Preview of CV */}
        <div className="cv-template">
          <CvTemplate data={data}></CvTemplate>
        </div>
      </div>
    </>
  )
}