import { IStudentMark } from "@/interfaces";
import { create } from "zustand";

type TstudentStore = {
  students: IStudentMark[];
  setStudent: (students: IStudentMark[]) => void;
};

export const StudentStore = create<TstudentStore>((set) => ({
  students: [],
  setStudent: (students) => set({ students }),
}));
