export type FieldAttributes = {
    [key: string]: any;
};

export interface Field {
    type: string;
    label: string;
    icon: string;
    attributes: FieldAttributes;
}

export interface FieldGroup {
    category: string;
    fields: Field[];
}

export type FieldType = FieldGroup[];