import React, { Component } from "react";
// import Modal from "./components/Modal";
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

  handleCancel = () => {
    this.setState({ showModal: false });
  };

  handleOnChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    // console.log(name.title);
    this.setState({ [name]: value });
  };

  //add recipe
  handleAdd = () => {
    recipeLists.push({
      title: this.state.title,
      ingredients: this.state.ingredients.split(","),
      instruction: this.state.instruction,
    });
    console.log(recipeLists);
  };
  handleSubmit = (event) => {
    event.preventDefault();

    // console.log();
    this.setState({ showModal: false });
  };
  //view recipe
  handleView = (i) => {};

  render() {
    return this.state.showModal ? (
      <div>
        {/* {this.props.children} */}
        <form onSubmit={this.handleSubmit}>
          <div className="pop">
            <h1>Add Your Recipe</h1>
            <h2>Title</h2>
            <input
              type="text"
              name="title"
              value={this.state.title}
              onChange={this.handleOnChange}
              className="inputFields"
            />
            <h2>Ingredients</h2>
            <input
              type="text"
              className="inputFields"
              name="ingredients"
              value={this.state.ingredients}
              onChange={this.handleOnChange}
            />
            <p>"*please seperate your ingredients with comma ,"</p>
            <h2>Instruction</h2>
            <textarea
              name="instruction"
              cols="30"
              rows="10"
              className="inputFields"
              value={this.state.instruction}
              onChange={this.handleOnChange}
            ></textarea>
            <button type="submit" className="add" onClick={this.handleAdd}>
              Add
            </button>
            <button type="submit" className="add" onClick={this.handleCancel}>
              Cancel
            </button>
            <p>----All fields are mandatory ----</p>
          </div>
        </form>
      </div>
    ) : (
      <div className="headContent">
        {/* //display the title ,search bar,add recipe button //display the recipe
        cards //display modal */}
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
              <div className="recipeCard" key={recipe.title}>
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
