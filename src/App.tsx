import { Routes, Route } from 'react-router-dom';
import SigninForm from './_auth/forms/SigninForm.tsx'
import SignupForm from './_auth/forms/SignupForm.tsx';
import { Home  } from './_root/pages';
import './globals.css';
import AuthLayout from './_auth/AuthLayout.tsx';

const App = () => {
    return (
        <main className="flex h-screen">
          <Routes>
            { /* public route */}
            <Route element={<AuthLayout/>}>
            <Route path="/sign-in" element={<SigninForm/>}/>
            <Route path="/sign-up" element={<SignupForm/>}/>

            </Route>

            { /* private route */}
            <Route index element={<Home/>}/>


          </Routes>

        </main>
    )
}

export default App