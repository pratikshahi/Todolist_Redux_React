import "./App.css";
import Navbar from "./components/Navbar";
import { createStore } from "redux";
import { Provider } from "react-redux";
import TaskReducer from "./taskReducer";
import AddTask from "./components/AddTask";
import TodoList from "./components/TodoList";

function App() {
  const store = createStore(TaskReducer);

  return (
    <div className="container">
      <Provider store={store}>
        <Navbar />
        <AddTask />
        <TodoList />
      </Provider>
    </div>
  );
}

export default App;
