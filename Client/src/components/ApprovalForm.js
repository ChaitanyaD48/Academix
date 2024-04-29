import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { default as api } from "../store/apiSlice";
import axios from "axios";

export const pending_transactions = [];

export default function Form() {
  const { register, handleSubmit, resetField } = useForm();
  const [addTransaction] = api.useAddTransactionMutation();

  const onSubmit = (data) => {
    if (!data) return {};
    const dataObj = {
      ...data,
      approved: false,
    };
    const obj = dataObj;
    pending_transactions.push(obj);
    console.log(pending_transactions);

    // try {
    //   await addTransaction(data).unwrap();
    //   resetField("name");
    //   resetField("amount");
    // } catch (error) {}
  };

  return (
    <div className="form max-w-sm mx-auto w-96">
      <h1 className="font-bold pb-4 text-xl">Enter Student Details</h1>

      <form id="form" onSubmit={handleSubmit(onSubmit)}>
        <div className="grid gap-4">
          <div className="input-group">
            <input
              type="text"
              {...register("studentName")}
              placeholder="Please Enter your Name"
              className="form-input"
            />
            <input
              type="number"
              {...register("MISNumber")}
              placeholder="Please Enter your MIS Number"
              className="form-input"
            />
          </div>
          <h3 className="font-bold pb-4 text-xl">Enter Event Details</h3>
          <div className="input-group">
            <input
              type="text"
              {...register("eventName")}
              placeholder="Event Name"
              className="form-input"
            />
            <input
              type="text"
              {...register("request")}
              placeholder="Purpose of Request"
              className="form-input"
            />
            <input
              type="text"
              {...register("Doc")}
              placeholder="Enter Required Documents"
              className="form-input"
            />
            <input
              type="text"
              {...register("amount")}
              placeholder="Enter Transaction Amount"
              className="form-input"
            />
          </div>
          <div className="submit-btn">
            <button className="border py-2 text-white bg-indigo-500 w-full">
              Request Approval
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
