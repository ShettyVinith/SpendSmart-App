import React from "react";
import LeftSideBar from "../SideBars/LeftSideBar";
import RecentTransactions from "../other/RecentTransactions";
import TotalAccountBalance from "../other/TotalAccountBalance";

const TranscationHistory = () => {
  return (
    <div>
      <div className="w-2/12">
        <LeftSideBar />
      </div>
      <div className="w-10/12 ml-64 p-6 h-full max-h-32">
        <h1 className="font-semibold text-4xl text-black w-10/12">
          Transaction History
        </h1>
        <p className="my-2 w-10/12">
          Gain Insights and Track Your Transactions Over Time
        </p>
        <div className="flex justify-end mr-10">
          <select className="outline-none" name="cars" id="cars">
            <option value="ICICI">ICICI</option>
            <option value="HDFC">HDFC</option>
            <option value="SBI">SBI</option>
            <option value="Bank of Baroda">Bank of Baroda</option>
          </select>
        </div>
      </div>
      <div className="w-10/12 ml-[280px]">
        <TotalAccountBalance />
      </div>

      <div className="w-10/12 ml-[260px]">
        <RecentTransactions />
      </div>
    </div>
  );
};

export default TranscationHistory;
