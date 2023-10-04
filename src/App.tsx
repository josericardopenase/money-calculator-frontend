import './App.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import BaseContainer from './components/container/BaseContainer'
import Conversion from './pages/Conversion'
import Chart from './pages/Chart'
import History from './pages/History'

const router = createBrowserRouter([
  {
    path : "",
    element : <BaseContainer></BaseContainer>,
    children : [
      {
        index : true,
        element: <Conversion/>,
      },
      {
        path: "/charts",
        element: <Chart/>,
      },
      {
        path: "/history",
        element: <History/>,
      },
    ]
  }
]
)

function App() {
  return (
        <RouterProvider router={router}></RouterProvider>
  )
}

export default App
