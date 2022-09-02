import styles from "./App.module.css";
import { Header } from "./components/Header";
import { Tasklist } from "./components/Tasklist";
import "./global.css";

export function App() {
  return (
    <div className={styles.wrapper}>
      <Header />
      <Tasklist />
    </div>
  );
}
