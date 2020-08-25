import React from "react";
import { useSpring, animated } from "react-spring";

function App() {
  //  const props = useSpring({
  //   to: [{opacity: 1, color: '#ffaaee'}, {opacity: 0, color: 'rgb(14,26,19)'}],
  //   from: {opacity: 0, color: 'red'}
  // })
  const props = useSpring({
    to: { opacity: 1, color: "red" },
    from: { opacity: 0, color: "orange" },
  });
  return (
    <div className="App">
      <animated.h1 style={props}>Testing this out!</animated.h1>
    </div>
  );
}

export default App;
