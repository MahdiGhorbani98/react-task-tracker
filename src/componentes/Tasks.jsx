// const tasks = [
//   {
//     id: 1,
//     text: "Doctors Appointment",
//     day: "Feb 5th at 2:30pm",
//     reminder: true,
//   },
//   {
//     id: 2,
//     text: "Meeting at school",
//     day: "Feb 6th at 1:30pm",
//     reminder: true,
//   },
//   { id: 3, text: "Food Shopping", day: "Feb 5th at 2:30pm", reminder: false },
// ];
import Task from "./Task";
const Tasks = ({ tasks, onDelete, onToggle }) => {
  return (
    <>
      {tasks.map((task) => (
        <Task
          key={task.id}
          tasks={task}
          onDelete={onDelete}
          onToggle={onToggle}
        />
      ))}
    </>
  );
};

export default Tasks;
