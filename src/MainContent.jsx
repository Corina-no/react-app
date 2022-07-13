import React, { Component } from "react";
import NavBar from "./NavBar";

export default class MainContent extends Component {
  state = {
    pageTitle: "Customers",
    customersCount: 5,
    customers: [
      {
        id: 1,
        name: "Scott",
        phone: "077385",
        adress: { city: "New Jersy" },
        photo: "https://picsum.photo/id/1025/60",
      },
      {
        id: 2,
        name: "Jon",
        phone: "015385",
        adress: { city: " London" },
        photo: "https://picsum.photo/id/1010/60",
      },
      {
        id: 3,
        name: "Al",
        phone: "577387",
        adress: { city: "Paris" },
        photo: "https://picsum.photo/id/1010/60",
      },
      {
        id: 4,
        name: "Jo",
        phone: "",
        adress: { city: "New York" },
        photo: "https://picsum.photo/id/1010/60",
      },
      {
        id: 5,
        name: "John",
        phone: null,
        adress: { city: "New Delhi" },
        photo: "https://picsum.photo/id/1010/60",
      },
    ],
  };
  render() {
    return (
      <React.Fragment>
        <div>
          <NavBar />
          <h1 className=" m-1 p-1">
            {this.state.pageTitle}
            <span className="badge bg-secondary m-2">
              {this.state.customersCount}
            </span>
            <button className="btn btn-info" onClick={this.onRefreshClick}>
              Refresh
            </button>
          </h1>
          <table className="table">
            <thead>
              <tr>
                <th>#</th>
                <th>Customer Name</th>
                <th>Phone</th>
                <th>City</th>
              </tr>
            </thead>
            <tbody>
              {this.state.customers.map((cust) => {
                return (
                  <tr key={cust.id}>
                    <td>{cust.id}</td>
                    <td>
                      <img src={cust.photo} alt="Customer"></img>
                    </td>
                    <td>{cust.name}</td>
                    <td>
                      {cust.phone ? (
                        cust.phone
                      ) : (
                        <div className="bg-warning p-2 text-center">
                          No phone
                        </div>
                      )}
                    </td>
                    <td>{cust.adress.city}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </React.Fragment>
    );
  }
  //Executes when the user clicks Refresh Button
  onRefreshClick = () => {
    this.setState({ customersCount: 7 });
  };
}
