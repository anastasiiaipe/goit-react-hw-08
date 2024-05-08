import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { selectIsRefreshing } from "../redux/auth/selectors";
import { Suspense, lazy, useEffect } from "react";
import { refreshUser } from "../redux/auth/operations";
import Layout from "./Layout/Layout";
import { Route, Routes } from "react-router-dom";
import Loader from "./Loader/Loader";
import RestrictedRoute from "./RestrictedRoute";
import PrivateRoute from "./PrivateRoute";
import { Toaster } from "react-hot-toast";

const HomePage = lazy(() => import("../pages/HomePage/HomePage"));
const ContactsPage = lazy(() => import("../pages/ContactsPage/ContactsPage"));
const LoginPage = lazy(() => import("../pages/LoginPage/LoginPage"));
const RegistrationPage = lazy(() =>
  import("../pages/RegistrationPage/RegistrationPage")
);

function App() {
  const dispatch = useDispatch();
  const { isRefreshing } = useSelector(selectIsRefreshing);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <Loader />
  ) : (
    <Layout>
      <Toaster position="top-center" reverseOrder={false} />
      <Suspense fallback={null}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route
            path="/register"
            element={
              <RestrictedRoute
                redirectTo="/contacts"
                component={<RegistrationPage />}
              />
            }
          />
          <Route
            path="/login"
            element={
              <RestrictedRoute
                redirectTo="/contacts"
                component={<LoginPage />}
              />
            }
          />
          <Route
            path="/contacts"
            element={
              <PrivateRoute redirectTo="/login" component={<ContactsPage />} />
            }
          />
        </Routes>
      </Suspense>
    </Layout>
  );
}

export default App;
