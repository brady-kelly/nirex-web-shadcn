export interface FieldSetProps {
    heading: string;
    children: React.ReactNode
}

export function FieldSet({ heading, children }: FieldSetProps) {
    return (
        <fieldset>
            <legend><h2>{heading}</h2></legend>
            <div className="flex flex-row flex-wrap gap-y-2">
                {children}
            </div>
        </fieldset>
    );
}