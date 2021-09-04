import React from 'react';

class Button extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: null,
            kind: null,
            default: ' bg-gray-400 hover:bg-gray-500',
            primary: ' bg-blue-400 hover:bg-blue-500',
            danger: ' bg-red-500 hover:bg-red-600',
            warning: ' bg-yellow-400 hover:bg-yellow-500',
        };
    }

    render() {
        let className =
            'btn px-6 py-2 font-medium transition-colors duration-300 ease-in-out rounded-md';
        if (this.props.kind === 'primary') {
            className += this.state.primary;
        } else if (this.props.kind === 'danger') {
            className += this.state.danger;
        } else if (this.props.kind === 'warning') {
            className += this.state.warning;
        } else {
            className += this.state.default;
        }

        return <button className={className}>{this.props.value}</button>;
    }
}

export default Button;
