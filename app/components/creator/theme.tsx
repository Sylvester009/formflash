'use client';

import {Palette} from 'lucide-react';
import {useState} from 'react';

const themes = [
  {name: 'dark', color: '#111827'},
  {name: 'blue', color: '#3b82f6'},
  {name: 'green', color: '#22c55e'},
  {name: 'purple', color: '#a855f7'},
  {name: 'rose', color: '#f43f5e'},
];

export default function Theme() {
  const [open, setOpen] = useState(false);

  const radius = 90;
  return (
    <div className="fixed bottom-gutter right-[344px] z-50">
      {/* Theme Items */}
      <div className="relative">
        {themes.map((theme, i) => {
          // spread across semi-circle (-90deg to 90deg)
          const startAngle = 15;
          const endAngle = 180;
          const step = (endAngle - startAngle) / (themes.length - 1);
          const angle = (startAngle + step * i) * (Math.PI / 180);

          const x = open ? Math.cos(angle) * radius : 0;
          const y = open ? Math.sin(angle) * radius : 0;
          return (
            <button
              key={theme.name}
              onClick={() => {
                console.log('Switch theme:', theme.name);
                setOpen(false);
              }}
              className="absolute w-9 h-9 rounded-full shadow-md transition-all duration-300"
              style={{
                backgroundColor: theme.color,
                transform: `translate(${x}px, ${-y}px)`,
                opacity: open ? 1 : 0,
              }}
            />
          );
        })}

        <button
          onClick={() => setOpen(p => !p)}
          className="w-12 h-12 rounded-full bg-primary-container text-on-primary-container shadow-xl flex items-center justify-center hover:scale-110 transition-transform"
          id="theme-btn"
        >
          <Palette />
        </button>
      </div>
    </div>
  );
}
