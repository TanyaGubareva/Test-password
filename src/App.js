import { useState } from "react";
import "./App";
function App() {
  const [value, setValue] = useState("");

  const onInput = (e) => {
    setValue(e.currentTarget.value);
  };

  const valueOnlySymbols = value.replaceAll(/\d+|[a-zA-Zа-яА-Я]+/gm, "");
  const isExistsSymbols = valueOnlySymbols.length !== 0;
  const isOnlySymbols = valueOnlySymbols.length === value.length;
  const isSmallLetters = value.length < 8;
  const isEmptyInput = value.length === 0;

  const isEasy =
    /^\d+$/gm.test(value) || /^[a-zA-Zа-яА-Я]+$/gm.test(value) || isOnlySymbols;

  const isExistsNumber = /\d/gm.test(value);
  const isExistsLetters = /[a-zA-Zа-яА-Я]/gm.test(value);

  const isMedium =
    (isExistsNumber && isExistsSymbols) ||
    (isExistsLetters && isExistsNumber) ||
    (isExistsLetters && isExistsSymbols);

  const isHard = isExistsLetters && isExistsNumber && isExistsSymbols;

  const stepOne = () => {
    if (isEmptyInput) {
      return {
        backgroundColor: "grey",
      };
    }

    if (isSmallLetters) {
      return { backgroundColor: "red" };
    }

    if (isEasy) {
      return { backgroundColor: "red" };
    }
    if (isHard) {
      return { backgroundColor: "green" };
    }
    if (isMedium) {
      return { backgroundColor: "yellow" };
    }
  };

  const stepTwo = () => {
    if (isEmptyInput) {
      return { backgroundColor: "grey" };
    }

    if (isSmallLetters) {
      return { backgroundColor: "red" };
    }

    if (isEasy) {
      return { backgroundColor: "grey" };
    }

    if (isHard) {
      return { backgroundColor: "green" };
    }

    if (isMedium) {
      return { backgroundColor: "yellow" };
    }
  };

  const stepThree = () => {
    if (isEmptyInput) {
      return {
        backgroundColor: "grey",
      };
    }

    if (isSmallLetters) {
      return { backgroundColor: "red" };
    }

    if (isHard) {
      return { backgroundColor: "green" };
    }

    if (isEasy || isMedium) {
      return { backgroundColor: "grey" };
    }
  };
  return (
    <div
      style={{
        backgroundColor: "#d5fdff",
        borderRadius: "10px",
        padding: "20px",
        width: "800px",
      }}
    >
      <p style={{ fontWeight: "800" }}>Password</p>
      <input
        value={value}
        onInput={onInput}
        className="password"
        placeholder="Enter your password.."
      />
      <p style={stepOne()}>Only letters/digits/symbols</p>
      <p style={stepTwo()}>
        Combination of letters-symbols/letters-digits/digits-symbols
      </p>
      <p style={stepThree()}>
        Combination of letters-symbols/letters-digits/digits-symbols
      </p>
    </div>
  );
}

export default App;
