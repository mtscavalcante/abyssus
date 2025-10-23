import { Home } from "../pages/home";
import { Levels } from "../pages/levels";

export const ROUTES: {
  path: string;
  element: React.JSX.Element;
}[] = [
  { path: "/", element: <Home /> },
  { path: "/levels", element: <Levels /> },
];
