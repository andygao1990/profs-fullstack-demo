import axios from 'axios';
import React, { Component } from 'react'
import Users from './Components/User'

class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            users: [],
            loading: true
        }
    }

    async componentDidMount () {
        this.setState({
            users: (await axios.get('/api/users')).data,
            loading: false
        })
    }

    render () {
        const { users, loading } = this.state
        if (loading) {
            return '...loading'
        }
        return (
            <div>
                <Users users = { users }/>
            </div>
        );
    };
};

export default App