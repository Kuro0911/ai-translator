import "./App.css";
import { useState } from "react";
import { Navbar } from "./components/Navbar/Navbar";
import { translate } from "./utils/axios";
function App() {
  const [code, setCode] = useState("");
  const [lang1, setLang1] = useState("");
  const [lang2, setLang2] = useState("");
  const [translated, setTranslated] = useState(
    "Translating Code, Bridging Minds: Your AI-powered Linguist for Programming Languages!"
  );
  const [loading, setLoading] = useState(false);

  const handleLanguage1Change = (event) => {
    setLang1(event.target.value);
  };
  const handleLanguage2Change = (event) => {
    console.log(event.target.value);
    setLang2(event.target.value);
  };
  const handleCodeChange = (e) => {
    setCode(e.target.value);
  };
  const handleTranslate = () => {
    console.log(lang1);
    console.log(code);
    console.log(lang2);
    translate({ original_language: lang1, code: code, final_language: lang2 })
      .then((res) => {
        setTranslated(res.data);
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
        console.log(err);
      });
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
              <div
                className="grid flex-grow card bg-base-300 rounded-box place-items-center p-4 w-2/4"
                style={{ height: "auto", minHeight: "32rem" }}
              >
                <div
                  className="mockup-code w-11/12"
                  style={{ height: "100%", overflow: "auto" }}
                >
                  <textarea
                    className="textarea textarea-warning w-11/12"
                    placeholder="Enter your code here"
                    onChange={handleCodeChange}
                    style={{
                      height: "100%",
                      resize: "none",
                    }}
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
              <div
                className="grid flex-grow card bg-base-300 rounded-box place-items-center w-2/4"
                style={{ height: "auto", minHeight: "32rem" }}
              >
                <div
                  className="mockup-code w-11/12 mt-6 mb-6"
                  style={{ height: "100%", overflow: "auto" }}
                >
                  <pre
                    style={{
                      whiteSpace: "pre-wrap",
                      wordWrap: "break-word",
                      overflowWrap: "break-word",
                      maxHeight: "100%",
                    }}
                  >
                    <code>{translated}</code>
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
