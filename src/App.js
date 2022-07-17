import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { 
  Accounts,
  Categories,
  Dashboard,
  Expenses,
  Login,
  NotFound,
  Profile,
  Signup,
  Settings
 } from './pages'
import { Sidebar } from './components'

const App = () => {
  return (
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Sidebar />} >
            <Route index element={<Dashboard />} />
            <Route path='accounts' element={<Accounts />} />
            <Route path='expenses' element={<Expenses />} />
            <Route path='categories' element={<Categories />} />
            <Route path='settings' element={<Settings />} />
            <Route path='profile' element={<Profile />} />
          </Route>
          <Route path='login' element={<Login />} />
          <Route path='signup' element={<Signup />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;
