import Accelerometer from "./Accelerometer";
import ClearCacheButton from "./ClearCache";
import ClearCookiesButton from "./ClearCookie";
// import Device from "./Device";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <h1>Accelerometer Data</h1>

      <ClearCacheButton />
      <ClearCookiesButton />
      <Accelerometer />
      {/* <Device /> */}
    </div>
  );
}
