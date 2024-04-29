import React from "react";
import ApprovalForm from "../components/ApprovalForm";

const Approval = () => {
  return (
    <div
      className="bg-white budget min-h-[100vh]"
      style={{ fontFamily: "Montserrat, sans-serif" }}
    >
      <h1 className="text-4xl text-center py-8 mb-10 bg-slate-800 text-white">
        Request Approval
      </h1>
      <div className="container mx-auto max-w-6xl text-center drop-shadow-lg text-gray-800">
        {/* grid columns */}
        <div className="grid md:grid-cols-1">
          {/* charts */}
          {/* <Graph></Graph> */}
          {/* form */}
          <ApprovalForm></ApprovalForm>
        </div>
      </div>
    </div>
  );
};

export default Approval;
