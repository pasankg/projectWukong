import React from 'react';
import { useDispatch } from 'react-redux';
import { setTemplate } from '../../../hooks';
import { templates } from '../../../constants/Templates';

const TemplateDropdown: React.FC = () => {
  const dispatch = useDispatch();

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch(setTemplate(event.target.value));
  };

  return (
    <select onChange={handleChange}>
      <option value="">Select a template</option>
      {templates.map(template => (
        <option key={template.id} value={template.id}>
          {template.label}
        </option>
      ))}
    </select>
  );
};

export default TemplateDropdown;