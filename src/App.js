import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./page/Main";
import SignIn from "./page/SignIn";
import SignUp from "./page/SignUp";
import Findergram from "./page/Findergram";
import MyPage from "./page/MyPage";
const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/Main" element={<Main />} />
          <Route path="/SignIn" element={<SignIn />} />
          <Route path="/SignUp" element={<SignUp />} />
          <Route path="/Findergram" element={<Findergram />} />
          <Route path="/MyPage" element={<MyPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
