import React from "react";
import Header from "../other/Header";
import LeftSideBar from "../SideBars/LeftSideBar";
import RecentTransactions from "../other/RecentTransactions";
import RightSideBar from "../SideBars/RightSideBar";
import TotalAccountBalance from "../other/TotalAccountBalance";

const UserDashboard = () => {
  return (
    <div className="grid grid-cols-12 min-h-screen fixed gap-1">
      <div className="col-span-2 rounded ">
        <LeftSideBar />
      </div>
      <div className="col-span-7 max-h-screen grid grid-rows-12">
        <div className="row-span-2 rounded ">
          <Header />
        </div>
        <div className="row-span-2 mt-1 rounded">
          <TotalAccountBalance totalBalance={45000} />
        </div>
        <div className="row-span-7 mt-3 rounded ">
          <RecentTransactions />
        </div>
      </div>
      <div className="col-span-3 rounded ">
        <RightSideBar />
      </div>
    </div>
  );
};

export default UserDashboard;
