import React, { Component } from 'react'
import EmployeeCard from '../components/EmployeeCard'
const axios = require('axios');

export default class Directory extends Component {
    constructor(props) {
        super(props);
        this.state = {
            employees: [],
            search: ''
        };
      }

      componentDidMount() {
          // call API to load users w axios
          
          axios.get('https://randomuser.me/api/?results=10')
  .then((response) => {
    // handle success
    this.setState({ ...this.state, employees: response.data.results})
    console.log(response);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
      }

    render() {
        return (
            <div>
               {this.state.employees.map(employee=>
                <EmployeeCard key={employee.firstName} employee={employee}/>)}
            </div>
        )
    }


}
