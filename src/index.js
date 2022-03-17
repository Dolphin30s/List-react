import React, { Component } from "react";
import ReactDOM from "react-dom";

// Импортируем (подключаем) стили
import "./styles.css";

const generateId = () =>
  Math.random()
    .toString(16)
    .slice(2);

const StudentsList = props => (
  <table>
    <thead>
      <th>Id</th>
      <th>Name</th>
      <th>Surname</th>
      <th>Mark</th>
      <th>Delete</th>
    </thead>
    <tbody>
      {props.students && props.students.length > 0 ? (
        props.students.map(student => (
          <tr>
            <td>{student.id}</td>
            <td>{student.name}</td>
            <td>{student.surname}</td>
            <td>{student.mark}</td>
            <td>
              <button onClick={() => props.delete(student.id)}>-</button>
            </td>
          </tr>
        ))
      ) : (
        <tr>
          <td colSpan={5} style={{ textAlign: "center" }}>
            No students
          </td>
        </tr>
      )}
    </tbody>
  </table>
);

class AddUserComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: null,
      surname: null,
      mark: null
    };

    this.onChange = this.onChange.bind(this);
  }

  onChange(event) {
    const name = event.target.name;
    const text = event.target.value;

    this.setState({
      [name]: text
    });
  }

  render() {
    const { name, surname, mark } = this.state;

    return (
      <form>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <input
            type="text"
            name="name"
            onChange={this.onChange}
            value={name}
            placeholder="Имя: Иван"
          />
          <input
            type="text"
            name="surname"
            onChange={this.onChange}
            value={surname}
            placeholder="Фамилия: Иванов"
          />
          <input
            type="text"
            name="mark"
            onChange={this.onChange}
            value={mark}
            placeholder="Оценка: 4"
          />

          <button type="button" onClick={() => this.props.add(this.state)}>
            Add
          </button>
        </div>
        <p>
          Хотите добавить студента {name || "Иван"} {surname || "Иванов"} с оценкой{" "}
          {mark || "4"} по информатике
        </p>
      </form>
    );
  }
}

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      students: [
        { id: generateId(), name: "Екатерина", surname: "Кудрявцева", mark: "5" },
        { id: generateId(), name: "Валерия", surname: "Мухина", mark: "5" }
      ]
    };

    this.delete = this.delete.bind(this);
    this.create = this.create.bind(this);
  }

  create(student) {
    this.setState({
      students: [
        ...this.state.students,
        {
          id: generateId(),
          name: student.name || "Екатерина",
          surname: student.surname || "Кудрявцева",
          mark: student.mark || "5"
        }
      ]
    });
  }

  delete(id) {
    this.setState({
      students: this.state.students.filter(el => el.id !== id)
    });
  }

  render() {
    return (
      <div className="App">
        <AddUserComponent add={this.create} />
        <StudentsList students={this.state.students} delete={this.delete} />
      </div>
    );
  }
}

// Производим отрисовку приложения в контейнере
// с Id = "root"
const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
