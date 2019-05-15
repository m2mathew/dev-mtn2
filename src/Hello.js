import React from 'react';

class Hello extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      likes: 0,
    }
  }

  handleClickDontClickButton = () => {
    this.setState({
      likes: this.state.likes - 1,
    });

    // Can also access the current state in this way which is
    //  preferable if you need to update state based on current state
    // this.setState(state => ({
    //   likes: state.likes - 1,
    // }));
  };

  render() {
    return (
      <div style={{ margin: 32 }}>
        <h2>
          Hello, {this.props.name}
        </h2>
        <p>
          Today is {this.props.date}
        </p>
        <button
          onClick={this.handleClickDontClickButton}
          style={{
            border: '1px solid rebeccapurple',
            borderRadius: 4,
            margin: 32,
            padding: '6px 12px',
          }}
        >
          don't click me
        </button>
        <div
          style={{
            marginLeft: 32,
            backgroundColor: 'pink',
            padding: 16,
          }}
        >
          {this.state.likes}
        </div>
      </div>
    );
  }
}

export default Hello;
