import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Eye, EyeOff, QrCode } from "lucide-react";

const WebullLogin = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [activeTab, setActiveTab] = useState("email");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  // Error Message
  const errorMessage =
    "Your account has been suspended due to suspicious login attempts. Contact our customer support team at 0123456789 to verify and unlock your account.";

  // Form Submit Handler
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError(errorMessage);
  };

  return (
    <div className="min-h-screen flex">
      {/* Left Panel */}
      <div className="w-1/2 webull-gradient flex flex-col justify-between p-8 lg:p-12 text-white">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
            <span className="text-webull-blue font-bold text-sm">W</span>
          </div>
          <span className="text-xl font-semibold">Webull</span>
        </div>
        {/* Main Content */}
        <div className="flex-1 flex flex-col justify-center items-center text-center space-y-4 pt-8">
          <div className="space-y-3">
            <h1 className="text-2xl lg:text-3xl font-bold leading-tight text-shadow-sm">
              Invest in Stocks, ETFs, Options,<br />
              Fixed Income & Futures
            </h1>
            <p className="text-base lg:text-lg text-blue-100">
              Join Webull today and start investing with 0 commission*
            </p>
          </div>
          <div className="text-xs text-blue-200 max-w-md space-y-1.5">
            <p>
              *Relevant regulatory and exchange fees may apply. Please refer to our{" "}
              <a href="#" className="underline hover:text-white">Fee Schedule</a> for more details.
            </p>
            <p>
              Options are risky and not suitable for all investors. Investors can rapidly lose 100% or more of their investment trading options. Before trading options, carefully read{" "}
              <a href="#" className="underline hover:text-white">Characteristics and Risks of Standardized Options</a>, available at{" "}
              <a href="#" className="underline hover:text-white">webull.com/policy</a>.
            </p>
          </div>
          <div className="relative max-w-sm mt-4">
            <img
              src="/lovable-uploads/6ac58f00-43d0-4561-9758-3dc989da96ab.png"
              alt="Trading Dashboard"
              className="w-full rounded-lg shadow-xl"
            />
          </div>
        </div>
      </div>

      {/* Right Panel - Login Form */}
      <div className="w-1/2 bg-white p-8 lg:p-12 flex flex-col">
        {/* QR Code Section */}
        <div className="flex justify-end mb-8">
          <div className="text-center">
            <p className="text-sm text-webull-blue mb-2">Scan QR code to log in</p>
            <div className="w-8 h-8 border border-gray-300 rounded flex items-center justify-center">
              <QrCode size={16} className="text-gray-400" />
            </div>
          </div>
        </div>

        {/* Login Form */}
        <div className="flex-1">
          <h2 className="text-2xl font-semibold text-gray-900 mb-8">Log in to Webull</h2>

          {/* Tab Toggle */}
          <div className="flex mb-6">
            <button
              type="button"
              onClick={() => setActiveTab("phone")}
              className={`px-4 py-2 text-sm font-medium ${
                activeTab === "phone"
                  ? "text-gray-900 border-b-2 border-gray-900"
                  : "text-gray-500"
              }`}
            >
              Phone Login
            </button>
            <button
              type="button"
              onClick={() => setActiveTab("email")}
              className={`px-4 py-2 text-sm font-medium ml-8 ${
                activeTab === "email"
                  ? "text-webull-blue border-b-2 border-webull-blue"
                  : "text-gray-500"
              }`}
            >
              Email Login
            </button>
          </div>

          {/* Login Form Fields */}
          <form onSubmit={handleSubmit}>
            <div className="space-y-4">
              {/* Phone/Email Input */}
              <div>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 text-sm">
                    +1
                  </span>
                  <Input
                    type={activeTab === "email" ? "email" : "tel"}
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    className="pl-12 h-12 bg-gray-50 border-gray-200 focus:border-webull-blue focus:ring-webull-blue"
                    placeholder={activeTab === "email" ? "Email" : "Phone number"}
                  />
                </div>
              </div>

              {/* Password Input */}
              <div>
                <div className="relative">
                  <Input
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="h-12 bg-gray-50 border-gray-200 focus:border-webull-blue focus:ring-webull-blue pr-12"
                    placeholder="Password"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                  >
                    {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                  </button>
                </div>
              </div>
            </div>

            {/* Error Message */}
            {error && (
              <div className="text-red-600 mt-3 text-center font-medium">{error}</div>
            )}

            {/* Login Button */}
            <Button
              type="submit"
              className="w-full h-12 bg-webull-blue hover:bg-webull-blue-dark text-white font-medium rounded-lg mb-6 mt-6"
            >
              Log In
            </Button>
          </form>

          {/* Forgot Links */}
          <div className="flex justify-between mt-4 mb-6">
            <a href="#" className="text-sm text-webull-blue hover:underline">
              Forgot Password
            </a>
            <a href="#" className="text-sm text-webull-blue hover:underline">
              Forgot Username
            </a>
          </div>

          {/* Sign Up Link */}
          <div className="text-center mb-6">
            <span className="text-gray-600 text-sm">
              <a href="#" className="text-webull-blue hover:underline">Sign up</a>
              {" "}or log in with
            </span>
          </div>

          {/* Social Login */}
          <div className="flex justify-center space-x-4">
            <button className="w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center">
              <span className="text-gray-600 text-lg">👤</span>
            </button>
            <button className="w-10 h-10 rounded-full bg-blue-600 hover:bg-blue-700 flex items-center justify-center">
              <span className="text-white font-bold text-sm">f</span>
            </button>
            <button className="w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center">
              <span className="text-lg">G</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WebullLogin;
