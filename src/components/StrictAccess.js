import React, {Component} from 'react';

class StrictAccess extends Component {
    render() {
        const { username } = this.props;
        return (
            <p>Olá { username }, Seja Bem Vindo!</p>
        );
    }
}

export default StrictAccess;