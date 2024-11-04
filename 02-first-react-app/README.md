# Recap

## Create a react app with vite

Vite is a tool to build react apps. We can use it also to build other types of apps like vue, svelte, etc.

```bash
npm create vite@latest the-name-of-the-app -- --template react
```

- Navigate to the app folder

```bash
cd the-name-of-the-app
```

- Install the dependencies

```bash
npm install
```

- Start the app (create a local server with vite and see the page in the browser)

```bash
npm run dev
```

## Components in React (functional components)

To create a component we use functions.

```jsx
function MyComponent() {
  return <h1>Hello World</h1>; // return the HTML code
}
```

When we create components we are going to use PascalCase for the name of the file and the function.

REMEMBER TO EXPORT THE COMPONENT

```jsx
function MyComponent() {
  return <h1>Hello World</h1>; // return the HTML code
}

export default MyComponent;
```

If we forget to export it we are not going to be able to use it anywhere else.

We normally create a folder called components to store all the components.

## Props

Sometimes we need to pass information from a parent component to the child component. We can do this with props.

```jsx
function App() {
  const name = "John";
  return (
    <div>
      <MyComponent />
    </div>
  );
}
```

We want to pass name variable to MyComponent.

```jsx
function App() {
  const name = "John";
  return (
    <div>
      <MyComponent name={name} />
    </div>
  );
}
```

This is going to create an object like this:

```json
{
  "name": "John"
}
```

Now in the MyComponent we are going to have to this object.

```jsx
function MyComponent(props) {
  console.log(props); // {name: "John"}
  return <h1>Hello {props.name}</h1>;
}
```

props are going to have as many properties as we pass to the component.

```jsx
function App() {
  const name = "John";
  const age = 30;
  return (
    <div>
      <MyComponent name={name} age={age} />
    </div>
  );
}
```

Now props are going to be:

```json
{
  "name": "John",
  "age": 30
}
```

## Lists (arrays)

When we want to handle multiple elements we can use arrays.

```jsx
function App() {
  const namesParagraphs = [<p>John</p>, <p>Mary</p>, <p>Paul</p>];

  return (
    <div>{namesParagraphs} // render the array, a paragraph for each name</div>
  );
}
```

If we can include html on each element of the array we can use map.

```jsx
function App() {
  const names = ["John", "Mary", "Paul"];

  return (
    <div>
      {names.map((name) => {
        return <p>{name}</p>;
      })}
    </div>
    // the map is going to return an array like this [<p>John</p>, <p>Mary</p>, <p>Paul</p>]
  );
}
```

### KEY property

When we use map we need to add a key property to each element.

```jsx
function App() {
  const names = ["John", "Mary", "Paul"];

  return (
    <div>
      {names.map((name, index) => {
        return <p key={index}>{name}</p>;
      })}
    </div>
  );
}
```

React needs a unique identifier for each element. In this case we are using the index. In a real environment we should use a unique identifier like an id.

## Combining map/components/props

We can combine all these concepts to create a list of components.

```jsx
function App() {
  const names = ["John", "Mary", "Paul"];

  return (
    <div>
      {names.map((name, index) => {
        return <MyComponent key={index} name={name} />;
      })}
    </div>
  );
}
```

Now the MyComponent is going to receive the name as a prop.

```jsx
function MyComponent(props) {
  return <p>{props.name}</p>;
}
```
