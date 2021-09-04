import React from 'react';

class Button extends React.Component {
    render() {
        return (
            <button className="px-6 py-2 font-medium transition-colors duration-300 ease-in-out bg-blue-400 rounded-md btn hover:bg-blue-500">
                Main Button
            </button>
        );
    }
}

export default Button;
