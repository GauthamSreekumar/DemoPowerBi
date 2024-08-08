// PowerBIFilter.js
import React, { useEffect } from "react";
import { models } from "powerbi-client";

const filterMappings = {
  1: [
    {
      target: { table: "AR_AGING_VIEW", column: "ACCOUNT_NUM" },
      operator: "In",
      values: ["00011096"],
    },
  ],
  4: [
    {
      target: { table: "AR_AGING_VIEW", column: "ACCOUNT_NUM" },
      operator: "In",
      values: ["00011271"],
    },
  ],
};

const PowerBIFilter = ({ inputValue, report }) => {
  useEffect(() => {
    if (report) {
      applyFilters(inputValue);
    }
  }, [inputValue, report]);

  const applyFilters = (input) => {
    const filters = filterMappings[input] || [];

    report
      .updateFilters(models.FiltersOperations.Replace, filters)
      .then(() => console.log("Filters applied"))
      .catch((errors) => console.error("Error applying filters:", errors));
  };

  return null; // This component does not render anything
};

export default PowerBIFilter;
