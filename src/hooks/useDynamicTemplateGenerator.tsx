import { map, isArray, isObject, uniqueId } from "lodash";
import { Stack } from "@mui/system";
import { TEMPLATE_01 } from "../constants/Templates";
import { Typography } from "../components/shared/ui";

const useDynamicTemplateGenerator = () => {
  const getElement = (type: unknown) => {
    switch (type) {
      case "row":
        return Stack;
      case "column":
        return Stack;
      case "typography":
        return Typography;
      default:
        return null;
    }
  };

  const createComponent = (row: any) => {  //TODO - type needs to defined
    const { type, children, input, ...rest } = row;
    let content = null;

    if (!type) return null; //if error is config, algo fallback

    const ParentElement = getElement(type);
    if (!ParentElement) return null;

    if (isArray(children)) {
      content = map(children, (child, index) => createComponent(child));
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

  return createComponent(TEMPLATE_01);
};

export default useDynamicTemplateGenerator;
