import React from 'react';
import axios from 'axios';
import Capp from './Capp';

export default class Cgetapp extends React.Component {

    constructor(props) {
        super(props);
    }

    componentDidMount(){
        axios({
            method: 'get',
            url: 'https://gentle-escarpment-19443.herokuapp.com/v1/articles',
            responseType: 'stream',
            headers: {
                'Authorization':
                    'Bearer ' + this.props.token,
            }
        })
        .then(response => response.json())
        .then(result => this.setState({data: result}));
    }

    render() {
        const { data } = this.state;
        return (
            <div>
                <h1>{data}</h1>
                <Cgetapp token={token}/>
            </div>  
            )
    }

}