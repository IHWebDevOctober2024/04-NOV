import "./App.css";
import Card from "./components/Card";

const array = [
  <p>hello</p>,
  <p>world</p>,
  <p>this</p>,
  <p>is</p>,
  <p>array</p>,
];

const employees = [
  {
    name: "John Doe",
    role: "Software Engineer",
    imgUrl: "https://example.com/john.jpg",
  },
  {
    name: "Jane Smith",
    role: "Product Manager",
    imgUrl: "https://example.com/jane.jpg",
  },
  {
    name: "Alice Johnson",
    role: "UX Designer",
    imgUrl: "https://example.com/alice.jpg",
  },
];

/* const employeesHtml = [];

employees.forEach((employee) => {
  employeesHtml.push(<p>{employee.name}</p>);
}); */

function App() {
  return (
    <>
      {/*FRAGMENT*/}
      <h1>My first REACT app</h1>
      <h3>Compu Global Hiper Mega Net</h3>
      {/* {array} */}
      {/* {employees.map((employee) => {
        return (
          <div className="card">
            <h3>{employee.name}</h3>
            <p>{employee.role}</p>
          </div>
        );
      })} */}
      {/*
        TO SEND INFO FROM PARENT COMPONENTS TO CHILD COMPONENTS WE USE PROPS
      */}
      {employees.map((employee, index) => {
        return <Card key={index} name={employee.name} role={employee.role} />;
        /* 
        props are like attributes 
         this is going to be converted to an object and passed to the Card component
          props = {
            name: "John Doe",
            role: "Software Engineer"
          }
        */
      })}
    </>
  );
}

export default App;
