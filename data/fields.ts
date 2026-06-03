import { FieldType } from "@/types/fields";


export const Fields: FieldType = [
    {
        "category": "Basic Fields",
        "fields": [
            {
                type: "short_text",
                label: "Short Text",
                icon: "Type",
                attributes: {
                    placeholder: true,
                    defaultValue: true,
                    maxLength: true,
                    minLength: true,
                    required: true
                }
            }, {
                type: "long_text",
                label: "Long Text",
                icon: "FileText",
                attributes: {
                    placeholder: true,
                    defaultValue: true,
                    maxLength: true,
                    rows: true,
                    required: true
                }
            }, {
                type: "email",
                label: "Email",
                icon: "Mail",
                attributes: {
                    placeholder: true,
                    defaultValue: true,
                    required: true,
                    validation: "email"
                }
            }, {
                type: "phone",
                label: "Phone Number",
                icon: "Phone",
                attributes: {
                    placeholder: true,
                    defaultValue: true,
                    required: true,
                    countryCode: true
                }
            }, {
                type: "number",
                label: "Number",
                icon: "Hash",
                attributes: {
                    min: true,
                    max: true,
                    step: true,
                    defaultValue: true,
                    required: true
                }
            }]
    },
    {
        "category": "Choices",
        "fields": [{
            type: "radio",
            label: "Radio",
            icon: "Circle",
            attributes: {
                options: true,
                defaultSelected: true,
                required: true,
                layout: ["vertical", "horizontal"]
            }
        },
        {
            type: "checkbox",
            label: "Checkbox",
            icon: "CheckSquare",
            attributes: {
                options: true,
                minSelected: true,
                maxSelected: true,
                required: true
            }
        },
        {
            type: "dropdown",
            label: "Dropdown",
            icon: "ChevronDown",
            attributes: {
                options: true,
                searchable: true,
                defaultValue: true,
                required: true
            }
        },
        {
            type: "multi_select",
            label: "Multi Select",
            icon: "ListChecks",
            attributes: {
                options: true,
                searchable: true,
                minSelected: true,
                maxSelected: true,
                required: true
            }
        }]
    },
    {
        "category": "Date & Time",
        "fields": [{
            type: "date",
            label: "Date",
            icon: "Calendar",
            attributes: {
                minDate: true,
                maxDate: true,
                required: true
            }
        },
        {
            type: "time",
            label: "Time",
            icon: "Clock",
            attributes: {
                format24h: true,
                required: true
            }
        },
        {
            type: "datetime",
            label: "Date & Time",
            icon: "Calendar",
            attributes: {
                minDate: true,
                maxDate: true,
                timeZone: true,
                required: true
            }
        }]
    },
    {
        "category": "Uploads",
        "fields": [{
            type: "file_upload",
            label: "File Upload",
            icon: "Upload",
            attributes: {
                fileTypes: true,
                maxSizeMB: true,
                multiple: true,
                required: true
            }
        },
        {
            type: "image_upload",
            label: "Image Upload",
            icon: "Image",
            attributes: {
                maxSizeMB: true,
                multiple: true,
                compression: true,
                required: true
            }
        }]
    },
    {
        "category": "Feedback",
        "fields": [{
            type: "rating",
            label: "Star Rating",
            icon: "Star",
            attributes: {
                maxStars: true,
                allowHalf: true,
                required: true
            }
        },
        {
            type: "slider",
            label: "Slider",
            icon: "Sliders",
            attributes: {
                min: true,
                max: true,
                step: true,
                showValue: true,
                required: true
            }
        },
        {
            type: "nps",
            label: "NPS Score",
            icon: "BarChart",
            attributes: {
                scale: 10,
                required: true
            }
        }]
    },
    {
        "category": "Layout",
        "fields": [{
            type: "heading",
            label: "Heading",
            icon: "Heading1",
            attributes: {
                text: true,
                level: [1, 2, 3]
            }
        },
        {
            type: "paragraph",
            label: "Paragraph",
            icon: "FileText",
            attributes: {
                text: true
            }
        },
        {
            type: "divider",
            label: "Divider",
            icon: "Minus",
            attributes: {}
        },
        {
            type: "page_break",
            label: "Page Break",
            icon: "Layout",
            attributes: {
                label: true
            }
        }]
    },
    {
        "category": "Advanced",
        "fields": [{
            type: "signature",
            label: "Signature",
            icon: "PenTool",
            attributes: {
                required: true,
                penColor: true
            }
        },
        {
            type: "hidden",
            label: "Hidden Field",
            icon: "EyeOff",
            attributes: {
                defaultValue: true,
                dynamicValue: true
            }
        },
        {
            type: "calculation",
            label: "Calculation",
            icon: "Calculator",
            attributes: {
                formula: true,
                precision: true
            }
        }]
    }
]