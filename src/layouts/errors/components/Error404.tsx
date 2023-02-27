import { FC } from "react";

const Error404: FC = () => {
  return (
    <>
      {/* <h1 className="fw-bolder fs-4x text-gray-700 mb-10">صفحہ نہیں ملا</h1> */}
      <div className="d-flex  justify-content-center">
                  <h3 className=" fs-1 text-gray-700 mb-10 col-12 text-center my-3">
                  آپ کے پاس یہ صفحہ نہیں ہے۔
                  </h3>
                </div>
    </>
  );
};

export { Error404 };
