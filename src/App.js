import React from "react";
import "./App.css";

const App = () => <PersonList />;

const PersonList = () => {
  const people = [
    {
      img: Math.floor(Math.random() * 90),
      name: "Emma",
      job: "Developer"
    },
    {
      img: Math.floor(Math.random() * 90),
      name: "Sophia",
      job: "Designer"
    },
    {
      img: Math.floor(Math.random() * 90),
      name: "Isabella",
      job: "Artist"
    }
  ];

  return (
    <section>
      <Person person={people[0]}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam magnam
        excepturi totam quas asperiores maiores eum fugiat quam, placeat
        molestiae.
      </Person>
      <Person person={people[1]}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
        obcaecati impedit consequatur neque suscipit architecto, voluptatem ea
        deleniti iusto error.
      </Person>
      <Person person={people[2]}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore
        provident minima consequuntur explicabo ducimus officiis, rem
        cupiditate? Esse, non officiis?
      </Person>
    </section>
  );
};

const Person = props => {
  const { img, name, job } = props.person;
  const { children } = props;
  const url = `https://randomuser.me/api/portraits/thumb/women/${img}.jpg`;
  return (
    <div className="person">
      <img src={url} alt="" />
      <div>
        <h4>{name}</h4>
        <h4>{job}</h4>
        {children}
      </div>
    </div>
  );
};

export default App;
