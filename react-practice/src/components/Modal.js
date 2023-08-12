import React, { Component } from "react";

class Modal extends Component {
  render() {
    return (
      <div>
        {/* {this.props.children} */}
        <div className="pop">
          <h1>Add Your Recipe</h1>
          <h2>Title</h2>
          <input type="text" id="title" className="inputFields " />
          <h2>Ingredients</h2>
          <input type="text" id="ingredients" className="inputFields" />
          <p>"*please seperate your ingredients with comma ,"</p>
          <h2>Instruction</h2>
          <textarea
            name="instruction"
            id="instruction"
            cols="30"
            rows="10"
            className="inputFields"
          ></textarea>
          <button type="submit" className="add">
            Add
          </button>
          <button type="submit" className="add">
            Cancel
          </button>
          <p>----All fields are mandatory ----</p>
        </div>
      </div>
    );
  }
}

export default Modal;
