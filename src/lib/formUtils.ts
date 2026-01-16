import { camelToTitleCase } from "./formatting";

export type FormSelectItem = {
  value: string;
  text?: string;
};

export function getFormState(state: any, fieldName: string) {
  const basics = {
    value: state.values?.[fieldName],
    errors: state.errors?.[fieldName] as string[] | undefined,
  };
  return basics;
}

export function getSafeInputProps(
  name: string,
  type?: string,
  label?: string,
  placeHolder?: string,
  value?: string,
  formState?: any,
  items?: FormSelectItem[]
) {
  const form = getFormState(formState, name);
  const ev = form.value ?? value ?? "";
  return {
    id: `input_for_${name}`,
    type: type || "text",
    label: label || camelToTitleCase(name),
    placeHolder: placeHolder || label || name,
    val: ev,
    invalid: !!form.errors?.length,
    formErr: form.errors ? form.errors[0] : "",
    items: (items || [{ value: ev, text: ev ?? "" }])?.map((c) => {
      return {
        value: c.value,
        text: c.text,
      };
    }),
  };
}
