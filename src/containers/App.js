import React, { useState, useEffect } from "react";
import "./App.css";
import { SearchBox } from "../components/SearchBox";
import { Scroll } from "../components/Scroll";
import { CardList } from "../components/CardList";

export const App = () => {
  const [alliances, setAlliances] = useState([]);
  const [searchFields, setSearchFields] = useState("");

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((alliance) => {
        setAlliances(alliance);
      });
  }, []);

  const onSearchChange = (event) => {
    setSearchFields(event.target.value);
  };

  const filteredAlliance = alliances.filter((alliance) => {
    return alliance.name.toLowerCase().includes(searchFields.toLowerCase());
  });

  return !alliances.length ? (
    <h1>Loading</h1>
  ) : (
    <div className="tc">
      <h1 className="f1">Weird Alliances</h1>
      <SearchBox searchChange={onSearchChange} />
      <Scroll>
        <CardList robots={filteredAlliance}></CardList>
      </Scroll>
    </div>
  );
};

// export class App extends React.Component {
//   constructor() {
//     console.log("constructor");
//     super();
//     this.state = {
//       robots: [],
//       searchField: "",
//     };
//   }

//   componentWillUnmount() {
//     console.log("componentWillUnmount");
//   }

//   componentDidMount() {
//     console.log("componentDidMount");
//     fetch("https://jsonplaceholder.typicode.com/users")
//       .then((response) => response.json())
//       .then((users) => this.setState({ robots: users }));
//   }

//   onSearchChange = (event) => {
//     this.setState({ searchField: event.target.value });
//   };

//   render() {
//     console.log("render");
//     const { robots, searchField } = this.state;
//     const filteredRobots = robots.filter((robot) =>
//       robot.name.toLocaleLowerCase().includes(searchField)
//     );
//     if (robots.length === 0) {
//       return <h1>Loading</h1>;
//     } else {
//       return (
//         <div className="tc">
//           <h1 className="f1">Weird Alliances</h1>
//           <SearchBox key="11" searchChange={this.onSearchChange} />
//           <Scroll>
//             <CardList key="22" robots={filteredRobots}></CardList>
//           </Scroll>
//         </div>
//       );
//     }
//   }
// }
