import "./App.css";
import { useGlobalContext } from "./Context";
import Login from "./components/Login";

function App() {
  const { login } = useGlobalContext();

  return (
    <main>
      {!login && <Login></Login>}
      {login && <section>Blah</section>}
    </main>
  );
}

export default App;
