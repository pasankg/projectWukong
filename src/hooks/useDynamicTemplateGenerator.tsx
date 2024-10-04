import { ReactNode, ElementType } from 'react'
import { map, isArray, isObject, uniqueId } from "lodash";
import { Stack } from "@mui/system";
import { TEMPLATE_01, TEMPLATE_02 } from "../constants/Templates";
import { Typography } from "../components/shared/ui";
import { ChildrenRow, ParentRow, TemplateObject } from "../types";
import {Avatar} from '../components/shared/ui/Avatar'
import { ImageDrawer } from "../components/shared/ui/ImageDrawer";

const useDynamicTemplateGenerator = (): ReactNode  => {
  const getElement = (type: string) => {
    switch (type) {
      case "row":
      case "column":
        return Stack;
      case "typography":
        return Typography;
      case "avatar":
        return Avatar;
      case "image":
        return ImageDrawer;
      default:
        return <></>;
    }
  };

  const templateHandler = (data: TemplateObject | TemplateObject[]) => {
    if(isArray(data)) return map(data, (child) => createComponent(child));
    return createComponent(data);
  }

  const createComponent = (row: TemplateObject) => {
    console.log(row);
    
    const { type, children, input, ...rest } = row;
    let content = null;

    if (!type) return null; //if error is config, algo fallback

    const ParentElement = getElement(type) as ElementType;
    if (!ParentElement) return null;

    if (isArray(children)) {
      content = map(children, (child) => createComponent(child));
    } else if (isObject(children)) {
      content = createComponent(children);
    } else {
      content = input;
    }

    return (
      <ParentElement key={uniqueId("dynamic_")} {...rest}>
        {content}
      </ParentElement>
    );
  };

  return templateHandler(TEMPLATE_01);
  // return templateHandler(TEMPLATE_02);
};

export default useDynamicTemplateGenerator;
