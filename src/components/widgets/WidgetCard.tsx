"use client";

import { ReactNode } from "react";

type Props = {
  title: string;
  onRemove?: () => void;
  children: ReactNode;
};

export default function WidgetCard({ title, onRemove, children }: Props) {
  return (
    <div className="bg-[#020617] border border-gray-700 rounded-xl p-4 relative">
      <div className="flex justify-between items-center mb-3">
        <h3 className="text-sm font-semibold">{title}</h3>
        <button
          onClick={onRemove}
          className="text-gray-400 hover:text-red-400"
        >
          ✕
        </button>
      </div>
      {children}
    </div>
  );
}
