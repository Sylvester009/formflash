'use client';

import {useState} from 'react';
import Canvas from './components/creator/canvas';
import Fieldbar from './components/creator/fieldbar';
import Header from './components/creator/header';
import Properties from './components/creator/propbar';
import Theme from './components/creator/theme';
import AuthPage from './components/creator/authpage';

export default function Home() {
  const [signedIn, setSignedIn] = useState(false);
  const [selected, setSelected] = useState("");

  return (
    <>
      <main className="bg-background font-body-md text-on-surface overflow-hidden">
        <Header setSignedIn={setSignedIn} />
        <div className="flex h-screen pt-16">
          <Fieldbar setSelected={setSelected}/>
          <Canvas />
          <Properties selected={selected}/>
        </div>
        <Theme />
      </main>
      {signedIn && <AuthPage setSignedIn={setSignedIn} />}
    </>
  );
}
