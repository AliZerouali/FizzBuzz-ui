import FizzBuzzForm from "./features/fizzbuzz/FizzBuzzForm";
import StatisticsPanel from "./features/statistics/StatisticsPanel";
import "./App.css";

function App() {
  return (
    <div className="app-container">
      <header className="app-header">
        <h1>FizzBuzz Generator</h1>
        <p>Generate custom FizzBuzz sequences with statistics tracking</p>
      </header>

      <div className="main-content">
        <div className="form-section">
          <FizzBuzzForm />
        </div>

        <div className="stats-section">
          <StatisticsPanel />
        </div>
      </div>

      <footer className="app-footer">
        <p>FizzBuzz REST API with Clean Architecture & Redux</p>
      </footer>
    </div>
  );
}

export default App;
