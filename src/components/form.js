import React from "react";


const Form = (props) => {
    {
        return (
          <div>
            <form onSubmit={props.weatherMethod}>
              <input type="text" name="city" placeholder="Город" />
              <button>Посмотреть погоду</button>
            </form>
            <button>Запомнить город</button>
          </div>
        );
      }
}

export default Form;
