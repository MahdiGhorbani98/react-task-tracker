import Header from "./componentes/Header";
import Tasks from "./componentes/Tasks";
import { useState, useEffect } from "react";
import AddTask from "./componentes/AddTask";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Footer from "./componentes/Footer";
import About from "./componentes/About";
function App() {
  const [showAddForm, setShowAddForm] = useState(false);
  const [tasks, setTasks] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/tasks")
      .then((res) => res.json())
      .then((data) => setTasks(data));
  }, []);

  //Add Task
  const onAddTask = async (task) => {
    // const id = Math.floor(Math.random() * 10000 + 1);
    // const newTask = { id, ...task };
    // setTasks([...tasks, newTask]);
    const res = await fetch(`http://localhost:5000/tasks`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(task),
    });

    const data = await res.json();
    setTasks([...tasks, data]);
  };
  //Fetch Task
  const fetchTask = async (id) => {
    const res = await fetch(`http://localhost:5000/tasks/${id}`);
    const data = await res.json();
    return data;
  };

  // Delete Task
  const deleteTask = async (id) => {
    await fetch(`http://localhost:5000/tasks/${id}`, { method: "DELETE" });
    setTasks(tasks.filter((task) => task.id !== id));
  };
  // Toggle Reminder
  const toggleReminder = async (id) => {
    const taskToToggle = await fetchTask(id);
    const updTask = { ...taskToToggle, reminder: !taskToToggle.reminder };
    const res = await fetch(`http://localhost:5000/tasks/${id}`, {
      method: "PUT",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(updTask),
    });

    const data = await res.json();

    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, reminder: data.reminder } : task
      )
    );
  };

  return (
    <BrowserRouter>
      <Header
        onAdd={() => setShowAddForm(!showAddForm)}
        showAdd={showAddForm}
      />
      {showAddForm && <AddTask onAdd={onAddTask} />}
      <Routes>
        <Route
          path="/"
          element={
            <div className="App">
              {tasks.length > 0 ? (
                <Tasks
                  tasks={tasks}
                  onDelete={deleteTask}
                  onToggle={toggleReminder}
                />
              ) : (
                <p>There aren't any tasks</p>
              )}
            </div>
          }
        />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
