import React from "react";

const Invoicer = () => {
  return (
    <div className="row">
      <div className="col col-6"></div>
      <div className="col col-6">
        <div className="row">
          <div className="col-8">
            <h2 className="text-center">Subhan</h2>
            <h4 className="text-center">Marble</h4>
          </div>
          {/* Logo */}
          <div className="col-4 d-flex justify-content-center align-items-center">
            <h2 className="bg-primary p-2 rounded-5">SM</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Invoicer;
