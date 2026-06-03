import {FileText, Plus, Search} from 'lucide-react';

const forms = [
  {
    id: 1,
    title: 'Customer Feedback Survey',
    status: 'Published',
  },
  {
    id: 2,
    title: 'Job Application Form',
    status: 'Draft',
  },
  {
    id: 3,
    title: 'Event Registration',
    status: 'Published',
  },
];

export default function Sidebar() {
  return (
    <aside className="w-panel-width-left bg-surface-container-lowest border-r border-outline-variant flex flex-col h-full py-stack-lg px-stack-md fixed left-0 top-16 bottom-0">
      {/* Header */}
      <div className="mb-stack-lg space-y-3">
        <h2 className="font-headline-sm text-headline-sm font-semibold">
          My Forms
        </h2>

        <div className="relative">
          <Search
            size={16}
            className="absolute left-3 top-1/2 -translate-y-1/2 text-outline"
          />

          <input
            type="text"
            placeholder="Search forms..."
            className="w-full pl-9 pr-3 py-2 bg-surface-container border border-outline-variant rounded-lg outline-none focus:border-primary"
          />
        </div>
      </div>

      {/* Forms List */}
      <nav className="flex-1 overflow-y-auto space-y-1">
        {forms.map((form, index) => (
          <button
            key={form.id}
            className={`w-full text-left flex items-start gap-3 p-3 my-2 rounded-lg transition-all ${
              index === 0
                ? 'bg-primary-container text-on-primary-container rounded-md'
                : 'hover:bg-surface-container text-on-surface-variant'
            }`}
          >
            <FileText size={18} className="mt-0.5 shrink-0" />

            <div className="min-w-0">
              <p className="font-body-md text-body-md font-semibold truncate">
                {form.title}
              </p>

            </div>
          </button>
        ))}
      </nav>
    </aside>
  );
}
