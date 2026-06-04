'use client';

import Link from 'next/link';
import {useState} from 'react';
import {toast} from 'sonner';

type HeaderProps = {
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  signedIn: boolean;
};

export default function Header({setOpen, signedIn}: HeaderProps) {
  const [saved, setSaved] = useState(false);
  const [published, setPublished] = useState(false);
  const [addDashboard, setAddDashboard] = useState(false);

  const handleAction = (actionType: string) => {
    if (!signedIn) {
      setOpen(true);
      return;
    }

    if (actionType === 'save') {
      setSaved(true);
      toast.success('Saved Successfully!', {position: 'top-left'});
    } else if (actionType === 'publish') {
      setPublished(true);
      setAddDashboard(true);
      toast.success('Published Successfully!', {position: 'top-left'});
    }
  };

  return (
    <header className="bg-surface-container-lowest border-b border-outline-variant flex justify-between items-center w-full px-gutter h-16 fixed top-0 z-50">
      <div className="flex items-center gap-stack-lg">
        <div className="flex items-center gap-stack-md">
          <span className="font-headline-md text-headline-md font-bold text-primary">
            FormFlash
          </span>
          {addDashboard && (
            <div className="px-4 py-1 border-l border-outline-variant text-secondary font-bold">
              <Link href="/dashboard">Dashboard</Link>
            </div>
          )}
        </div>
      </div>
      <div className="flex items-center gap-stack-md">
        <button
          onClick={() => handleAction('save')}
          className="px-4 py-2 border border-outline-variant text-secondary font-bold rounded hover:bg-surface-container transition-all cursor-pointer"
        >
          Save
        </button>
        <button
          onClick={() => handleAction('publish')}
          className="px-4 py-2 bg-primary-container text-on-primary-container font-bold rounded hover:opacity-90 transition-all cursor-pointer"
        >
          Publish
        </button>
        <div className="ml-4 h-8 w-8 rounded-full bg-surface-container-high flex items-center justify-center overflow-hidden border border-outline-variant">
          <img
            alt="User avatar"
            className="w-full h-full"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCThrC8yx5srBXd5GnyhMV0dqDdrCXb-xpLKUiQq6dnvJXttmy0qiui0hKzyzbSx7KH1b4DmAX88tWFCakloHBNrn6ptg9Tle7PSDJIyCLgy_kRIubBxaxdGa2cuo29LW_CFRMwlCgYueD85fuSypsyNd8BhmbwnhqEHDuS-54VhTY2t3BQAmQTBFd4kNvC-O-egUoDvoLpdG2JHGWtynrRHtEAdfi8_1m7PowPF_kglU9ClaoaiomULymkufB1FdzQrDuJEuTOi08"
          />
        </div>
      </div>
    </header>
  );
}
