import React, { Fragment } from "react";
import { DNA } from "react-loader-spinner";

export default function Loader() {
  return (
    <div className="d-grid justify-content-center align-content-center my-5">
      <DNA
        visible={true}
        height="80"
        width="80"
        ariaLabel="dna-loading"
        wrapperStyle={{}}
        wrapperClass="dna-wrapper"
      />
      <h5 className="text-dark">Loading...</h5>
    </div>
  );
}
