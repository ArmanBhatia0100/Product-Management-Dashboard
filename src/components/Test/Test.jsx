import React from "react";
import { Button } from "@mui/material";
import { Home, Refresh, ArrowBack } from "@mui/icons-material";

const Test = () => {
  const handleRefresh = () => {
    window.location.reload();
  };

  const handleGoBack = () => {
    window.history.back();
  };

  const handleGoHome = () => {
    // Add your home navigation logic here
    console.log("Navigate to home");
  };

  return (
    <div className="flex justify-center items-center bg-gradient-to-b from-gray-50 to-gray-100 p-4 min-h-screen">
      <div className="space-y-8 w-full max-w-2xl text-center">
        {/* Animated Error Number */}
        <div className="relative">
          <div className="font-bold text-[180px] text-gray-200 animate-pulse">
            404
          </div>
          <div className="absolute inset-0 flex justify-center items-center">
            <div className="font-bold text-4xl text-gray-800 md:text-6xl animate-bounce">
              4
              <span className="inline-block mx-2 text-blue-600 animate-spin">
                0
              </span>
              4
            </div>
          </div>
        </div>

        {/* Error Message */}
        <div className="space-y-4 px-4">
          <h1 className="font-bold text-4xl text-gray-800">
            Oops! Page not found
          </h1>
          <p className="mx-auto max-w-md text-gray-600">
            The page you're looking for doesn't exist or has been moved. Don't
            worry, we'll help you get back on track.
          </p>
        </div>

        {/* Illustration */}
        <div className="relative mx-auto w-64 h-64">
          <div className="absolute inset-0 animate-float">
            <svg
              viewBox="0 0 200 200"
              className="w-full h-full text-blue-600"
              fill="currentColor"
            >
              <path d="M100 0C44.8 0 0 44.8 0 100s44.8 100 100 100 100-44.8 100-100S155.2 0 100 0zm0 180c-44.2 0-80-35.8-80-80s35.8-80 80-80 80 35.8 80 80-35.8 80-80 80zm0-120c-22.1 0-40 17.9-40 40s17.9 40 40 40 40-17.9 40-40-17.9-40-40-40zm0 60c-11 0-20-9-20-20s9-20 20-20 20 9 20 20-9 20-20 20z" />
            </svg>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex sm:flex-row flex-col justify-center items-center gap-4 px-4">
          <Button
            variant="contained"
            startIcon={<Home />}
            onClick={handleGoHome}
            sx={{
              borderRadius: "9999px",
              textTransform: "none",
              px: 4,
              py: 1.5,
              fontSize: "1rem",
            }}
          >
            Go to Homepage
          </Button>

          <div className="flex gap-4">
            <Button
              variant="outlined"
              startIcon={<ArrowBack />}
              onClick={handleGoBack}
              sx={{
                borderRadius: "9999px",
                textTransform: "none",
                px: 4,
                py: 1.5,
                fontSize: "1rem",
              }}
            >
              Go Back
            </Button>

            <Button
              variant="outlined"
              startIcon={<Refresh />}
              onClick={handleRefresh}
              sx={{
                borderRadius: "9999px",
                textTransform: "none",
                px: 4,
                py: 1.5,
                fontSize: "1rem",
              }}
            >
              Refresh
            </Button>
          </div>
        </div>

        {/* Search Box (Optional) */}
        <div className="mt-8 px-4">
          <div className="relative mx-auto max-w-md">
            <input
              type="text"
              placeholder="Search for pages..."
              className="border-gray-300 px-6 py-3 border focus:border-transparent rounded-full focus:ring-2 focus:ring-blue-500 w-full focus:outline-none transition-all duration-300"
            />
            <button className="top-1/2 right-3 absolute text-gray-400 hover:text-gray-600 transform -translate-y-1/2">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Custom Animation Keyframes */}
        <style jsx>{`
          @keyframes float {
            0% {
              transform: translateY(0px);
            }
            50% {
              transform: translateY(-20px);
            }
            100% {
              transform: translateY(0px);
            }
          }
          .animate-float {
            animation: float 3s ease-in-out infinite;
          }
        `}</style>
      </div>
    </div>
  );
};

export default Test;
