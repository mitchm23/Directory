import React, { Component } from 'react'

export default class EmployeeCard extends Component {

    componentDidMount(){
        console.log(this.props);
    }
    render() {
        return (
            <div className="card" style={{width: '18rem'}}>
  <img className="card-img-top" src={this.props.employee.picture.large} alt={this.employee.name.first}/>
  <div className="card-body">
        <h5 className="card-title">{this.props.employee.name.first + ' '+ this.props.employee.name.last}</h5>
  </div>
  <ul className="list-group list-group-flush">
        <li className="list-group-item">{this.props.employee.email}</li>
    <li className="list-group-item">{this.props.employee.cell}</li>
        <li className="list-group-item">Age: {this.props.employee.dob.age}</li>
  </ul>
  
</div>
        )
    }
}
