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
              "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6IktRMnRBY3JFN2xCYVZWR0JtYzVGb2JnZEpvNCIsImtpZCI6IktRMnRBY3JFN2xCYVZWR0JtYzVGb2JnZEpvNCJ9.eyJhdWQiOiJodHRwczovL2FuYWx5c2lzLndpbmRvd3MubmV0L3Bvd2VyYmkvYXBpIiwiaXNzIjoiaHR0cHM6Ly9zdHMud2luZG93cy5uZXQvZDViMzRjODAtYjljZC00ZjE0LWE4YmUtZDBkNTJlOTEwNmI3LyIsImlhdCI6MTcyMzEzMDQ4MywibmJmIjoxNzIzMTMwNDgzLCJleHAiOjE3MjMxMzU3NjQsImFjY3QiOjAsImFjciI6IjEiLCJhaW8iOiJBVlFBcS84WEFBQUFLbWhRZ3FUOWMxSXFKcDJDZnRaMTd5NWFFalNzRGVmNlhkU2FlZTZwNmxGbmttbnBENnZjWG1wQ1kvM29WWFZRYjhJa1lPNERSSHp3SHhEWlM2OWZyU0tlUkI5THM4aHg3S3hXM1ZKWEdQaz0iLCJhbXIiOlsicHdkIiwibWZhIl0sImFwcGlkIjoiODcxYzAxMGYtNWU2MS00ZmIxLTgzYWMtOTg2MTBhN2U5MTEwIiwiYXBwaWRhY3IiOiIyIiwiZmFtaWx5X25hbWUiOiJSZXBvcnQiLCJnaXZlbl9uYW1lIjoiQkkiLCJpZHR5cCI6InVzZXIiLCJpcGFkZHIiOiI0OS4zNy4yMzQuODAiLCJuYW1lIjoiQkkgUmVwb3J0Iiwib2lkIjoiZWFjYjNkNzItMmY1MC00ODJiLWEzYTUtMzc4ODc3OTAyYTU3IiwicHVpZCI6IjEwMDMyMDAzOTk3ODIyOUYiLCJyaCI6IjAuQWE0QWdFeXoxYzI1RkUtb3Z0RFZMcEVHdHdrQUFBQUFBQUFBd0FBQUFBQUFBQUNyQUxnLiIsInNjcCI6InVzZXJfaW1wZXJzb25hdGlvbiIsInNpZ25pbl9zdGF0ZSI6WyJrbXNpIl0sInN1YiI6IlprNjNwZ0RJcUZiLWw4YVd5NjZuY19rZnIwR2dMclJXcEQ3bFg5WTRHYzAiLCJ0aWQiOiJkNWIzNGM4MC1iOWNkLTRmMTQtYThiZS1kMGQ1MmU5MTA2YjciLCJ1bmlxdWVfbmFtZSI6ImJpQGV2aWRlbnRjb3JlLmNvbSIsInVwbiI6ImJpQGV2aWRlbnRjb3JlLmNvbSIsInV0aSI6IjhmTWduVkd1cFVHYlN4NF9NdE0xQUEiLCJ2ZXIiOiIxLjAiLCJ3aWRzIjpbImI3OWZiZjRkLTNlZjktNDY4OS04MTQzLTc2YjE5NGU4NTUwOSJdLCJ4bXNfaWRyZWwiOiIxNiAxIn0.GzyG61_TuPqnJDb-WHFisYhXCU9hfQO1QAC4YsugWY0lkzEYH986124TkWOTqJuePhqssz_AGSuHfiu4pn5sKFBL8QQH1iObts_VS3CQkAlWgXLQ3iaC3fMf8byr-evLTIpYDg6_DxIdZYorehDUFKFZh9auPL7I8iSdRPmfYgcZfXNYreUxHnWTIZg8Xe7bKIw_83i9dHuFQPdFty-P0rUZFAGWY4qF1j25g4s4JcPB8TLOGvBLFiBgmcS_Z4p7TFOy7lh0TWMGv53l-LgPJejJXAzHjaozxjMI-WZKt8ky6aHm7zxVyDqvVj7_lMRKi0KdKYhfDKWJgMjHVjZ_1g",
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
