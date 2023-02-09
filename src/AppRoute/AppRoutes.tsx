import { FC } from "react";
import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom";
import DashboardLayout from "../examples/LayoutContainers/DashboardLayout";
import Basic from "../layouts/authentication/sign-in";
import { ErrorsPage } from "../layouts/errors/ErrorsPage";
import MorePages from "./MorePages";
import Otherpage from "./Otherpage";

const AppRoutes: FC = () => {
  return (
    <div className="app">
      <Routes>
        <Route path="authentication/sign-in" element={<Basic />} />
        {window.localStorage.getItem("userLogin") ? (
          <>
          <Route path="" element={<Navigate to="dashboard" />} />
          {/* add new pages routes */}
            <Route path="morePages" element={<MorePages />} />


            {/* Error Pages */}
            <Route path="error/404" element={<ErrorsPage />} />
            <Route path="/*" element={<Navigate to="error/404" />} />
          </>
        ) : (
          <Route path="/*" element={<Navigate to="authentication/sign-in" />} />
        )}
      </Routes>
    </div>
  );
};

export { AppRoutes };
