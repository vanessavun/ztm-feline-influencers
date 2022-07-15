import React from 'react';
import App from '../App';

const Speak = () => {
    return (
        <div className="pa2">
            <form onSubmit={this.handleSubmit.bind(this)}>
                <input 
                className="_pa3 ba bg-lightest-purple"
                type="text"
                value={this.state.input}
                placeholder='Meow?'
                onChange={this.handleChange.bind(this)}
                />
                <input
                type="submit"
                value="Meow"
                />
            </form>
        </div>
    );
}

export default Speak;