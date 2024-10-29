import React from "react";
import {
  Card,
  CardContent,
  IconButton,
  Typography,
  Rating,
} from "@mui/material";
import { Visibility, Edit, Delete } from "@mui/icons-material";
import {
  Person,
  ShoppingCart,
  ShoppingBag,
  Star,
  MoreVert,
} from "@mui/icons-material";

const DashboardCard = ({
  title,
  value,
  period,
  icon: Icon,
  bgColor,
  gradient,
}) => {
  const getBackgroundColor = () => {
    if (gradient) {
      return {
        background: `linear-gradient(135deg, ${gradient.from} 0%, ${gradient.to} 100%)`,
      };
    }
    return { backgroundColor: bgColor };
  };

  return (
    <Card
      sx={{
        ...getBackgroundColor(),
        boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)",
      }}
    >
      <CardContent sx={{ padding: "1.5rem !important" }}>
        <div className="flex justify-between items-start">
          <div>
            <Typography
              variant="subtitle2"
              sx={{
                color: "rgba(255, 255, 255, 0.9)",
                marginBottom: "0.5rem",
              }}
            >
              {title}
            </Typography>
            <Typography variant="h4" sx={{ color: "#fff", fontWeight: "bold" }}>
              {value}
            </Typography>
            <Typography
              variant="body2"
              sx={{ color: "rgba(255, 255, 255, 0.8)", marginTop: "1rem" }}
            >
              {period}
            </Typography>
          </div>
          <div className="flex gap-2">
            <div
              className="p-2 rounded-lg"
              style={{ backgroundColor: "rgba(255, 255, 255, 0.1)" }}
            >
              <Icon sx={{ width: 24, height: 24, color: "#fff" }} />
            </div>
            <IconButton
              size="small"
              sx={{
                color: "#fff",
                "&:hover": { backgroundColor: "rgba(255, 255, 255, 0.1)" },
              }}
            >
              <MoreVert />
            </IconButton>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

const SalesChart = () => {
  return (
    <svg viewBox="0 0 100 100" className="w-48 h-48">
      <circle
        cx="50"
        cy="50"
        r="25"
        fill="none"
        stroke="#3b82f6"
        strokeWidth="25"
        strokeDasharray="78.5 78.5"
        transform="rotate(-90 50 50)"
      />
      <circle
        cx="50"
        cy="50"
        r="25"
        fill="none"
        stroke="#ef4444"
        strokeWidth="25"
        strokeDasharray="95.5 78.5"
        transform="rotate(0 50 50)"
      />
      <circle
        cx="50"
        cy="50"
        r="25"
        fill="none"
        stroke="#f97316"
        strokeWidth="25"
        strokeDasharray="53.7 78.5"
        transform="rotate(95.5 50 50)"
      />
      <circle
        cx="50"
        cy="50"
        r="25"
        fill="none"
        stroke="#22c55e"
        strokeWidth="25"
        strokeDasharray="84 78.5"
        transform="rotate(149.2 50 50)"
      />
    </svg>
  );
};

const DashboardSummary = () => {
  return (
    <div className="p-6" style={{ backgroundColor: "transparent" }}>
      <div className="gap-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 grid-rows-1 md:grid-row-2">
        {/* Users Card */}
        <DashboardCard
          title="Total Users"
          value="277"
          period="Last Month"
          icon={Person}
          bgColor="#10b981" // emerald-500
        />

        {/* Shopping Cart Card */}
        <DashboardCard
          title="Total Users"
          value="277"
          period="Last Month"
          icon={ShoppingCart}
          bgColor="#a855f7" // purple-500
        />

        {/* Sales Overview Card */}
        <Card
          sx={{
            backgroundColor: "#3b82f6", // blue-500
            gridRow: "span 2",
          }}
        >
          <CardContent sx={{ padding: "1.5rem !important" }}>
            <div className="flex justify-between items-start">
              <div>
                <Typography
                  variant="subtitle2"
                  sx={{
                    color: "rgba(255, 255, 255, 0.9)",
                  }}
                >
                  Total Sales
                </Typography>
                <Typography
                  variant="h5"
                  sx={{ color: "#fff", fontWeight: "bold" }}
                >
                  $3,787,681.00
                </Typography>
                <Typography
                  variant="body2"
                  sx={{ color: "rgba(255, 255, 255, 0.8)" }}
                >
                  $3,578.90 in last month
                </Typography>
              </div>
              <IconButton
                size="small"
                sx={{
                  color: "#fff",
                  "&:hover": { backgroundColor: "rgba(255, 255, 255, 0.1)" },
                }}
              >
                <MoreVert />
              </IconButton>
            </div>
            <div className="flex flex-col items-center mt-4">
              <SalesChart />
              <div className="flex gap-4 mt-4">
                {[
                  { year: "2013", color: "#3b82f6", value: "25.9%" },
                  { year: "2014", color: "#ef4444", value: "30.3%" },
                  { year: "2015", color: "#f97316", value: "17.1%" },
                  { year: "2016", color: "#22c55e", value: "26.7%" },
                ].map((item) => (
                  <div key={item.year} className="flex items-center gap-2">
                    <div
                      className="rounded-full w-3 h-3"
                      style={{ backgroundColor: item.color }}
                    />
                    <Typography variant="caption" sx={{ color: "#fff" }}>
                      {item.year}
                    </Typography>
                  </div>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Shopping Bag Card */}
        <DashboardCard
          title="Total Users"
          value="277"
          period="Last Month"
          icon={ShoppingBag}
          bgColor="#3b82f6" // blue-500
        />

        {/* Ratings Card */}
        <DashboardCard
          title="Total Users"
          value="277"
          period="Last Month"
          icon={Star}
          gradient={{
            from: "#f97316", // amber-500
            to: "#facc15", // yellow-400
          }}
        />
      </div>
    </div>
  );
};

export default DashboardSummary;
