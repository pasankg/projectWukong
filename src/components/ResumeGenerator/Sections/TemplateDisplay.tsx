import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../../hooks";
import { templates } from "../../../constants/Templates";

const TemplateDisplay: React.FC = () => {
  const selectedTemplateId = useSelector(
    (state, RootState) => state.template.selectedTemplateId
  );
  const selectedTemplate = templates.find(
    (template) => template.id === selectedTemplateId
  );

  if (!selectedTemplate) {
    return <p>Please select a template</p>;
  }

  return <div>{selectedTemplate.content}</div>;
};

export default TemplateDisplay;
