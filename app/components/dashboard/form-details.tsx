import {
  Angry,
  ChevronRight,
  Delete,
  Edit,
  Eye,
  ListFilterIcon,
  Meh,
  Search,
  Send,
  Smile,
  TrendingUp,
} from 'lucide-react';

export default function FormDetails() {
  return (
    <section className="flex-1 ml-panel-width-left overflow-y-auto bg-background p-margin-page">
      <div className="max-w-[1200px] mx-auto space-y-stack-lg">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="font-display-lg font-semibold text-display-lg text-on-surface">
              Analytics: Customer Feedback Survey
            </h1>
            <p className="text-secondary font-body-md mt-1">
              Real-time performance data for Project Alpha v1.2
            </p>
          </div>
          <div className="flex gap-stack-md">
            <button className="flex items-center gap-2 px-stack-md py-2 bg-surface-container-lowest border border-outline-variant text-secondary rounded-lg font-bold font-body-md hover:bg-surface-container transition-colors">
              <Edit />
              Edit Form
            </button>
            <button className="flex items-center gap-2 px-stack-md py-2 text-error border border-error/20 hover:bg-error-container/30 rounded-lg font-bold font-body-md transition-colors">
              <Delete />
              Delete Form
            </button>
          </div>
        </div>
        <div className="bento-grid font-semibold">
          <div className="col-span-12 md:col-span-6 p-stack-lg glass-card rounded-xl">
            <div className="flex items-center justify-between mb-stack-sm">
              <span className="text-secondary font-label-caps text-label-caps tracking-wider">
                Total Views
              </span>

              <Eye className="text-primary" />
            </div>
            <div className="text-display-lg font-display-lg text-on-surface">
              12,482
            </div>
            <div className="mt-2 text-primary font-body-md flex items-center gap-1">
              <TrendingUp className="text-sm" />
              <span>+12.5% vs last week</span>
            </div>
          </div>
          <div className="col-span-12 md:col-span-6 p-stack-lg glass-card rounded-xl">
            <div className="flex items-center justify-between mb-stack-sm">
              <span className="text-secondary font-label-caps text-label-caps tracking-wider">
                Submissions
              </span>
              <Send className="text-primary" />
            </div>
            <div className="text-display-lg font-display-lg text-on-surface">
              3,205
            </div>
            <div className="mt-2 text-primary font-body-md flex items-center gap-1">
              <TrendingUp className="text-sm" />
              <span>+8.2% vs last week</span>
            </div>
          </div>

          <div className="col-span-12 p-stack-lg glass-card rounded-xl h-100 flex flex-col">
            <div className="flex items-center justify-between mb-gutter">
              <h3 className="font-headline-sm text-headline-sm text-on-surface">
                Submission Trend
              </h3>
              <div className="flex gap-stack-sm">
                <span className="px-2 py-1 bg-surface-container rounded font-label-caps text-label-caps">
                  7 Days
                </span>
                <span className="px-2 py-1 text-secondary font-label-caps text-label-caps">
                  30 Days
                </span>
              </div>
            </div>
            <div className="flex-1 w-full bg-surface-container-low rounded-lg relative overflow-hidden flex items-end px-stack-lg pb-stack-md gap-2">
              <div className="flex-1 bg-primary/20 hover:bg-primary transition-colors h-[40%] rounded-t-xs"></div>
              <div className="flex-1 bg-primary/20 hover:bg-primary transition-colors h-[65%] rounded-t-xs"></div>
              <div className="flex-1 bg-primary/20 hover:bg-primary transition-colors h-[50%] rounded-t-xs"></div>
              <div className="flex-1 bg-primary/20 hover:bg-primary transition-colors h-[85%] rounded-t-xs"></div>
              <div className="flex-1 bg-primary/20 hover:bg-primary transition-colors h-[70%] rounded-t-xs"></div>
              <div className="flex-1 bg-primary/20 hover:bg-primary transition-colors h-[90%] rounded-t-xs"></div>
              <div className="flex-1 bg-primary/20 hover:bg-primary transition-colors h-[55%] rounded-t-xs"></div>
            </div>
          </div>
        </div>
        <div className="bg-surface-container-lowest border border-outline-variant rounded-xl overflow-hidden shadow-sm">
          <div className="px-gutter py-stack-lg border-b border-outline-variant flex justify-between items-center bg-surface-container-low/30">
            <h3 className="font-headline-md text-headline-sm text-on-surface font-semibold">
              Recent Responses
            </h3>
            <div className="flex items-center gap-stack-md">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-secondary text-sm" />
                <input
                  className="pl-10 pr-4 py-2 border border-outline-variant rounded-lg font-body-md text-body-md focus:ring-2 focus:ring-primary-container focus:border-primary outline-none transition-all"
                  placeholder="Search responses..."
                  type="text"
                />
              </div>
              <button className="flex items-center gap-2 text-secondary font-body-md hover:text-on-surface">
                <ListFilterIcon />
              </button>
            </div>
          </div>
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-surface-container-low/50">
                <th className="px-gutter py-stack-md font-label-caps text-body-md text-secondary">
                  Respondent
                </th>
                <th className="px-gutter py-stack-md font-label-caps text-body-md text-secondary">
                  Status
                </th>
                <th className="px-gutter py-stack-md font-label-caps text-body-md text-secondary">
                  Sentiment
                </th>
                <th className="px-gutter py-stack-md font-label-caps text-body-md text-secondary">
                  Time Spent
                </th>
                <th className="px-gutter py-stack-md font-label-caps text-body-md text-secondary">
                  Timestamp
                </th>
                <th className="px-gutter py-stack-md"></th>
              </tr>
            </thead>
            <tbody className="divide-y divide-outline-variant">
              <tr className="hover:bg-surface-container-low transition-colors cursor-pointer group">
                <td className="px-gutter py-stack-lg">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-secondary-container flex items-center justify-center text-on-secondary-container font-bold text-xs">
                      JD
                    </div>
                    <div>
                      <p className="font-body-md font-bold text-on-surface">
                        Jane Doe
                      </p>
                      <p className="text-xs text-secondary">
                        jane.d@example.com
                      </p>
                    </div>
                  </div>
                </td>
                <td className="px-gutter py-stack-lg">
                  <span className="px-2 py-0.5 bg-green-100 text-green-700 rounded-sm font-label-caps text-[10px] uppercase">
                    Completed
                  </span>
                </td>
                <td className="px-gutter py-stack-lg">
                  <div className="flex items-center gap-1 text-primary">
                    <Smile className="text-sm" />
                    <span className="font-body-md">Positive</span>
                  </div>
                </td>
                <td className="px-gutter py-stack-lg font-code-sm text-secondary">
                  4m 12s
                </td>
                <td className="px-gutter py-stack-lg font-body-md text-secondary">
                  Oct 24, 2023 · 14:22
                </td>
                <td className="px-gutter py-stack-lg text-right">
                  <ChevronRight className="text-secondary opacity-0 group-hover:opacity-100 transition-opacity" />
                </td>
              </tr>
              <tr className="hover:bg-surface-container-low transition-colors cursor-pointer group">
                <td className="px-gutter py-stack-lg">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-tertiary-container flex items-center justify-center text-on-tertiary-container font-bold text-xs">
                      AS
                    </div>
                    <div>
                      <p className="font-body-md font-bold text-on-surface">
                        Alex Smith
                      </p>
                      <p className="text-xs text-secondary">
                        a.smith@techcorp.io
                      </p>
                    </div>
                  </div>
                </td>
                <td className="px-gutter py-stack-lg">
                  <span className="px-2 py-0.5 bg-green-100 text-green-700 rounded-sm font-label-caps text-[10px] uppercase">
                    Completed
                  </span>
                </td>
                <td className="px-gutter py-stack-lg">
                  <div className="flex items-center gap-1 text-secondary">
                    <Meh className="text-sm" />
                    <span className="font-body-md">Neutral</span>
                  </div>
                </td>
                <td className="px-gutter py-stack-lg font-code-sm text-secondary">
                  2m 45s
                </td>
                <td className="px-gutter py-stack-lg font-body-md text-secondary">
                  Oct 24, 2023 · 12:10
                </td>
                <td className="px-gutter py-stack-lg text-right">
                  <ChevronRight className="text-secondary opacity-0 group-hover:opacity-100 transition-opacity" />
                </td>
              </tr>
              <tr className="hover:bg-surface-container-low transition-colors cursor-pointer group">
                <td className="px-gutter py-stack-lg">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-on-error-container flex items-center justify-center text-on-error font-bold text-xs">
                      MK
                    </div>
                    <div>
                      <p className="font-body-md font-bold text-on-surface">
                        Mike Ross
                      </p>
                      <p className="text-xs text-secondary">mike@pearson.law</p>
                    </div>
                  </div>
                </td>
                <td className="px-gutter py-stack-lg">
                  <span className="px-2 py-0.5 bg-error-container text-on-error-container rounded-sm font-label-caps text-[10px] uppercase">
                    Incomplete
                  </span>
                </td>
                <td className="px-gutter py-stack-lg">
                  <div className="flex items-center gap-1 text-error">
                    <Angry className="text-sm" />
                    <span className="font-body-md">Frustrated</span>
                  </div>
                </td>
                <td className="px-gutter py-stack-lg font-code-sm text-secondary">
                  1m 05s
                </td>
                <td className="px-gutter py-stack-lg font-body-md text-secondary">
                  Oct 23, 2023 · 09:45
                </td>
                <td className="px-gutter py-stack-lg text-right">
                  <ChevronRight className="text-secondary opacity-0 group-hover:opacity-100 transition-opacity" />
                </td>
              </tr>
            </tbody>
          </table>
          <div className="px-gutter py-stack-md bg-surface-container-low/30 border-t border-outline-variant flex justify-between items-center">
            <span className="text-secondary font-body-md">
              Showing 3 of 3,205 responses
            </span>
            <div className="flex gap-2">
              <button
                className="px-3 py-1 border border-outline-variant rounded text-secondary hover:bg-surface-container-low disabled:opacity-50"
                disabled
              >
                Previous
              </button>
              <button className="px-3 py-1 border border-outline-variant rounded text-on-surface hover:bg-surface-container-low">
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
