//sign up and login

import {EyeClosed, Lock, Mail, Star, Waypoints, X} from 'lucide-react';

type HeaderProps = {
  setSignedIn: React.Dispatch<React.SetStateAction<boolean>>;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>
};

export default function AuthPage({setSignedIn, setOpen}: HeaderProps) {

  const handleSubmit = () => {
    setSignedIn(true);
    setOpen(false)
  }
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-on-background/40 backdrop-blur-md px-stack-md">
      <div className="bg-surface-container-lowest w-full max-w-[1000px] max-h-[90vh] flex flex-col md:flex-row shadow-xl rounded-xl overflow-hidden animate-in fade-in zoom-in duration-300">
        <div className="hidden md:flex md:w-1/2 bg-primary relative overflow-hidden p-stack-lg flex-col justify-between">
          <div className="absolute inset-0 opacity-20">
            <svg
              height="100%"
              viewBox="0 0 400 400"
              width="100%"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <pattern
                  height="40"
                  id="grid"
                  patternUnits="userSpaceOnUse"
                  width="40"
                >
                  <path
                    d="M 40 0 L 0 0 0 40"
                    fill="none"
                    stroke="white"
                    strokeWidth="1"
                  ></path>
                </pattern>
              </defs>
              <rect fill="url(#grid)" height="100%" width="100%"></rect>
            </svg>
          </div>
          <div className="relative z-10">
            <div className="flex items-center gap-stack-sm mb-stack-lg">
              <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center">
                <Waypoints className=" text-primary text-[28px]" />
              </div>
              <span className="font-headline-md text-headline-md font-bold text-white">
                FormFlash
              </span>
            </div>
            <h2 className="font-display-lg text-display-lg text-white mb-stack-md leading-tight">
              Build logic-driven forms in minutes.
            </h2>
            <p className="font-body-lg text-body-lg text-primary-fixed leading-relaxed opacity-90">
              Join 10,000+ researchers and product managers using FormFlash to
              capture high-quality data through complex, conditional workflows.
            </p>
          </div>
          <div className="relative z-10">
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 p-stack-md rounded-lg">
              <div className="flex items-center gap-stack-sm mb-2">
                <div className="flex -space-x-2">
                  <img
                    alt="User"
                    className="w-8 h-8 rounded-full border-2 border-primary"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCdx5II-j75cJpBOyb0pUGgJW-_PjV9YaMNi7plPrwrAEclh4NKNOiYYP26aq7MCxoyCkaEnd9zqDiQXn8qcwB17SJ_x3u75WQehN40-DpfoFPrsKxzQBX913bsiR4wppDQdBQrMfMsOigsiSgd0LofwabRaY5IjSTBHyYMWoALyUtY9eZRSo05btRK_-w961Agy56U3k5mjNGE05ltcPYPKF0gZUg9WA6tOhNTvnX2hcM0_FtCFV1E6h48GNLixqIBwfzIWxYIGbc"
                  />
                  <img
                    alt="User"
                    className="w-8 h-8 rounded-full border-2 border-primary"
                    data-alt="A clean, professional portrait of a business woman with a neutral background. The lighting is soft and even, highlighting a corporate professional look. The aesthetic is minimalist and high-end, fitting for a sophisticated digital product environment."
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBw80lQgU60uApOktm9sf9woEfhoy0SanEXyh1H5GnfgaRZ26pEYTuq-ppGl1grUsPSDQul13VxAOMX5qm4laQ8i7TLIV_Xz7p86zMfrQin53cIGjxJA4lLfgTYlIwZa4FWU2cQvEiNVFxBR6lohiQxHKt34v1svsJXZ2xvx66IaLTnLLZFk2YfxwaLk_E9S7YRv-y4C1KDmsR71rS02xK1APE0ZvI-VAvulcDWl-0GaSmZxgKP7b8MO3e-mt0mac_CfyBIIsEhdeM"
                  />
                </div>
                <span className="font-label-caps text-label-caps text-white">
                  Trusted by teams at Global Co.
                </span>
              </div>
              <div className="flex gap-2 text-primary-fixed opacity-75">
                <Star className="text-body-lg text-amber-300" />
                <Star className="text-body-lg text-amber-300" />
                <Star className="text-body-lg text-amber-300" />
                <Star className="text-body-lg text-amber-300" />
                <Star className="text-body-lg text-amber-300" />
              </div>
            </div>
          </div>
          <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-white/5 rounded-full blur-3xl"></div>
        </div>
        <div className="flex-1 p-stack-lg md:p-12! bg-white flex flex-col justify-center">
          <div className="mb-stack-lg">
            <h1 className="font-headline-md text-headline-md text-on-surface mb-1">
              Welcome
            </h1>
            <p className="font-body-md text-body-md text-on-surface-variant">
              Sign in to manage your forms and analytics.
            </p>
          </div>
          <form className="space-y-stack-lg" onSubmit={handleSubmit}>
            <div className="space-y-stack-sm">
              <label
                className="block font-body-md font-bold text-on-surface"
                htmlFor="email"
              >
                Email Address
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-outline text-[20px]" />
                <input
                  className="w-full pl-10 pr-4 py-3 bg-surface-container-lowest border border-outline-variant rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all outline-none text-body-md"
                  id="email"
                  name="email"
                  placeholder="name@company.com"
                  type="email"
                />
              </div>
            </div>
            <div className="space-y-stack-sm">
              <div className="flex justify-between items-center">
                <label
                  className="block font-body-md font-bold text-on-surface"
                  htmlFor="password"
                >
                  Password
                </label>
                <a
                  className="text-primary hover:underline font-label-caps text-label-caps"
                  href="#"
                >
                  Forgot Password?
                </a>
              </div>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-outline text-[20px]" />
                <input
                  className="w-full pl-10 pr-10 py-3 bg-surface-container-lowest border border-outline-variant rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all outline-none text-body-md"
                  id="password"
                  name="password"
                  placeholder="••••••••"
                  type="password"
                />
                <button
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-outline hover:text-on-surface transition-colors"
                  type="button"
                >
                  <EyeClosed className="text-[20px]" />
                </button>
              </div>
            </div>

            <div className="space-y-stack-md pt-1">
              <button
                className="w-full bg-primary-container text-on-primary-container font-headline-sm text-headline-sm py-3 px-gutter rounded-lg hover:opacity-90 active:scale-[0.98] transition-all shadow-sm"
                type="submit"
              >
                Sign In
              </button>
              <div className="relative flex items-center py-2">
                <div className="grow border-t border-outline-variant"></div>
                <span className="shrink mx-4 font-label-caps text-label-caps text-outline uppercase">
                  Or continue with
                </span>
                <div className="grow border-t border-outline-variant"></div>
              </div>
              <div className="flex items-center justify-center w-full gap-stack-md">
                <button
                  className="flex items-center justify-center w-2/3 gap-2 border border-outline-variant py-2 rounded-lg font-body-md text-on-surface hover:bg-surface-container transition-colors"
                  type="button"
                >
                  <img
                    alt="Google"
                    className="w-8 h-8"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuB3sNCUPhIFfrfQ3flRylxzm_4neHbmnKbYjeqFZVcCnHBqvD5XyBBQ1C2rvpzEh4Np9FBUPM3rS86gclyxnMOXAB5s1q0gc8nrJOonGnXKCBU1kl68V95FJqwqUFY121nT7rom6suENH7f8x5FKRzTnKmJ0t4FoSWBLWAhIXdhbgKIKGhCMCjavJQP1tGQB-Y6bSswpDQkM7S3W5wVKQMnCYTPKaszlOG95Nxa9eoO7JQxuARxvZ_dBa8vrNkacYbu7i8w-gNSG9A"
                  />
                  Google
                </button>
              </div>
            </div>
          </form>
        </div>
        <button
          onClick={() => setOpen(false)}
          className="absolute top-4 right-4 text-on-surface-variant hover:text-on-surface transition-colors"
        >
          <X className="text-headline-md text-primary" />
        </button>
      </div>
    </div>
  );
}
