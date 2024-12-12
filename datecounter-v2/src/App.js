import "./index.css";
import { useState } from "react";

export default function App() {
  return (
    <div className="App">
      <Counter />
    </div>
  );
}

function Counter() {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);

  function handleReset(){
    setCount(0);
    setStep(1);
  }

  const date = new Date();
  console.log(date);
  date.setDate(date.getDate() + count);
  console.log(date);

  return (
    <div>
      <div>
        <input
          min="1"
          max="10"
          type="range"
          value={step}
          onChange={(e) => setStep(Number(e.target.value))}
        />
        <span> step:{step}</span>
      </div>

      <div>
        <button onClick={() => setCount((c) => c - step)}>-</button>
        <input
          type="text"
          value={count}
          onChange={(e) => Number(setCount(e.target.value))}
        />
        <button onClick={() => setCount((c) => c + step)}>+</button>
      </div>

      <p>
        <span>
          {count === 0
            ? "Today is "
            : count > 0
            ? `${count} days from today is `
            : `${Math.abs(count)} days ago was `}
        </span>
        <span>{date.toDateString()}</span>
      </p>
      { (count!==0 || step!==1)? <div>
        <button onClick={handleReset}>Reset</button>
      </div>: null }
    </div>
  );
}

// import "./index.css";
// import { useState } from "react";

// export default function App() {
//   return (
//     <div className="App">
//       <Counter />
//     </div>
//   );
// }

// function Counter() {
//   const [step, setStep] = useState(1);

//   return (
//     <div>
//       <div>
//         <label>
//           Step: {step}
//           <input
//             type="range"
//             value={step}
//             min="1"
//             max="10"
//             onChange={(e) => setStep(Number(e.target.value))}
//           />
//         </label>
//       </div>
//       <div>
//         <button onClick={() => setStep((c) => c - 1)}>-</button>
//         <input type="text" value={step} readOnly />
//         <button onClick={() => setStep((c) => c + 1)}>+</button>
//       </div>
//     </div>
//   );
// }
