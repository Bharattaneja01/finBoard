import { create } from "zustand";

export type Widget = {
  id: string;
  name: string;
};

type DashboardState = {
  widgets: Widget[];
  addWidget: (widget: Widget) => void;
};

export const useDashboardStore = create<DashboardState>((set) => ({
  widgets: [],
  addWidget: (widget) =>
    set((state) => ({ widgets: [...state.widgets, widget] })),
}));
