import { useEffect, useState } from "react";
import personService from "../services/personService";
import { FaTrash } from "react-icons/fa";

function PersonList({ persons, setPersons }) {
  useEffect(() => {
    personService
      .getPersons()
      .then((res) => {
        setPersons(res);
      })
      .catch((err) => console.log(err));
  }, []);

  const deletePerson = (id) => {
    personService
      .deletePerson(id)
      .then((res) => {
        console.log(res);
        setPersons(persons.filter((person) => person.id !== id));
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <table className="table-fixed w-60 border-separate border-spacing-2 border border-slate-400 md:w-[40rem] lg:w-100 ">
        <caption className="bg-black text-white sm:text-xl ">Contacts</caption>

        <tbody className="bg-white sm:text-xl ">
          {persons.map((person, id) => (
            <tr key={person.id} className="md:text-2xl ">
              <td>{person.name}</td>
              <td className="flex items-center justify-between md:text-2xl">
                {person.number}
              </td>
              <td className="w-5 md:w-7 hover:bg-red-500 active:bg-white">
                <FaTrash
                  onClick={() => deletePerson(person.id)}
                  className="flex items-center hover:cursor-pointer hover:text-white active:text-black 
                   align-middle "
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default PersonList;
