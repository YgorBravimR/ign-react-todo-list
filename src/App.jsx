import styles from "./App.module.css";
import { Header } from "./components/Header";
import { Tasklist } from "./components/Tasklist";
import { Tasks } from "./components/Tasks";
import "./global.css";

export function App() {
  return (
    <div className={styles.wrapper}>
      <Header />
      <Tasklist />
    </div>
  );
}

export default App;

// Unica alteração adicionando esse comentario pra testar o .git
