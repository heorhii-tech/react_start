import React, {Component} from 'react';
import axios from 'axios'


class Users extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: null,
            users: [],

        }
    }

    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then(result => {


                this.setState({

                    users: result.data
                })
            })
            .catch(err => {
                console.log(err)
            })
    }

    render() {
        return (
            <div>
                {this.state.users.map((users) =>
                    <p key={users.id}>{users.name} : {users.phone} </p>
                )}


            </div>
        );
    }

}

export default Users;