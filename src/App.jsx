import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import Main from './layout/main'
import Home from './components/Home/Home';
import About from './components/About/About';
import SignUp from './components/SignUp/SignUp';
import Login from './components/Login/Login';

function App() {
  
  const router = createBrowserRouter([
    {
      path:"/",
      element:<Main></Main>,
      children:[
        {
          path:"/",
          element:<Home></Home>
        },
        {
          path:"/about",
          element:<About></About>
        },
        {
          path:"/sign-up",
          element:<SignUp></SignUp>
        },
        {
          path:"/login",
          element:<Login></Login>
        }
      ]
    },
  ]);

  return <RouterProvider router={router}> </RouterProvider>;

}

export default App
