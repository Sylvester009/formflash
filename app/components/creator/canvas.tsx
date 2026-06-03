import {Grip, Plus} from 'lucide-react';
import Theme from './theme';

export default function Canvas() {
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
      <div className="w-full max-w-[800px] px-gutter pb-stack-lg flex flex-col gap-stack-lg">
        <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-8 relative group transition-all">
          <h1 className="font-display-lg text-display-lg text-on-surface mb-2 outline-none">
            Customer Feedback Form
          </h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant outline-none">
            We'd love to hear your thoughts on our latest update.
          </p>
          <div className="absolute right-4 top-1/4 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity">
            <Grip className=" text-outline" />
          </div>
        </div>
        <div className="bg-surface-container-lowest border-l-4 border-primary border-t border-r border-b rounded-xl p-6 relative shadow-sm ring-1 ring-primary/10">
          <div className="absolute right-4 top-1/4 -translate-y-1/2">
            <Grip className=" text-primary" />
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex justify-between items-center">
              <label className="font-body-md text-body-md font-bold flex items-center gap-2">
                Email Address
                <span className="bg-surface-container-high text-on-surface-variant px-1.5 py-0.5 rounded-sm font-label-caps text-[10px] uppercase">
                  Required
                </span>
              </label>
              <div className="flex gap-2">
                <button
                  className="material-symbols-outlined text-outline hover:text-primary p-1"
                  data-icon="content_copy"
                ></button>
                <button
                  className="material-symbols-outlined text-outline hover:text-error p-1"
                  data-icon="delete"
                ></button>
              </div>
            </div>
            <input
              className="w-full bg-surface-bright border border-outline-variant rounded-lg px-4 py-3 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all"
              disabled
              placeholder="e.g. alex@example.com"
              type="email"
            />
          </div>
        </div>

        <div className="border-2 border-dashed border-outline-variant rounded-xl p-8 flex flex-col items-center justify-center gap-2 text-on-surface-variant hover:border-primary hover:text-primary transition-all cursor-pointer group">
          <span
            className="material-symbols-outlined text-display-lg group-hover:scale-110 transition-transform"
            data-icon="add_circle"
          ></span>
          <p className="font-label-caps text-label-caps uppercase font-bold tracking-widest">
            Drop a field here
          </p>
        </div>
      </div>
      <Theme />
    </section>
  );
}
