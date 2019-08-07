import React from "react";

class Form extends React.Component {
    render() {
        return ( <form>
            <input type="text" name="city" placeholder="Город"/>
                <button>Посмотреть погоду</button>
                <button>Добавить город в Избранное</button>
        </form>
        )
    }
}

export default Form;