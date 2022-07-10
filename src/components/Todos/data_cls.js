import React from "react";
import "./cls.css"

export default class Todo_Class extends React.Component {
  state = {
    items: [],
    todo: null,
    theme: "Dark"
  };

  componentDidMount() {
    this.loadData();
  }

  loadData = () => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((x) => x.json())
      .then((response) => {
        this.setState({ items: response });
      })
  };

  renderBody = () => {
    return (
      <React.Fragment>
        {this.state.items.slice(0,25)
          .sort((a, b) => a.id - b.id)
          .map((item, i) => {
            return (
              <tr  className={this.props.theme != "Dark" ? "clswhite" : ""} key={i}>
                <th scope="row">{item.userId}</th>
                <td>{item.id}</td>
                <td>{item.title}</td>
              </tr>
            );
          })}
      </React.Fragment>
    );
  };

  renderTable = () => {
    return (
      <>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">UserID</th>
              <th scope="col">ID</th>
              <th scope="col">Title</th>
            </tr>
          </thead>
          <tbody>{this.renderBody()}</tbody>
        </table>
      </>
    );
  };

  render() {
    const { todo } = this.state;
    return (
      <>
        <h1>TODOS</h1>
        <hr></hr>
        { this.renderTable()}
      </>
    );
  }
}