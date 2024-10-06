import React, { FC } from "react";
import { values, map } from "lodash";
import { Select } from "antd";
import { Stack } from "@mui/system";
import { useDispatch, useSelector } from "react-redux";
import {
  TemplateGeneratorActions,
  TemplateGeneratorSelector,
} from "../../../slices";
import { TEMPLATES } from "../../../constants";

const TemplateDisplay: FC = () => {
  const dispatch = useDispatch();
  const selectedValue = useSelector(
    TemplateGeneratorSelector.getSelectedTemplateId
  );

  const handleOnChange = (value: string) => {
    if (!value) return false;
    dispatch(TemplateGeneratorActions.setSelectedTemplateId(value));
  };

  return (
    <Stack>
      <Select
        value={selectedValue}
        onChange={handleOnChange}
        placeholder="Select a template"
      >
        {map(values(TEMPLATES), (template) => (
          <Select.Option key={template?.id} value={template?.id}>
            {template?.title}
          </Select.Option>
        ))}
      </Select>
    </Stack>
  );
};

export default TemplateDisplay;
