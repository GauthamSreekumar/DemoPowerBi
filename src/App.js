import React, { useState } from "react";
import { PowerBIEmbed } from "powerbi-client-react";
import "./App.css";
import { models } from "powerbi-client";
import PowerBIFilter from "./powerbifilter";

function App() {
  const [inputValue, setInputValue] = useState("");
  const [report, setReport] = useState(null);

  return (
    <div className="App">
      <header className="App-header">
        <input
          type="text"
          value={inputValue}
          onChange={(e) => {
            const value = e.target.value.trim();
            console.log("Input value:", value);
            setInputValue(value);
          }}
          placeholder="Enter filter value (e.g., 1 or 4)"
        />
        <PowerBIEmbed
          embedConfig={{
            type: "report",
            id: "d0170f31-9b26-49f0-80cf-d29371c74cee",
            embedUrl:
              "https://app.powerbi.com/reportEmbed?reportId=d0170f31-9b26-49f0-80cf-d29371c74cee&groupId=6026c92f-ea8f-48aa-b8f1-f677e380e1f5&w=2&config=eyJjbHVzdGVyVXJsIjoiaHR0cHM6Ly9XQUJJLVVBRS1OT1JUSC1BLVBSSU1BUlktcmVkaXJlY3QuYW5hbHlzaXMud2luZG93cy5uZXQiLCJlbWJlZEZlYXR1cmVzIjp7InVzYWdlTWV0cmljc1ZOZXh0Ijp0cnVlfX0%3d",
            accessToken:
              "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6IktRMnRBY3JFN2xCYVZWR0JtYzVGb2JnZEpvNCIsImtpZCI6IktRMnRBY3JFN2xCYVZWR0JtYzVGb2JnZEpvNCJ9.eyJhdWQiOiJodHRwczovL2FuYWx5c2lzLndpbmRvd3MubmV0L3Bvd2VyYmkvYXBpIiwiaXNzIjoiaHR0cHM6Ly9zdHMud2luZG93cy5uZXQvZDViMzRjODAtYjljZC00ZjE0LWE4YmUtZDBkNTJlOTEwNmI3LyIsImlhdCI6MTcyMzEyMjU5MywibmJmIjoxNzIzMTIyNTkzLCJleHAiOjE3MjMxMjcyNjIsImFjY3QiOjAsImFjciI6IjEiLCJhaW8iOiJBVlFBcS84WEFBQUE5S1NWTGR3YXUvSGx0UGNJc3ZTd21WZU4wenVmMGV3b2loV2JURHZNaFpSRFk0cDlMb2NlOEM3NWVuUjlxSktUa2M1T1B2RXBDVkxET01RSktRNnJmK2RybjJKbkhVL3FPVFp1NmFjeXQxQT0iLCJhbXIiOlsicHdkIiwibWZhIl0sImFwcGlkIjoiODcxYzAxMGYtNWU2MS00ZmIxLTgzYWMtOTg2MTBhN2U5MTEwIiwiYXBwaWRhY3IiOiIyIiwiZmFtaWx5X25hbWUiOiJSZXBvcnQiLCJnaXZlbl9uYW1lIjoiQkkiLCJpZHR5cCI6InVzZXIiLCJpcGFkZHIiOiI0OS4zNy4yMzQuODAiLCJuYW1lIjoiQkkgUmVwb3J0Iiwib2lkIjoiZWFjYjNkNzItMmY1MC00ODJiLWEzYTUtMzc4ODc3OTAyYTU3IiwicHVpZCI6IjEwMDMyMDAzOTk3ODIyOUYiLCJyaCI6IjAuQWE0QWdFeXoxYzI1RkUtb3Z0RFZMcEVHdHdrQUFBQUFBQUFBd0FBQUFBQUFBQUNyQUxnLiIsInNjcCI6InVzZXJfaW1wZXJzb25hdGlvbiIsInNpZ25pbl9zdGF0ZSI6WyJrbXNpIl0sInN1YiI6IlprNjNwZ0RJcUZiLWw4YVd5NjZuY19rZnIwR2dMclJXcEQ3bFg5WTRHYzAiLCJ0aWQiOiJkNWIzNGM4MC1iOWNkLTRmMTQtYThiZS1kMGQ1MmU5MTA2YjciLCJ1bmlxdWVfbmFtZSI6ImJpQGV2aWRlbnRjb3JlLmNvbSIsInVwbiI6ImJpQGV2aWRlbnRjb3JlLmNvbSIsInV0aSI6IkJVNUVuUzNxazBxRFUybUFxbE5JQUEiLCJ2ZXIiOiIxLjAiLCJ3aWRzIjpbImI3OWZiZjRkLTNlZjktNDY4OS04MTQzLTc2YjE5NGU4NTUwOSJdLCJ4bXNfaWRyZWwiOiIxIDI0In0.nS5rgKYW60LJ5ilwZXJMR2RQ29KXOywDX16D3KfG44iOR8Em2RVYK6KUzH5LabtUokOH8VuK2ZEkDn5CkJElC7JbBEQUhg3fDOk0x8HdFqkwld0-d1KURvOCnU-D0RzWryKC1u36u4s5ZT49asX5NxaGAp6I4QCFveFK8tkLIJq7Qj6cpKxyT7YOacnd3yzA42lSe90sqqWgNEt1OjLWXb_hv4idHE5cseGz9pbGRGbc94aacuyB0i-XVg42bDv4MNaTr_mFSWwkgXSj-Qs-0MFh4RCqczM7L2rMQ4tiHZL4JXNRFmewOrIVxrQsFnUIEd8DyaFa6zkFcVcACPDpyQ",
            tokenType: models.TokenType.Aad,
            settings: {
              panes: {
                filters: {
                  expanded: false,
                  visible: false,
                },
              },
              background: models.BackgroundType.Transparent,
            },
          }}
          eventHandlers={
            new Map([
              [
                "loaded",
                function () {
                  console.log("Report loaded");
                },
              ],
              [
                "rendered",
                function () {
                  console.log("Report rendered");
                },
              ],
              [
                "error",
                function (event) {
                  console.error(event.detail);
                },
              ],
              ["visualClicked", () => console.log("Visual clicked")],
              ["pageChanged", (event) => console.log("Page changed", event)],
            ])
          }
          cssClassName={"Embed-container"}
          getEmbeddedComponent={(embeddedReport) => setReport(embeddedReport)}
        />
        <PowerBIFilter inputValue={inputValue} report={report} />
      </header>
    </div>
  );
}

export default App;
