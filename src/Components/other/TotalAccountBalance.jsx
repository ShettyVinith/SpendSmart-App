import React, { useState, useEffect } from "react";

const TotalAccountBalance = ({ totalBalance }) => {
  const [animatedBalance, setAnimatedBalance] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 1000; // Animation duration in ms
    const increment = (totalBalance / duration) * 18; // Increment based on 60fps (16ms/frame)

    const animate = () => {
      start += increment;
      if (start < totalBalance) {
        setAnimatedBalance(Math.round(start));
        requestAnimationFrame(animate);
      } else {
        setAnimatedBalance(totalBalance); // Ensure final value is exact
      }
    };

    requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animate); // Cleanup animation frame
  }, [totalBalance]);

  return (
    <div className="bg-blue-500 mx-4 rounded flex items-center justify-between p-4">
      <div>
        <h2 className="font-semibold text-white text-2xl mb-1">HDFC</h2>
        <p className="text-white text-lg mb-0">HDFC growth savings account</p>
        <p className="text-white text-sm mt-1">**** **** **** 999</p>
      </div>
      <div>
        <h3 className="text-white text-3xl font-bold mr-6">
          ₹{animatedBalance}
        </h3>
      </div>
    </div>
  );
};

export default TotalAccountBalance;
