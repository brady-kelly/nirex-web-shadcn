/** biome-ignore-all lint/suspicious/noExplicitAny: <explanation> */
import { camelToTitleCase } from "@/lib/formatting";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Field, FieldContent, FieldError, FieldLabel } from "../ui/field";

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
        <div>
            <Field data-invalid={sp.invalid} orientation="horizontal" className="grid grid-cols-[120px_450px] gap-4">
                <FieldContent>
                    <FieldLabel htmlFor={sp.id}>{sp.label}</FieldLabel>
                </FieldContent>
                <FieldContent>
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
                    {sp.invalid && (
                        <FieldError>{formState.errors.name[0]}</FieldError>
                    )}
                </FieldContent>
            </Field>
        </div >
    );
}
