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
          placeholder="Enter Account no"
        />
        <PowerBIEmbed
          embedConfig={{
            type: "report",

            id: "d0170f31-9b26-49f0-80cf-d29371c74cee",
            embedUrl:
              "https://app.powerbi.com/reportEmbed?reportId=d0170f31-9b26-49f0-80cf-d29371c74cee&groupId=6026c92f-ea8f-48aa-b8f1-f677e380e1f5&w=2&config=eyJjbHVzdGVyVXJsIjoiaHR0cHM6Ly9XQUJJLVVBRS1OT1JUSC1BLVBSSU1BUlktcmVkaXJlY3QuYW5hbHlzaXMud2luZG93cy5uZXQiLCJlbWJlZEZlYXR1cmVzIjp7InVzYWdlTWV0cmljc1ZOZXh0Ijp0cnVlfX0%3d",
            accessToken:
              "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6IktRMnRBY3JFN2xCYVZWR0JtYzVGb2JnZEpvNCIsImtpZCI6IktRMnRBY3JFN2xCYVZWR0JtYzVGb2JnZEpvNCJ9.eyJhdWQiOiJodHRwczovL2FuYWx5c2lzLndpbmRvd3MubmV0L3Bvd2VyYmkvYXBpIiwiaXNzIjoiaHR0cHM6Ly9zdHMud2luZG93cy5uZXQvZDViMzRjODAtYjljZC00ZjE0LWE4YmUtZDBkNTJlOTEwNmI3LyIsImlhdCI6MTcyMzU1Nzc4NiwibmJmIjoxNzIzNTU3Nzg2LCJleHAiOjE3MjM1NjM0ODAsImFjY3QiOjAsImFjciI6IjEiLCJhaW8iOiJBVlFBcS84WEFBQUFhbE1KUDdVYVhpZU4zL1JhZVRWMmgxMTZ0eitFYithM2VDVFdVYTFVMjNYT2JvcVNraUJKTlFLMmJXcG5vWi9WL3lZM29xRnBRbDRSN3hDMDFURy9reTJYSXFkVURaMW40TEFWSGhvZ0hDaz0iLCJhbXIiOlsicHdkIiwibWZhIl0sImFwcGlkIjoiODcxYzAxMGYtNWU2MS00ZmIxLTgzYWMtOTg2MTBhN2U5MTEwIiwiYXBwaWRhY3IiOiIyIiwiZmFtaWx5X25hbWUiOiJSZXBvcnQiLCJnaXZlbl9uYW1lIjoiQkkiLCJpZHR5cCI6InVzZXIiLCJpcGFkZHIiOiI0OS4zNy4yMzQuODAiLCJuYW1lIjoiQkkgUmVwb3J0Iiwib2lkIjoiZWFjYjNkNzItMmY1MC00ODJiLWEzYTUtMzc4ODc3OTAyYTU3IiwicHVpZCI6IjEwMDMyMDAzOTk3ODIyOUYiLCJyaCI6IjAuQWE0QWdFeXoxYzI1RkUtb3Z0RFZMcEVHdHdrQUFBQUFBQUFBd0FBQUFBQUFBQUNyQUxnLiIsInNjcCI6InVzZXJfaW1wZXJzb25hdGlvbiIsInNpZ25pbl9zdGF0ZSI6WyJrbXNpIl0sInN1YiI6IlprNjNwZ0RJcUZiLWw4YVd5NjZuY19rZnIwR2dMclJXcEQ3bFg5WTRHYzAiLCJ0aWQiOiJkNWIzNGM4MC1iOWNkLTRmMTQtYThiZS1kMGQ1MmU5MTA2YjciLCJ1bmlxdWVfbmFtZSI6ImJpQGV2aWRlbnRjb3JlLmNvbSIsInVwbiI6ImJpQGV2aWRlbnRjb3JlLmNvbSIsInV0aSI6ImtlZUdncVYxcTBpWV94enE2azhkQUEiLCJ2ZXIiOiIxLjAiLCJ3aWRzIjpbImI3OWZiZjRkLTNlZjktNDY4OS04MTQzLTc2YjE5NGU4NTUwOSJdLCJ4bXNfaWRyZWwiOiIxIDIifQ.N6LxYQl3UC50RVyfdq4E77k4TS_yCe0XPBTquu8Fi2jQhSBqDFC2THOtU4BDSD3vdDLqIHGmHFlQANRbP3lnAqVu1-_psaJBwx6D_QPhWo_XoGNdYa4yBcBmLlzxcz37ivFUd3QCyUipTeI_vzKhFgBFbZuyiAuGPTS9hL3w16eR9UShuVH__4VwjY8uWiHjdJociif7EVa7fSs1cn6WX7YYbKBfea9u1a8duZJdCWjvaocCnh9XNX9-137YbbeS_6Vzbzj23frqUm9okXLyhizEN2mFvTuFgXhgFp5aRtMlpMdH9UC6lU1wCQ81h24Be3q2VBw4gGedXGUD-NKTHw",
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
