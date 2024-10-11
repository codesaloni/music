import {
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import Home from './pages/home.jsx';
import Trending from "./pages/trending.jsx";
import Playlist from "./pages/playlist.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path:"/trending",
    element:<Trending/>
  },
  {
    path:"/playlist",
    element:<Playlist/>
  }
 
]);

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
