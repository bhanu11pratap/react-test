import React, { useState } from "react";
import Card from "./Card";

export default function Details() {
  const [details, setDetails] = useState([
    {
      id: 1,
      name: "Dinesh patel",
      alNo: "12345",
      condition: 1,
      admissionDate: "12 Jan 2023",
      dischargeDate: "17 Jan 2023",
      amount: "RS. 30,000",
      pending: "12 Jan 09:10:57",
      onRecovery: "15 Jan 03:47:57",
      recovered: "17 Jan 03:11:57",
    },
    {
      id: 2,
      name: "Rahul patel",
      alNo: "54321",
      condition: 3,
      admissionDate: "10 Jan 2023",
      dischargeDate: "13 Jan 2023",
      amount: "RS. 10,000",
      pending: "09 Jan 09:10:57",
      onRecovery: "12 Jan 03:47:57",
      recovered: "13 Jan 03:11:57",
    },
    {
      id: 3,
      name: "Dinesh Singh",
      alNo: "13245",
      condition: 1,
      admissionDate: "22 Jan 2023",
      dischargeDate: "23 Jan 2023",
      amount: "RS. 50,000",
      pending: "21 Jan 09:10:57",
      onRecovery: "21 Jan 03:47:57",
      recovered: "23 Jan 03:11:57",
    },
    {
      id: 4,
      name: "Ram singh",
      alNo: "53421",
      condition: 2,
      admissionDate: "01 Jan 2023",
      dischargeDate: "11 Jan 2023",
      amount: "RS. 20,000",
      pending: "01 Jan 09:10:57",
      onRecovery: "05 Jan 03:47:57",
      recovered: "11 Jan 03:11:57",
    },
    {
      id: 5,
      name: "Jay patel",
      alNo: "32415",
      condition: 3,
      admissionDate: "15 Jan 2023",
      dischargeDate: "18 Jan 2023",
      amount: "RS. 50,000",
      pending: "14 Jan 09:10:57",
      onRecovery: "17 Jan 03:47:57",
      recovered: "18 Jan 03:11:57",
    },
  ]);
  return (
    <div>
      <Card details={details} />
    </div>
  );
}
