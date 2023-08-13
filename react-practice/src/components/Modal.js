import React, { Component } from "react";

class Modal extends Component {
  handleSubmit = (event) => {
    event.preventDefault();
    // console.log(event.target.title);
    const formData = {
      title: event.target.title.value,
      instruction: event.target.instruction.value,
      ingredients: event.target.ingredients.value,
    };
    this.props.handleAdd(formData);
  };
  render() {
    return (
      <div>
        {/* {this.props.children} */}
        <form onSubmit={this.handleSubmit}>
          <div className="pop">
            <h1>Add Your Recipe</h1>
            <h2>Title</h2>
            <input
              type="text"
              name="title"
              value={this.props.data.title}
              onChange={this.props.handleOnChange}
              className="inputFields"
            />
            <h2>Ingredients</h2>
            <input
              type="text"
              className="inputFields"
              name="ingredients"
              value={this.props.data.ingredients}
              onChange={this.props.handleOnChange}
            />
            <p>"*please seperate your ingredients with comma ,"</p>
            <h2>Instruction</h2>
            <textarea
              name="instruction"
              cols="30"
              rows="10"
              className="inputFields"
              value={this.props.data.instruction}
              onChange={this.props.handleOnChange}
            ></textarea>
            <button type="submit" className="add">
              Add
            </button>
            <button
              type="submit"
              className="add"
              onClick={this.props.handleCancel}
            >
              Cancel
            </button>
            <p>----All fields are mandatory ----</p>
          </div>
        </form>
      </div>
    );
  }
}

export default Modal;
