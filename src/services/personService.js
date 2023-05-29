const baseUrl = "http://localhost:3001/api/persons";

function getPersons() {
  return fetch(baseUrl)
    .then((res) => res.json())
    .then((data) => data);
}

function createPerson(person) {
  if (!person.name || !person.number) {
    return Promise.reject("Name and number are required.");
  }
  return fetch(baseUrl, {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(person),
  })
    .then((res) => res.json())
    .then((data) => data);
}

function deletePerson(id) {
  return fetch(`${baseUrl}/${id}`, {
    method: "DELETE",
  })
    .then((res) => res.status)
    .then((data) => data);
}

function titleCase(str) {
  str = str.toLowerCase();
  str = str.split(" ");

  for (var i = 0; i < str.length; i++) {
    str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
  }

  return str.join(" ");
}

export default {
  getPersons,
  createPerson,
  deletePerson,
  titleCase,
};
