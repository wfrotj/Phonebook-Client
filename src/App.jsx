import { useState } from "react";
import "./App.css";
import PersonForm from "./components/PersonForm";
import PersonList from "./components/PersonList";

function App() {
  const [persons, setPersons] = useState([]);

  return (
    <div className="bg-gradient-to-r from-slate-500 to-blue-500 min-h-screen ">
      <div>
        <h1 className="text-3xl text-center font-bold pt-4 sm:text-5xl">
          fown · buk
        </h1>
        <div className="flex flex-col items-center  ">
          <PersonForm persons={persons} setPersons={setPersons} />
          <div className="m-4">
            <PersonList persons={persons} setPersons={setPersons} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
