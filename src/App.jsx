import { Route, Routes, useLocation } from "react-router-dom";
import { lazy, Suspense } from "react";
import Layout from "./components/Layout/Layout";
import Loader from "components/Loader/Loader";

import "primereact/resources/primereact.min.css";
import "react-toastify/dist/ReactToastify.css";

const Home = lazy(() => import("./pages/Home"));
const CreateEvent = lazy(() => import("./pages/CreateEvent"));
const EventDetails = lazy(() => import("./pages/EventDetails"));
const EditEvent = lazy(() => import("./pages/EditEvent"));

function App() {
  const location = useLocation();
  return (
    <Suspense fallback={<Loader />}>
      <Routes key={location.pathname} location={location}>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="create" element={<CreateEvent />} />
          <Route path=":id" element={<EventDetails />} />
          <Route path="edit" element={<EditEvent />} />
        </Route>
      </Routes>
    </Suspense>
  );
}

export default App;
