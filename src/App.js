// import logo from "./logo.svg";
import "./App.css";

import FirstComponent from "./components/FirstComponent";
import TemplateExpressions from "./components/TemplateExpressions";
import MyComponent from "./components/MyComponent";
import Events from "./components/Events";
import Challenge from "./components/Challenge";

function App() {
  return (
    <div className="App">
      <FirstComponent />
      <h1 className="modification">Olá meu nome é Mateus Azevedo, e estou aproveitando o curso de React!</h1>
      <TemplateExpressions />
      <MyComponent />
      <Events />
      <Challenge />
    </div>
  );
}

export default App;
