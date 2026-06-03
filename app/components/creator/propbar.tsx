import {Fields} from '@/data/fields';
import {Save} from 'lucide-react';

type PropertiesProps = {
  selected: string;
};

export default function Properties({selected}: PropertiesProps) {
  const selectedField = Fields.flatMap(group => group.fields).find(
    field => field.type === selected,
  );

  if (!selectedField) {
    return (
      <aside className="w-panel-width-right bg-surface-container-lowest border-l border-outline-variant flex items-center justify-center">
        <p className="text-body-md text-outline">No field selected</p>
      </aside>
    );
  }

  const attrs = selectedField.attributes;

  return (
    <aside className="w-panel-width-right bg-surface-container-lowest border-l border-outline-variant flex flex-col h-full z-40">
      <div className="p-stack-lg border-b border-outline-variant">
        <div className="flex items-center justify-between mb-stack-sm">
          <h2 className="font-headline-sm text-headline-sm font-bold text-on-surface">
            Properties
          </h2>
          <span className="bg-primary-container text-on-primary-container px-2 py-1 rounded font-label-caps text-[10px] uppercase">
            {selectedField.label}
          </span>
        </div>
      </div>
      <div className="flex-1 overflow-y-auto p-stack-md space-y-10">
        {/* ===== FIELD SETTINGS ===== */}
        <div className="space-y-stack-md">
          <div className="flex items-center justify-between">
            <h3 className="font-label-caps text-label-caps text-outline uppercase tracking-wider">
              Field Settings
            </h3>
          </div>

          <div className="space-y-stack-md">
            {/* FIELD LABEL */}
            <div className="space-y-2">
              <label className="font-body-md text-body-md font-bold">
                Field Label
              </label>
              <input
                className="w-full bg-surface-bright border border-outline-variant rounded px-3 py-2 focus:border-primary focus:ring-1 focus:ring-primary outline-none text-body-md transition-all"
                type="text"
                defaultValue={selectedField.label}
              />
            </div>

            {/* PLACEHOLDER */}
            {attrs?.placeholder && (
              <div className="space-y-2">
                <label className="font-body-md text-body-md font-bold">
                  Placeholder
                </label>
                <input
                  className="w-full bg-surface-bright border border-outline-variant rounded px-3 py-2 focus:border-primary focus:ring-1 focus:ring-primary outline-none text-body-md transition-all"
                  type="text"
                  defaultValue="e.g. enter value..."
                />
              </div>
            )}

            {/* HELP TEXT */}
            {attrs?.helpText !== undefined && (
              <div className="space-y-2">
                <label className="font-body-md text-body-md font-bold text-on-surface-variant">
                  Help Text
                </label>
                <textarea
                  className="w-full bg-surface-bright border border-outline-variant rounded px-3 py-2 focus:border-primary focus:ring-1 focus:ring-primary outline-none text-body-md transition-all"
                  rows={2}
                  placeholder="Enter instructions..."
                />
              </div>
            )}
          </div>
        </div>

        {/* DIVIDER */}
        <div className="border-t border-outline-variant" />

        {/* ===== OPTIONS ===== */}
        {attrs?.options && (
          <>
            <div className="space-y-stack-md">
              <h3 className="font-label-caps text-label-caps text-outline uppercase tracking-wider">
                Options
              </h3>

              <div className="bg-surface-container-lowest border border-outline-variant rounded-lg p-4 space-y-3">
                <label className="font-body-md text-body-md font-bold">
                  Choice Options
                </label>

                <textarea
                  className="w-full bg-surface-bright border border-outline-variant rounded px-3 py-2 focus:border-primary focus:ring-1 focus:ring-primary outline-none text-body-md transition-all"
                  placeholder="Enter one option per line"
                  rows={4}
                />
              </div>
            </div>

            <div className="border-t border-outline-variant" />
          </>
        )}

        {/* ===== VALIDATION ===== */}
        <div className="space-y-stack-md">
          <h3 className="font-label-caps text-label-caps text-outline uppercase tracking-wider">
            Validation
          </h3>

          <div className="bg-surface-container-lowest border border-outline-variant rounded-lg p-4 space-y-stack-md">
            {/* REQUIRED */}
            {attrs?.required !== undefined && (
              <div className="flex items-center justify-between">
                <span className="font-body-md text-body-md">Required</span>
                <div className="w-10 h-5 bg-primary rounded-full relative flex items-center px-1 cursor-pointer">
                  <div className="w-3.5 h-3.5 bg-white rounded-full ml-auto"></div>
                </div>
              </div>
            )}

            {/* STRICT FORMAT */}
            {attrs?.validation && (
              <div className="flex items-center justify-between">
                <span className="font-body-md text-body-md">
                  Strict Format Check
                </span>
                <div className="w-10 h-5 bg-surface-container-high rounded-full relative flex items-center px-1 cursor-pointer">
                  <div className="w-3.5 h-3.5 bg-white rounded-full"></div>
                </div>
              </div>
            )}

            {/* ERROR MESSAGE */}
            {attrs?.validation && (
              <div className="space-y-2">
                <label className="font-body-md text-body-md font-bold text-on-surface-variant">
                  Error Message
                </label>
                <input
                  className="w-full bg-surface-bright border border-outline-variant rounded px-3 py-2 focus:border-primary outline-none text-body-md transition-all"
                  type="text"
                  defaultValue="Please enter a valid value."
                />
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="p-stack-md border-t border-outline-variant bg-surface-container-low">
        <button className="w-full py-2 bg-primary text-surface font-bold rounded hover:opacity-90 transition-all flex items-center justify-center gap-2">
          <Save className="text-headline-sm" />
          Apply Changes
        </button>
      </div>
    </aside>
  );
}
