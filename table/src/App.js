import './App.css';
import {Component} from "react/cjs/react.production.min";
import axios from "axios";

class App extends Component {
    constructor() {
        super();
        this.state = {
            users: [],
        }
    }

    componentDidMount() {
        axios.get('/get-forms').then(response => {
            this.setState({
                users: response.data,
            });
        });


    }

    render() {
        return (
            <table className="table">
                <thead>
                <tr>
                    <th scope="col">First Name</th>
                    <th scope="col">Last Name</th>
                    <th scope="col">Age</th>
                    <th scope="col">Email</th>
                </tr>
                </thead>
                <tbody>
                {this.state.users.map((user) => (
                    <tr>
                        <td>
                            {`${user.firstName}`}
                        </td>
                        <td>
                            {`${user.lastName}`}
                        </td>
                        <td>
                            {`${user.age}`}
                        </td>
                        <td>
                            {`${user.email}`}
                        </td>
                    </tr>
                ))}

                </tbody>
            </table>
        );
    }
}

export default App;
