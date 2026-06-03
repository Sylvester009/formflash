export default function Header() {
  return (
    <header className="bg-surface-container-lowest text-primary font-body-md text-body-md docked full-width top-0 border-b border-outline-variant flex justify-between items-center w-full px-gutter h-16 max-w-[1440px] mx-auto">
      <div className="flex items-center gap-stack-sm">
        <span className="font-headline-md text-headline-md font-bold text-primary">
          FormFlash
        </span>
      </div>
      <div className="flex items-center gap-stack-md"></div>
    </header>
  );
}
