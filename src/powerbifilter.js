import React, { useEffect } from "react";
import { models } from "powerbi-client";

const PowerBIFilter = ({ inputValue, report }) => {
  useEffect(() => {
    if (report && inputValue) {
      applyFilters(inputValue);
    }
  }, [inputValue, report]);

  const applyFilters = (input) => {
    const filters = [
      {
        $schema: "http://powerbi.com/product/schema#basic",
        target: { table: "AR_AGING_VIEW", column: "ACCOUNT_NUM" },
        operator: "In",
        values: [input],
      },
    ];

    report
      .updateFilters(models.FiltersOperations.Replace, filters)
      .then(() => console.log("Filters applied"))
      .catch((errors) => console.error("Error applying filters:", errors));
  };

  return null; // This component does not render anything
};

export default PowerBIFilter;
