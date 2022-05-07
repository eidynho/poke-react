import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom'

import { List } from './pages/List'
import { Detail } from './pages/Detail'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<Navigate to="/list" replace />}></Route>
            <Route path="/list" element={<List />} />
            <Route path="detail/:id" element={<Detail />} />
        </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
