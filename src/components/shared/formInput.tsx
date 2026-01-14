import { camelToTitleCase } from "@/lib/formatting";
import { Input } from "../ui/input";
import { Label } from "../ui/label";

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
    const lbl = (<Label htmlFor={sp.id}>{sp.label}</Label>);
    if (required) {
        return (
            <div className="grid grid-cols-2 gap-4">
                {lbl}
                <Input type={sp.type} id={sp.id} name={name} defaultValue={sp.val} placeholder={sp.placeHolder} required />
            </div>
        );
    }
    return (
        <div className="grid grid-cols-2 gap-4">
            {lbl}
            <Input type={sp.type} id={sp.id} name={name} defaultValue={sp.val} placeholder={sp.placeHolder} required />
        </div>
    );
}