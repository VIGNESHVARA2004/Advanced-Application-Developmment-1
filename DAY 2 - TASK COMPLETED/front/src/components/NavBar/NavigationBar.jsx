import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import { Suspense, lazy } from "react";

// import Home from "../Pages/Home";
// import Login from "../Pages/Login";
// import Register from "../Pages/Register";

const Home = lazy(() => import("../Pages/Home"));
const Login = lazy(() => import("../Pages/Login"));
const Register = lazy(() => import("../Pages/Register"));

const Loading = () => {
  console.log("loading is on....");
  return <div>loading...</div>;
};

export default function NavigationBar() {
  return (
    <BrowserRouter>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
          </li>
        </ul>
      </nav>
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/login" exact element={<Login />} />
          <Route path="/register" exact element={<Register />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}
