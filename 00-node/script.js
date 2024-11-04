const students = [
  "Alice Johnson",
  "Bob Smith",
  "Charlie Brown",
  "David Wilson",
  "Eva Green",
  "Frank White",
  "Grace Lee",
  "Hannah Clark",
  "Ian Davis",
  "Julia Martinez",
];

students.forEach((student) => {
  console.log(student);
});

// Two ways of creating async functions
async function collectData() {}

const getData = async () => {
  const data = await fetch("https://jsonplaceholder.typicode.com/albums");
  const jsonData = await data.json();
  console.log(jsonData);
};

const axios = require("axios");

// getData();

const getWithAxios = async () => {
  const response = await axios.get(
    "https://jsonplaceholder.typicode.com/users"
  );
  console.log(response.data);
};

getWithAxios();
