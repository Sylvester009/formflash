import {Fields} from '@/data/fields';
import {
  Blocks,
  Type,
  FileText,
  ChevronDown,
  Circle,
  CheckSquare,
  Calendar,
  Clock,
  Upload,
  Star,
  SlidersHorizontal,
  Heading1,
  Minus,
  EyeOff,
  Calculator,
  PenTool,
  ListChecks,
  Mail,
  Phone,
  Hash,
  LayoutTemplate,
} from 'lucide-react';

export const fieldIcons: Record<string, any> = {
  short_text: Type,
  long_text: FileText,
  email: Mail,
  phone: Phone,
  number: Hash,

  dropdown: ChevronDown,
  radio: Circle,
  checkbox: CheckSquare,
  multi_select: ListChecks,

  date: Calendar,
  time: Clock,
  datetime: Calendar,

  file_upload: Upload,
  image_upload: Upload,

  rating: Star,
  slider: SlidersHorizontal,
  nps: SlidersHorizontal,

  heading: Heading1,
  paragraph: FileText,
  divider: Minus,
  page_break: LayoutTemplate,

  signature: PenTool,
  hidden: EyeOff,
  calculation: Calculator,
};

type selectedProps = {
  setSelected: React.Dispatch<React.SetStateAction<string>>;
};

export default function Fieldbar({setSelected}: selectedProps) {
  return (
    <aside className="w-panel-width-left bg-surface-container-lowest border-r border-outline-variant flex flex-col h-full z-40">
      <div className="p-stack-lg border-b border-outline-variant">
        <div className="flex items-center gap-stack-sm mb-stack-sm">
          <Blocks className="text-primary" />
          <h2 className="font-headline-sm text-headline-sm font-bold text-on-surface">
            Fields
          </h2>
        </div>
        <p className="font-body-md text-body-md  text-primary/80">
          <span>
            <em className="text-outline-variant">Pro tip:</em>
          </span>
          Drag elements to the canvas
        </p>
      </div>
      <div className="flex-1 overflow-y-auto p-stack-md space-y-stack-md">
        <div className="space-y-stack-sm">
          {Fields.map(group => (
            <div key={group.category} className="space-y-2">
              {/* Category Title */}
              <h3 className="text-sm font-bold text-secondary">
                {group.category}
              </h3>

              {/* Fields */}
              <div className="grid grid-cols-1 gap-2">
                {group.fields.map(field => {
                  const Icon = fieldIcons[field.type] ?? LayoutTemplate;
                  return (
                    <div
                      key={field.label}
                      onClick={() => setSelected(field.type)}
                      className="group flex items-center gap-3 p-3 bg-surface-container-low border border-outline-variant rounded hover:border-primary hover:bg-surface-bright transition-all cursor-grab active:cursor-grabbing"
                    >
                      <Icon className="w-4 h-4 text-secondary group-hover:text-primary" />

                      <span className="font-body-md text-body-md capitalize">
                        {field.label.replace('_', ' ')}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </aside>
  );
}
