import React from "react";
import { default as api } from "../store/apiSlice";

const PendingTransactionsList = ({ pending_transactions_array, onApprove }) => {
  return (
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {pending_transactions_array.map((transaction, index) => (
          <div
            key={index}
            className="bg-white shadow-md p-4 rounded-lg flex flex-col justify-between"
          >
            <div>
              <p className="text-lg font-semibold mb-2">
                {transaction.studentName}
              </p>
              <p className="text-gray-600 mb-2">MIS: {transaction.MISNumber}</p>
              <p className="text-gray-600 mb-2">
                Event: {transaction.eventName}
              </p>
              <p className="text-gray-600 mb-2">
                Request: {transaction.request}
              </p>
              <p className="text-gray-600 mb-2">
                Documents :{" "}
                <a
                  href={transaction.doc}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 underline"
                >
                  Click Here
                </a>
              </p>
              <p className="text-gray-600 mb-2">
                Amount: ₹{transaction.amount}
              </p>
            </div>
            <button
              className={`bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none ${
                transaction.approved ? "bg-gray-500" : ""
              }`}
              onClick={() => {
                onApprove(transaction);
                transaction.approved = true; // Update the approval status immediately
              }}
              disabled={transaction.approved}
            >
              {transaction.approved ? "Approved" : "Approve"}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

const Pending_Transactions = () => {
  const [addTransaction] = api.useAddTransactionMutation();
  const pending_transactions = [
    {
      name: "Hackathon Reimbursement",
      studentName: "Chaitanya Deshmukh",
      MISNumber: "112116010",
      eventName: "ETHIndia",
      request: "Hackathon Participation",
      doc: "https://drive.google.com/file/d/19o1zm-IWZskZ3VhFaFnMPrLUPh2o2t0f/view?usp=sharing",
      amount: 1000,
      approved: false,
    },
    {
      name: "Conference Reimbursement",
      studentName: "Gaurav Gupta",
      MISNumber: "112116050",
      eventName: "National Cyber Security Reseach Conference",
      request: "Conference Participation",
      doc: "Doc B",
      amount: 1500,
      approved: false,
    },
  ];

  const handleApprove = async (transaction) => {
    const newTransaction = {
      name: transaction.name,
      amount: transaction.amount,
      type: "Student Activity Council",
    };

    if (!newTransaction) return {};
    console.log(pending_transactions);

    try {
      await addTransaction(newTransaction).unwrap();
      transaction.approved = true; // Update the approval status immediately
    } catch (error) {}
  };

  return (
    <div
      className="bg-white budget min-h-[100vh]"
      style={{ fontFamily: "Montserrat, sans-serif" }}
    >
      <h1 className="text-4xl text-center py-8 mb-10 bg-slate-800 text-white">
        Transactions Waiting for Approval
      </h1>
      <div>
        <PendingTransactionsList
          pending_transactions_array={pending_transactions}
          onApprove={handleApprove}
        />
      </div>
    </div>
  );
};

export default Pending_Transactions;
