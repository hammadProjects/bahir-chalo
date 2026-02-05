"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { AlertCircle, RefreshCcw } from "lucide-react";

interface Props {
  message?: string;
  onRetry: () => void;
}

const QueryErrorView: React.FC<Props> = ({ message = "Failed to load data.", onRetry }) => {
  return (
    <div className="flex flex-col items-center justify-center py-12 px-4 text-center bg-red-50 rounded-xl border border-red-100 border-dashed">
      <AlertCircle className="w-12 h-12 text-red-500 mb-4" />
      <h3 className="text-lg font-semibold text-red-900 mb-2">Oops! Something went wrong</h3>
      <p className="text-red-700 mb-6 max-w-md">{message}</p>
      <Button 
        onClick={onRetry} 
        variant="outline" 
        className="border-red-200 text-red-700 hover:bg-red-100 hover:text-red-800 flex items-center gap-2"
      >
        <RefreshCcw className="w-4 h-4" />
        Retry Now
      </Button>
    </div>
  );
};

export default QueryErrorView;
