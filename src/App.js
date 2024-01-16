import "./App.css";
import { useState } from "react";
import { Navbar } from "./components/Navbar/Navbar";
function App() {
  const [code, setCode] = useState("");
  const [lang1, setLang1] = useState("");
  const [lang2, setLang2] = useState("");
  const [translated, setTranslated] = useState("");

  const handleLanguage1Change = (event) => {
    setLang1(event.target.value);
  };
  const handleLanguage2Change = (event) => {
    setLang2(event.target.value);
  };
  const handleCodeChange = (e) => {
    setCode(e.target.value);
  };
  const handleTranslate = () => {
    console.log(lang1);
    console.log(lang2);
    console.log(code);
  };
  let languages = [
    "Python",
    "JavaScript",
    "Java",
    "C++",
    "C#",
    "PHP",
    "TypeScript",
    "Ruby",
    "Swift",
    "Kotlin",
  ];

  return (
    <div className="App">
      <Navbar />
      <div className="hero h-full lg:h-[88vh] bg-base-200">
        <div className="hero-content text-center w-full">
          <div className="w-full">
            <div class="flex flex-col w-full lg:flex-row justify-center items-center">
              <div class="grid flex-grow card bg-base-300 rounded-box place-items-center p-4">
                <div className="mockup-code w-11/12">
                  <textarea
                    class="textarea textarea-warning w-11/12"
                    placeholder="Enter your code here"
                    onChange={handleCodeChange}
                  ></textarea>
                </div>
              </div>
              <div class="divider lg:divider-horizontal lg:p-4 lg:!w-[16vw] items-center">
                <select
                  className="select w-full m-4"
                  onChange={handleLanguage1Change}
                  value={lang1}
                >
                  <option disabled selected>
                    Pick your code language
                  </option>
                  {languages.map((e, k) => (
                    <option key={k}>{e}</option>
                  ))}
                </select>
                <button
                  class="btn btn-secondary w-full text-lg"
                  onClick={handleTranslate}
                >
                  Translate
                </button>
                <select
                  className="select w-full m-4"
                  onChange={handleLanguage2Change}
                  value={lang2}
                >
                  <option disabled selected>
                    Pick your code language
                  </option>
                  {languages.map((e, k) => (
                    <option key={k}>{e}</option>
                  ))}
                </select>
              </div>
              <div class="grid flex-grow h-32 card bg-base-300 rounded-box place-items-center">
                <div className="mockup-code w-11/12">
                  <pre>
                    <code>without prefix</code>
                  </pre>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
