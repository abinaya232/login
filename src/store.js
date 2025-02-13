import { create } from "zustand";

const useStore = create((set) => ({
  isLoggedIn: false,
  subjects: [],
  marks: {},
  login: () => set({ isLoggedIn: true }),

  addSubject: (subject) =>
    set((state) => ({
      subjects: [...state.subjects, subject],
      marks: { ...state.marks, [subject]: "" },
    })),

  updateMarks: (subject, value) =>
    set((state) => ({
      marks: { ...state.marks, [subject]: value },
    })),
}));

export default useStore;
