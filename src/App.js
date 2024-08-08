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
              "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6IktRMnRBY3JFN2xCYVZWR0JtYzVGb2JnZEpvNCIsImtpZCI6IktRMnRBY3JFN2xCYVZWR0JtYzVGb2JnZEpvNCJ9.eyJhdWQiOiJodHRwczovL2FuYWx5c2lzLndpbmRvd3MubmV0L3Bvd2VyYmkvYXBpIiwiaXNzIjoiaHR0cHM6Ly9zdHMud2luZG93cy5uZXQvZDViMzRjODAtYjljZC00ZjE0LWE4YmUtZDBkNTJlOTEwNmI3LyIsImlhdCI6MTcyMzEzNzA2MiwibmJmIjoxNzIzMTM3MDYyLCJleHAiOjE3MjMxNDE1MTIsImFjY3QiOjAsImFjciI6IjEiLCJhaW8iOiJBVlFBcS84WEFBQUFKTmRrUS8wSVlZcURvZEtGSzZMREZINVMrUVd5cmkrL0JFeUNhc0s3M2tNRzBzOFB1ekxoSnpXdmtwT09oWUV0Q0M2UHh6aFJabHhENE1LZnA2TWhrZWF2TnFRQkNBWlg0ZFc5alJmSThnaz0iLCJhbXIiOlsicHdkIiwibWZhIl0sImFwcGlkIjoiODcxYzAxMGYtNWU2MS00ZmIxLTgzYWMtOTg2MTBhN2U5MTEwIiwiYXBwaWRhY3IiOiIwIiwiZmFtaWx5X25hbWUiOiJSZXBvcnQiLCJnaXZlbl9uYW1lIjoiQkkiLCJpZHR5cCI6InVzZXIiLCJpcGFkZHIiOiIyNDA5OjQwZjM6MmI6NWFmYTo5OTk0OjE0ZjQ6NmIyZDpiYmY1IiwibmFtZSI6IkJJIFJlcG9ydCIsIm9pZCI6ImVhY2IzZDcyLTJmNTAtNDgyYi1hM2E1LTM3ODg3NzkwMmE1NyIsInB1aWQiOiIxMDAzMjAwMzk5NzgyMjlGIiwicmgiOiIwLkFhNEFnRXl6MWMyNUZFLW92dERWTHBFR3R3a0FBQUFBQUFBQXdBQUFBQUFBQUFDckFMZy4iLCJzY3AiOiJ1c2VyX2ltcGVyc29uYXRpb24iLCJzaWduaW5fc3RhdGUiOlsia21zaSJdLCJzdWIiOiJaazYzcGdESXFGYi1sOGFXeTY2bmNfa2ZyMEdnTHJSV3BEN2xYOVk0R2MwIiwidGlkIjoiZDViMzRjODAtYjljZC00ZjE0LWE4YmUtZDBkNTJlOTEwNmI3IiwidW5pcXVlX25hbWUiOiJiaUBldmlkZW50Y29yZS5jb20iLCJ1cG4iOiJiaUBldmlkZW50Y29yZS5jb20iLCJ1dGkiOiJKZVYwbWdPNm8wLVpISXgxUGhOUUFBIiwidmVyIjoiMS4wIiwid2lkcyI6WyJiNzlmYmY0ZC0zZWY5LTQ2ODktODE0My03NmIxOTRlODU1MDkiXSwieG1zX2lkcmVsIjoiMSA2In0.riSmvSKAHq2-0RelJS_WxV2G7JOC-9wZiOPFbwb8ehQ7r0ml3cz7U6sxEYdAKCRQRtn8ENg8jwnpcZBYXOJ56gD6agnS1bHw27ZtPOIetA23D9xzjB1FXG-i9MtU900v2WVthBc5bnqvSAjj_AMyW9XkziKAe8H8zgeHbX2EL5mGBHXjzUu7yd8PRgR0GrVBdb9hNQy1hNvOId10vnUuhyXkLbK3oqO2B9fxrKPlRAqaM9jnhYRSXp1_-QJjd_-fdJ-bD_Lk8B6vCWVXRNImeS6wZaDmwJPtUGNHKeuJ0fsFPMlE3sZ2548iBZYaDTKME_W9vvsM5IiBjdv3f0LV-w",
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
