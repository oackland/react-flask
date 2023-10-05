// import React from "react";
// import HabitList, { Habit } from "../habits/HabitsLists";
//
// type Props = {
//   children?: React.ReactNode;
//   show: boolean;
//   onClose: () => void;
// };
//
// const Modal: React.FC<Props> = ({ show, onClose, children }) => {
//   if (!show) return null;
//   const sampleHabits: Habit[] = [
//     { _id: "1", name: "Morning walk" },
//     { _id: "2", name: "Read a book" },
//     // ... other habits
//   ];
//   const sampleCompletions: string[] = ["1"]; // Assume the habit with id '1' is completed
//
//   const sampleSelectedDate = "08/09/2017";
//
//   function sampleCompleteHabit(habitId: string, date: string) {
//     console.log(`Completed habit with ID: ${habitId} on ${date}`);
//     // You can add any logic here, e.g., update the database, change local state, etc.
//   }
//
//   return (
//     <section className={"modal-section"}>
//       <div className="modal-overlay">
//         <div className="modal-content">
//           {children}
//           <button onClick={onClose}>Close</button>
//           <HabitList
//             habits={sampleHabits}
//             completions={sampleCompletions}
//             selected_date={sampleSelectedDate}
//             completeHabit={sampleCompleteHabit}
//           />
//         </div>
//       </div>
//     </section>
//   );
// };
//
// export default Modal;
