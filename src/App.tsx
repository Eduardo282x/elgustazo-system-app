import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css'
import { Menu } from './pages/menu/Menu';
import { CustomStepper } from './pages/steps/CustomStepper';

const router = createBrowserRouter([
  {
    path:'/',
    element: <Menu/>
  },
  {
    path:'/pedidos',
    element: <CustomStepper/>
  },
])

function App() {


  return (
    <RouterProvider router={router}/>
  )
}

export default App
