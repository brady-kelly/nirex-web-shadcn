/** biome-ignore-all lint/suspicious/noArrayIndexKey: <explanation> */
import { type FormSelectItem, getSafeInputProps } from "@/lib/formUtils";
import { Field, FieldContent, FieldLabel } from "../ui/field";
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "../ui/select";

export interface FormSelectProps {
    name: string;
    label?: string;
    value?: string;
    items?: FormSelectItem[];
    placeHolder?: string;
    formState: any;
}

export function FormSelect({ name, items, value, label, placeHolder, formState }: FormSelectProps) {
    const sp = getSafeInputProps(name, undefined, label, placeHolder, value, formState, items);
    return (
        <Field data-invalid={sp.invalid} orientation="horizontal" className="grid grid-cols-[120px_450px] gap-4">
            <FieldContent className="pt-1.5">
                <FieldLabel htmlFor={sp.id}>{sp.label}</FieldLabel>
            </FieldContent>
            <FieldContent>
                <Select value={sp.val}>
                    <SelectTrigger className="w-45">
                        <SelectValue placeholder={sp.placeHolder} />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectGroup>
                            <SelectLabel>{sp.label}</SelectLabel>
                            {sp.items.map((item, index) =>
                                <SelectItem key={index} value={item.value}>{item.text}</SelectItem>
                            )}
                        </SelectGroup>
                    </SelectContent>
                </Select>
            </FieldContent>
        </Field>
    );
}