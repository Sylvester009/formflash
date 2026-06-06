'use client';

import {useEffect, useState} from 'react';
import Canvas from './components/creator/canvas';
import Fieldbar from './components/creator/fieldbar';
import Header from './components/creator/header';
import Properties from './components/creator/propbar';
import Theme from './components/creator/theme';
import AuthPage from './components/creator/authpage';

import { DndContext, DragOverlay } from "@dnd-kit/core";

export type CanvasField = {
  id: string;
  fieldType: string;
  label: string;
  required: boolean;
};


const ClientOnly = ({ children }: any) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return children;
}

export default function Home() {
  const [signedIn, setSignedIn] = useState(false);
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState('');
  const [fields, setFields] = useState<CanvasField[]>([]);
  const [activeId, setActiveId] = useState<any>(null);

  function handleDragEnd(event: { active: any; over: any; }) {
  const { active, over } = event;

  if (!over) return;

  if (
    active.data.current?.type === "toolbox" &&
    over.id === "canvas-dropzone"
  ) {
    const newField = {
      id: crypto.randomUUID(),
      fieldType: active.data.current.fieldType,
      label: "Untitled",
      required: false,
    };

    setFields((prev) => [...prev, newField]);
  }
}

  return (
    <>
      <main className="bg-background font-body-md text-on-surface overflow-hidden">
        <Header
          signedIn={signedIn}
          setOpen={setOpen}
        />
        <div className="flex h-screen pt-16">
          <ClientOnly>
          <DndContext
  onDragStart={(event) => setActiveId(event.active)}
  onDragEnd={(event) => {
    setActiveId(null);
    handleDragEnd(event);
  }}
>
  <Fieldbar setSelected={setSelected} />
  <Canvas fields={fields} />
  <Properties selected={selected} />

  <DragOverlay>
    {activeId ? (
      <div className="p-3 bg-surface-container border rounded shadow-lg">
        {activeId.data?.current?.fieldDefinition?.label}
      </div>
    ) : null}
  </DragOverlay>
</DndContext>
</ClientOnly>
        </div>
        <Theme />
      </main>
      {open && <AuthPage setSignedIn={setSignedIn} setOpen={setOpen} />}
      
    </>
  );
}
