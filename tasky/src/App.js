import './App.css';
import Task from './components/Task';

function App() {
  return (
    <div className="container">
      <h1>Tasky</h1>
      <Task title="Dishes" deadline="Today" description="Fairy Liquid"/>
      <Task title="Laundry" deadline="Tomorrow" description="Don't eat the tablets"/>
      <Task title="Tidy" deadline="Today" description="Neatly">
        Fold laundry and put away
      </Task>
    </div>
  );
}

export default App;
