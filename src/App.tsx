import { Route, Routes } from "react-router-dom";
import "./App.css";
import { URLS } from "./const";
import { Main } from "@pages/Main/Main";
import { NotFound } from "@pages/NotFound/NotFound";
import HistoryRouter from "./components/HistoryRoute/HistoryRoute";
import browserHistory from "./utils/browserHistory";

function App() {
  return (
    <HistoryRouter history={browserHistory}>
      <Routes>
        <Route path={URLS.MAIN} element={<Main />} />
        <Route path={URLS.NOT_FOUND} element={<NotFound />} />
      </Routes>
    </HistoryRouter>
  );
}

export default App;
