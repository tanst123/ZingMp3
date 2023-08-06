import { Routes, Route } from "react-router-dom";
import DefaultLayout from "./layouts/DefaultLayouts/DefaultLayout";
import { publicRoute } from "./routes";

function App() {
  return (
    <div className="App" style={{ width: "100vw", height: "100vh" }}>
      <Routes>
        {publicRoute.map((item) => {
          const Component = item.component;
          return (
            <Route
              path={item.path}
              element={<DefaultLayout>{<Component />}</DefaultLayout>}
            />
          );
        })}
      </Routes>
    </div>
  );
}

export default App;
