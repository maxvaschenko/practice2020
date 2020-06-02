import React from 'react';
import Cgetapp from './Cgetapp';
import axios from 'axios';
import { render } from '@testing-library/react';

export default class Capp extends React.Component {

    constructor(props) {
        super(props);

        this.state ={ data: {}, isFetching: true, error: null, posts: [] };
    }

    componentDidMount() {
        fetch('https://gentle-escarpment-19443.herokuapp.com/v1/users/auth',{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
              },
            body: JSON.stringify({
                email: 'user1@email.com',
                password: '!password!'
            })
        })
            .then(response => response.json())
            .then(result => this.setState({data: result, isFetching: false }));
    }

    render() {
        const { data, isFetching, error, posts } = this.state;
        let id = data.id;
        let token = data.access_token;
        if (isFetching) return <div>...Loading</div>;
        return (
            <div>
                <h1>{id + " " + token}</h1>
                <Cgetapp token={token}/>
            </div>
            )
    }    
}