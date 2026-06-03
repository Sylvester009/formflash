import {LayersPlus} from 'lucide-react';

export default function Header() {
  return (
    <header className="bg-surface-container-lowest  border-b border-outline-variant  fixed top-0 left-0 w-full z-50">
      <div className="flex justify-between items-center w-full px-gutter h-16 max-w-[1440px] mx-auto">
        <div className="flex items-center gap-stack-lg">
          <span className="font-headline-md text-headline-md font-bold text-primary">
            FormFlash
          </span>
        </div>
        <div className="flex items-center gap-stack-md">
          <button className="text-secondary hover:bg-surface-container-low p-2 rounded-lg transition-colors">
            <LayersPlus />
          </button>

          <div className="h-6 w-px bg-outline-variant"></div>

          <img
            alt="User avatar"
            className="w-8 h-8 rounded-full border border-outline-variant"
            data-alt="A professional headshot of a corporate user in a brightly lit, modern office environment. The lighting is soft and natural, emphasizing a clean and high-end professional aesthetic. The background is a soft-focus minimalist workspace with neutral tones of white and light gray, maintaining the design system's calm and reliable mood."
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAWT48acqzDud4QITNDrEFnoxfLoxMi5PQIa0xPGohKkpuHHWwxk93O0Oe_xieXEPdIKyDRj8EeN2PG7utdn0j-0s1FxUIKV6BYUe1HHJ4bZCDUMun3C8wq7tQ-GK7xcLFFrLOUbTKjUD5RzNb0lpU0AZArOOhrOBdnlci7zTs8cz_0w4j-HGFEixChH9t2MvTpbtuP7L3zU_dwHMF3Nw3Q8p2YPWckiWfN3fhUkvaImbIq4C7ZLtpKChxbWi4Fe1hSgbxzsPMBLxI"
          />
        </div>
      </div>
    </header>
  );
}
