import React from 'react';

class Box extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { name, age, count } = this.props.data;
    return (
      <div style={{ width: '200px', height: '100px', background: 'yellow' }}>
        <span>{name}</span>
        <span>{age}</span>
        <span>{count}</span>
      </div>
    );
  }
}

export default Box;
