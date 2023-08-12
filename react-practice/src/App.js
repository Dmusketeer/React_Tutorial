import React, { Component } from "react";
import Modal from "./components/Modal";
import "./App.css";
import { recipeLists } from "./Data/Data";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      recipes: recipeLists,
      title: undefined,
      instruction: undefined,
      ingredients: undefined,
      search: "",
      mode: -1,
    };
  }

  handleModal = () => {
    this.setState({ showModal: true });
  };

  handleCancel = () => {};

  handleOnChange = (e) => {};

  //add recipe
  handleAdd = () => {};

  //view recipe
  handleView = (i) => {};

  render() {
    return this.state.showModal ? (
      <Modal />
    ) : (
      <div className="headContent">
        <div>
          <h1 className="title">Recipe Book</h1>
          <input
            type="text"
            className="searchBar"
            placeholder="search by recipe name"
          />
          <button
            type="submit"
            className="addbutton"
            onClick={this.handleModal}
          >
            Add Recipe
          </button>
        </div>
        <div className="recipeContainer">
          {recipeLists.map((recipe) => {
            return (
              <div className="recipeCard">
                <h2>{recipe.title}</h2>
                <button type="submit">view more</button>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default App;
