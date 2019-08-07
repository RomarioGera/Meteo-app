import React from "react";

class Form extends React.Component {
  render() {
    return (
      <div>
        <form onSubmit={this.props.weatherMethod}>
          <input type="text" name="city" placeholder="Город" />
          <button>Посмотреть погоду</button>
        </form>
        <button>Запомнить город</button>
      </div>
    );
  }
}

export default Form;
