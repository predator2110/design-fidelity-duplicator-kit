
import React from 'react';

const DashboardMockup = () => {
  return (
    <div className="w-full bg-gray-900 p-4 rounded-lg">
      {/* 2x2 Grid Layout */}
      <div className="grid grid-cols-2 gap-3 h-64">
        
        {/* Top Left - Net Account Value */}
        <div className="bg-gray-800 rounded-lg p-4 flex flex-col justify-between">
          <div>
            <h3 className="text-gray-400 text-xs font-medium mb-2">NET ACCOUNT VALUE</h3>
            <div className="text-green-400 text-xl font-bold">$124,567.89</div>
            <div className="text-green-400 text-sm">+$2,345.67 (+1.92%)</div>
          </div>
          <div className="text-gray-500 text-xs">Today</div>
        </div>

        {/* Top Right - Cash Flow Bar Graph */}
        <div className="bg-gray-800 rounded-lg p-4">
          <h3 className="text-gray-400 text-xs font-medium mb-3">CASH FLOW</h3>
          <div className="flex items-end justify-between h-20 gap-1">
            <div className="bg-green-500 w-3 h-12 rounded-sm"></div>
            <div className="bg-red-500 w-3 h-8 rounded-sm"></div>
            <div className="bg-green-500 w-3 h-16 rounded-sm"></div>
            <div className="bg-green-500 w-3 h-10 rounded-sm"></div>
            <div className="bg-red-500 w-3 h-6 rounded-sm"></div>
            <div className="bg-green-500 w-3 h-18 rounded-sm"></div>
            <div className="bg-green-500 w-3 h-14 rounded-sm"></div>
          </div>
        </div>

        {/* Bottom Left - Financial Chart */}
        <div className="bg-gray-800 rounded-lg p-4">
          <h3 className="text-gray-400 text-xs font-medium mb-3">PORTFOLIO</h3>
          <div className="relative h-16">
            <svg className="w-full h-full" viewBox="0 0 100 40">
              <polyline
                fill="none"
                stroke="#10b981"
                strokeWidth="1.5"
                points="0,35 15,30 25,25 35,20 45,15 55,18 65,12 75,8 85,10 100,5"
              />
              <circle cx="100" cy="5" r="2" fill="#10b981" />
            </svg>
          </div>
        </div>

        {/* Bottom Right - Order Flow */}
        <div className="bg-gray-800 rounded-lg p-4">
          <h3 className="text-gray-400 text-xs font-medium mb-3">ORDER FLOW</h3>
          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <span className="text-green-400 text-xs">BUY</span>
              <div className="flex-1 mx-2 bg-gray-700 h-1.5 rounded">
                <div className="bg-green-500 h-full w-3/4 rounded"></div>
              </div>
              <span className="text-green-400 text-xs">75%</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-red-400 text-xs">SELL</span>
              <div className="flex-1 mx-2 bg-gray-700 h-1.5 rounded">
                <div className="bg-red-500 h-full w-1/4 rounded"></div>
              </div>
              <span className="text-red-400 text-xs">25%</span>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default DashboardMockup;
