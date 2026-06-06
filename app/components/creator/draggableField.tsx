import { useDraggable } from "@dnd-kit/core";

type Props = {
  field: any;
  Icon: any;
  setSelected: React.Dispatch<React.SetStateAction<string>>;
};

export default function DraggableField({
  field,
  Icon,
  setSelected,
}: Props) {
  const { attributes, listeners, setNodeRef } = useDraggable({
    id: field.type,
    data: {
      source: "toolbox",
      fieldType: field.type,
      fieldDefinition: field,
    },
  });

  return (
    <div
      ref={setNodeRef}
      {...listeners}
      {...attributes}
      onClick={() => setSelected(field.type)}
      className="group flex items-center gap-3 p-3 bg-surface-container-low border border-outline-variant rounded hover:border-primary hover:bg-surface-bright transition-all cursor-grab active:cursor-grabbing"
    >
      <Icon className="w-4 h-4 text-secondary group-hover:text-primary" />

      <span className="font-body-md text-body-md capitalize">
        {field.label.replace("_", " ")}
      </span>
    </div>
  );
}