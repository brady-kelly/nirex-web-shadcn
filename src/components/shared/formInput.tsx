import { camelToTitleCase } from "@/lib/formatting";

export interface FormInputProps {
    name: string;
    value?: string,
    label?: string;
    placeHolder?: string;
    type?: "email" | "password" | "text";
    required?: boolean
}

export function FormInput({ name, value, label, type, placeHolder, required }: FormInputProps) {
    const sp = {
        id: `input_for_${name}`,
        type: type || "text",
        label: label || camelToTitleCase(name),
        placeHolder: placeHolder || label || name,
        val: value ?? ""
    };
    const lbl = (<label htmlFor={sp.id}>{sp.label}</label>);
    if (required) {
        return (
            <>
                {lbl}
                <input type={sp.type} id={sp.id} name={name} defaultValue={sp.val} placeholder={sp.placeHolder} required />
            </>
        );
    }
    return (
        <>
            {lbl}
            <input type={sp.type} id={sp.id} name={name} defaultValue={sp.val} placeholder={sp.placeHolder} required />
        </>
    );
}