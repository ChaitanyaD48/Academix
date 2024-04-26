import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import List from "./List";
import { default as api } from "../store/apiSlice";
import { CSVLink } from "react-csv";
import axios from "axios";

const headers = [
  { label: "ID", key: "_id" },
  { label: "Date", key: "date" },
  { label: "Name", key: "name" },
  { label: "Category", key: "type" },
  { label: "Amount (INR)", key: "amount" },
];

export default function Form() {
  const { register, handleSubmit, resetField } = useForm();
  const [addTransaction] = api.useAddTransactionMutation();
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8080/api/labels")
      .then((response) => {
        setTransactions(response.data);
      })
      .catch((error) => {
        console.error("There was an error!", error);
      });
  }, []);

  const csvLink = {
    filename: "Transactions.csv",
    headers: headers,
    data: transactions,
  };

  const onSubmit = async (data) => {
    if (!data) return {};

    try {
      await addTransaction(data).unwrap();
      resetField("name");
      resetField("amount");
    } catch (error) {}
  };

  return (
    <div className="form max-w-sm mx-auto w-96">
      <h1 className="font-bold pb-4 text-xl">Transaction</h1>

      <form id="form" onSubmit={handleSubmit(onSubmit)}>
        <div className="grid gap-4">
          <div className="input-group">
            <input
              type="text"
              {...register("name")}
              placeholder="Please Enter the Transaction"
              className="form-input"
            />
          </div>
          <select className="form-input" {...register("type")}>
            <option value="Investment" defaultValue>
              Investment
            </option>
            <option value="Expense">Expense</option>
            <option value="Savings">Research Aid</option>
            <option value="Student Activity Council">
              Student Activity Council
            </option>
            <option value="Operations">Operational Costs</option>
          </select>
          <div className="input-group">
            <input
              type="text"
              {...register("amount")}
              placeholder="Transaction Amount"
              className="form-input"
            />
          </div>
          <div className="submit-btn">
            <button className="border py-2 text-white bg-indigo-500 w-full">
              Make Transaction
            </button>
          </div>
          <CSVLink
            {...csvLink}
            className="border py-2 text-white bg-indigo-500 w-full"
          >
            Download Transactions
          </CSVLink>
        </div>
      </form>

      <List></List>
    </div>
  );
}
