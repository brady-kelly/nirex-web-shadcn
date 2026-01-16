/** biome-ignore-all lint/suspicious/noExplicitAny: <explanation> */
import { camelToTitleCase } from "@/lib/formatting";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Field, FieldContent, FieldError, FieldLabel } from "../ui/field";
import { getFormState, getSafeInputProps } from "@/lib/formUtils";

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

export function FormInputField({ name, value, label, type, placeHolder, required, disabled, autoComplete, formState }: FormInputProps) {
    const sp = getSafeInputProps(name, type, label, placeHolder, value, formState);
    return (
        <div>
            <Field data-invalid={sp.invalid} orientation="horizontal" className="grid grid-cols-[120px_450px] gap-4">
                <FieldContent className="pt-1.5">
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
                        <FieldError>{sp.formErr}</FieldError>
                    )}
                </FieldContent>
            </Field>
        </div >
    );
}
