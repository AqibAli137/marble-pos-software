/* eslint-disable jsx-a11y/anchor-is-valid */
import { Route, Link, Routes, Outlet } from "react-router-dom";
import { Error500 } from "./components/Error500";
import { Error404 } from "./components/Error404";
import subhanLogo from "../../assets/sm-assets/sm-logo2.jpg";

const ErrorsLayout = () => {
  return (
    <div className="d-flex vh-100 align-items-center justify-content-center flex-column">
      <div className=" ">
        <div className="d-flex flex-column flex-column-fluid text-center p-10 py-lg-20">
          <Link to="/">
            <img
              alt="Logo"
              style={{ width: "220px", height: "220px", borderRadius: "100%" }}
              src={subhanLogo}
            />
          </Link>

          <div className="pt-lg-10 mb-10">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};

const ErrorsPage = () => (
  <Routes>
    <Route element={<ErrorsLayout />}>
      <Route path="404" element={<Error404 />} />
      <Route path="500" element={<Error500 />} />
      <Route index element={<Error404 />} />
    </Route>
  </Routes>
);

export { ErrorsPage };
