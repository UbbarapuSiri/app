import React from 'react';
import { cn } from '../../utils/cn';

const Badge = ({ className, variant = "default", ...props }) => {
  const variants = {
    default: "bg-gray-200 text-gray-800",
    primary: "bg-primary-100 text-primary-800",
    success: "bg-green-100 text-green-800",
    warning: "bg-yellow-100 text-yellow-800",
    danger: "bg-red-100 text-red-800",
    kalam: "bg-gradient-to-r from-kalam-orange to-kalam-blue text-white"
  };

  return (
    <span
      className={cn(
        "inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium",
        variants[variant],
        className
      )}
      {...props}
    />
  );
};

export { Badge };
