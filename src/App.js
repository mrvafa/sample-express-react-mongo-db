import React from "react";
import {Component} from "react/cjs/react.production.min";

export default class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            firstName: '',
            lastName: '',
            age: 0,
            email: '',

        };
    }

    handleInputChange = e => {
        this.setState({
            [e.target.name]: e.target.value,
        });
    };

    // saveForm() {
    //     console.log("this.state.firstName");
    //     console.log(this.state.firstName);
    //     console.log(this.state.lastName);
    //     console.log(this.state.age);
    //     console.log(this.state.email);
    // }

    render() {
        return (
            <div>
                <h2>Responsive Form</h2>
                <h5>by mrvafa, Oct 15, 2020</h5>
                <p>
                    This is an important form. we will need this form until the end of term!
                </p>
                <form method="post" style={{margin: 30}}>
                    <div className="row">
                        <div className="col-25">
                            <label htmlFor="fname">First Name</label>
                        </div>
                        <div className="col-75">
                            <input
                                onChange={this.handleInputChange}
                                type="text"
                                id="fname"
                                name="firstName"
                                placeholder="Your name.."
                                required
                            />
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-25">
                            <label htmlFor="lname">Last Name</label>
                        </div>
                        <div className="col-75">
                            <input
                                onChange={this.handleInputChange}
                                type="text"
                                id="lname"
                                name="lastName"
                                placeholder="Your last name.."
                                required
                            />
                        </div>
                    </div>

                    <div className="row">
                        <label htmlFor="age">Age</label>
                        <div className="col-75">
                            <input
                                onChange={this.handleInputChange}
                                type="number"
                                id="age"
                                name="age"
                                placeholder="Enter your age.."
                                required
                            />
                        </div>
                    </div>

                    <div className="row">
                        <label htmlFor="age">Email</label>
                        <div className="col-75">
                            <input
                                onChange={this.handleInputChange}
                                type="email"
                                id="email"
                                name="email"
                                placeholder="Your last email.."
                                required
                            />
                        </div>
                    </div>

                    <div className="row">
                        <input type="submit" value="Submit"/>
                    </div>
                </form>
            </div>
        );
    }
};
