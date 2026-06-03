import {Send} from 'lucide-react';

export default function FormPage() {
  return (
    <section className="min-h-[calc(100vh-64px)] flex flex-col items-center justify-center p-margin-page my-auto md:mx-[10%] lg:mx-[20%]">
      <div className="form-container w-full bg-surface-container-lowest border border-outline-variant rounded-lg p-stack-lg shadow-sm">
        <div className="w-full h-48 rounded-lg mb-stack-lg overflow-hidden relative">
          <img
            alt="Event Banner"
            className="w-full h-full object-cover"
            data-alt="A clean, cinematic photograph of a modern, sun-drenched conference hall with minimalist architecture. The lighting is bright and high-key, emphasizing a light-mode aesthetic with soft shadows. The color palette is dominated by neutral whites and subtle blues, reflecting a professional and organized atmosphere. This image serves as a high-end header for a digital event registration platform."
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCxU0utyhJY7KFbCK-TBQw-mQdS_wp9ptDgCxRi_pP62ZGheBAWqWgr8OxV0fMSNJ_lFSpX5mzS95E4CROd0x2AqPxBLfoMfyAbEyd-yGItneP0J6l_iRavYY0a-K4MyekixJOL6KYixsrJxXl8xBKjQYDkexuyKC5ErWE0tVY6WR7PDjJhhaYT2lAu89oL7ha6pZpcthK0MprmHisRhN1rsnXSQNABwEWqdzD_l9tPJ3yope46HebTPyXRkO1bb6Z5CocYgf70WqI"
          />
          <div className="absolute inset-0 bg-linear-to-t from-black/40 to-transparent"></div>
          <div className="absolute bottom-4 left-6 text-white">
            <h1 className="font-headline-md text-headline-md mb-1">
              Event Registration
            </h1>
            <p className="font-body-md text-body-md opacity-90">
              Annual Product Leadership Summit 2024
            </p>
          </div>
        </div>
        <div className="mb-stack-lg">
          <p className="font-body-md text-body-md text-on-surface-variant">
            Please fill out the information below to secure your spot.
            Confirmation will be sent to your provided email address within 24
            hours.
          </p>
        </div>
        <form className="space-y-stack-lg" id="public-form">
          <div className="space-y-stack-sm">
            <label
              className="font-body-md text-body-md font-bold block"
              htmlFor="full_name"
            >
              Full Name <span className="text-error">*</span>
            </label>
            <input
              className="w-full px-4 py-3 border border-outline-variant rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all duration-200 outline-none"
              id="full_name"
              placeholder="Enter your first and last name"
              required
              type="text"
            />
          </div>
          <div className="space-y-stack-sm">
            <label
              className="font-body-md text-body-md font-bold block"
              htmlFor="email_address"
            >
              Email Address <span className="text-error">*</span>
            </label>
            <input
              className="w-full px-4 py-3 border border-outline-variant rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all duration-200 outline-none"
              id="email_address"
              placeholder="you@company.com"
              required
              type="email"
            />
          </div>
          <div className="space-y-stack-sm">
            <div className="flex justify-between items-center">
              <label
                className="font-body-md text-body-md font-bold block"
                htmlFor="message"
              >
                Additional Message
              </label>
              <span className="font-label-caps text-label-caps text-on-surface-variant uppercase">
                Optional
              </span>
            </div>
            <textarea
              className="w-full px-4 py-3 border border-outline-variant rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all duration-200 outline-none resize-none"
              id="message"
              placeholder="Any special requirements or questions for the organizers?"
              rows={5}
            ></textarea>
          </div>
          <div className="pt-stack-md flex flex-col gap-stack-sm">
            <button
              className="w-full bg-primary-container text-on-primary-container font-headline-sm text-headline-sm py-4 rounded-lg font-bold shadow-sm hover:opacity-90 active:scale-[0.98] transition-all flex items-center justify-center gap-2"
              type="submit"
            >
              Submit Registration
              <Send />
            </button>
            <p className="text-center font-label-caps text-label-caps text-on-surface-variant py-stack-sm">
              Secured by FormFlash Encryption
            </p>
          </div>
        </form>
      </div>
      <footer className="mt-stack-lg text-center opacity-60">
        <p className="font-label-caps text-label-caps flex items-center justify-center gap-2">
          Powered by
          <span className="font-bold text-primary">FormFlash</span>
        </p>
      </footer>
    </section>
  );
}
