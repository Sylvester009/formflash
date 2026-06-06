import {Grip, Plus} from 'lucide-react';
import Theme from './theme';
import { useDroppable } from '@dnd-kit/core';
import { CanvasField } from '@/app/page';

type CanvasProps = {
  fields: CanvasField[];
};

export default function Canvas({ fields }: CanvasProps) {
  const { setNodeRef } = useDroppable({
    id: "canvas-dropzone",
  });

  return (
    <section className="flex-1 overflow-y-auto bg-background relative flex flex-col items-center">
      <div className="sticky top-0 w-full flex justify-center py-4 z-30 bg-background/80 backdrop-blur-md">
        <div className="flex items-center gap-2 bg-surface-container-lowest border border-outline-variant rounded-full px-4 py-2 shadow-sm">
          <button className="flex items-center justify-center w-8 h-8 rounded-full bg-primary text-on-primary font-bold text-xs">
            1
          </button>
          <div className="w-8 h-px bg-outline-variant"></div>
          <button className="flex items-center justify-center w-8 h-8 rounded-full bg-surface-container text-on-surface-variant font-bold text-xs hover:bg-surface-container-high transition-colors">
            2
          </button>
          <div className="w-8 h-px bg-outline-variant"></div>
          <button className="flex items-center justify-center w-8 h-8 rounded-full border border-dashed border-outline-variant text-on-surface-variant hover:border-primary hover:text-primary transition-all">
            <Plus className="text-on-surface-variant/50 text-body-lg" />
          </button>
        </div>
      </div>
      
      <div
      ref={setNodeRef}
      className="w-full max-w-[800px] px-gutter pb-stack-lg flex flex-col gap-stack-lg min-h-screen">

        {fields.length === 0 && (
          <div className="border-2 border-dashed border-outline-variant rounded-xl p-8 flex flex-col items-center justify-center gap-2 text-on-surface-variant">
            Drop a field here
          </div>
        )}
        
        {fields.map((field) => (
          <div
            key={field.id}
            className="bg-surface-container-lowest border border-outline-variant rounded-xl p-6"
          >
            <p className="font-bold">{field.label}</p>
            <p className="text-sm text-on-surface-variant">
              {field.fieldType}
            </p>
          </div>
        ))}
      </div>
       
      <Theme />
    </section>
  );
}
