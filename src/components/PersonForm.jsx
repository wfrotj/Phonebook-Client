import React, { useState, useEffect } from "react";
import personService from "../services/personService";

function PersonForm({ persons, setPersons }) {
  const [newPerson, setNewPerson] = useState("");
  const [newNumber, setNewNumber] = useState("");

  const addPerson = (e) => {
    e.preventDefault();

    const personObject = {
      name: personService.titleCase(newPerson),
      number: newNumber,
    };

    personService
      .createPerson(personObject)

      .then((returnedPerson) => {
        setPersons(persons.concat(returnedPerson));
        setNewPerson("");
        setNewNumber("");
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="shadow-xl  bg-blue-800 text-white mt-4  md:text-xl md:w-[30rem]  md:p-4">
      <form
        onSubmit={addPerson}
        className="flex flex-col content-center gap-2 p-2 md:w-100"
      >
        <div className="flex justify-between items-end gap-8">
          <label>Name </label>
          <input
            className="bg-white  text-black broder-slate-300 rounded-md pl-3  pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 text-sm w-40 h-8 sm:w-60 sm:h-10 sm:text-xl md:text-2xl"
            type="text"
            value={newPerson}
            onChange={(e) => setNewPerson(e.target.value)}
          />
        </div>
        <div className="flex justify-between items-end">
          <label>Number</label>
          <input
            className="bg-white  text-black broder-slate-300 rounded-md pl-3  pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 text-sm w-40 h-8 sm:w-60 sm:h-10 sm:text-xl md:text-2xl"
            type="text"
            value={newNumber}
            onChange={(e) => setNewNumber(e.target.value)}
          />
        </div>
        <button className=" text-l text-white font-bold px-2 border border-purple-200 hover:text-black hover:bg-white hover:border-transparent  ">
          Save
        </button>
      </form>
    </div>
  );
}

export default PersonForm;
