/** biome-ignore-all lint/suspicious/noExplicitAny: <explanation> */
import { camelToTitleCase } from "@/lib/formatting";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Field, FieldLabel } from "../ui/field";

export interface FormInputProps {
    name: string;
    value?: string,
    label?: string;
    placeHolder?: string;
    type?: "email" | "password" | "text";
    required?: boolean;
    disabled?: boolean;
    isInvalid?: boolean;
    autoComplete?: string;
    formState: any;
}

function getFormData(state: any, fieldName: string) {
    return {
        value: state.values?.[fieldName],
        errors: state.errors?.[fieldName] as string[] | undefined
    };
}

export function FormInputField({ name, value, label, type, placeHolder, required, disabled, autoComplete, formState }: FormInputProps) {
    const form = getFormData(formState, name);
    const sp = {
        id: `input_for_${name}`,
        type: type || "text",
        label: label || camelToTitleCase(name),
        placeHolder: placeHolder || label || name,
        val: form.value ?? value ?? "",
        invalid: !!form.errors?.length
    };
    return (
        <div className="grid grid-cols-2 gap-4">
            <Field data-invalid={sp.invalid}>
                <FieldLabel htmlFor={sp.id}>{label}</FieldLabel>
                <Input
                    type={sp.type}
                    id={sp.id}
                    name={name}
                    defaultValue={sp.val}
                    placeholder={sp.placeHolder}
                    required={required}
                    disabled={disabled}
                    aria-invalid={sp.invalid}
                    autoComplete={autoComplete}
                />
            </Field>
        </div>
    );
}
