import { useRoutes } from "react-router-dom";
import { routes } from "./routes";

const App = () => {
  const routeElements = useRoutes(routes);
  return (
    <>
      <div className="route-elements">{routeElements}</div>
    </>
  );
};

export default App;
