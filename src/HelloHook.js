import React, { useState } from 'react';

// We can also use local state without a "class" Component
//  by using hooks
const HelloHook = (props) => {
  // We pull the state and a function to update state from the hook
  // The value passed to the useState function is the initial value for the state
  const [likes, updateLikes] = useState(0);

  //
  function handleClickDontClickButton() {
    updateLikes(likes - 1);
  }

  console.log('d', props.date);

  return (
    <div style={{ margin: 32 }}>
      <h2>
        Hello, {props.name}
      </h2>
      <p>
        Today is {props.date}
      </p>
      <button
        onClick={handleClickDontClickButton}
        style={{
          border: '1px solid rebeccapurple',
          borderRadius: 4,
          margin: 32,
          padding: '6px 12px',
        }}
      >
        Don't click me
      </button>
      <div
        style={{
          marginLeft: 32,
          backgroundColor: 'pink',
          padding: 16,
        }}
      >
        {likes}
      </div>
    </div>
  );
};

export default HelloHook;
