/* eslint-disable @typescript-eslint/no-explicit-any */

import { useState } from "react";

const CouponModal = ({ couponCode, onClose }: any) => {
  const [copied, setCopied] = useState(false);
  const copyToClipboard = () => {
    navigator.clipboard.writeText(couponCode || "");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000); // Reset after 2 seconds
    // alert("Coupon code copied to clipboard!");
  };

  if (!couponCode) return null; // Render nothing if there's no coupon code

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50 z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg text-center max-w-sm w-[80%] ">
        <h2 className="text-2xl font-bold mb-4">Coupon Code</h2>
        <p className="text-lg mb-4">Your coupon code is:</p>
        <p className="text-2xl font-bold mb-4">{couponCode}</p>
        <button
          onClick={copyToClipboard}
          className="w-full bg-[#ff950a] text-white px-4 py-2 rounded-lg mb-2"
        >
          {copied ? "Copied" : "Copy"}
        </button>

        <button
          onClick={onClose}
          className="w-full bg-gray-500 text-white px-4 py-2 rounded-lg"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default CouponModal;
