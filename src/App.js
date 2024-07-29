import logo from "./logo.svg";
import { PowerBIEmbed } from "powerbi-client-react";
import "./App.css";
import { models } from "powerbi-client";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <PowerBIEmbed
          embedConfig={{
            type: "report", // Supported types: report, dashboard, tile, visual, qna, paginated report and create
            id: "d0170f31-9b26-49f0-80cf-d29371c74cee",
            embedUrl:
              "https://app.powerbi.com/reportEmbed?reportId=d0170f31-9b26-49f0-80cf-d29371c74cee&groupId=6026c92f-ea8f-48aa-b8f1-f677e380e1f5&w=2&config=eyJjbHVzdGVyVXJsIjoiaHR0cHM6Ly9XQUJJLVVBRS1OT1JUSC1BLVBSSU1BUlktcmVkaXJlY3QuYW5hbHlzaXMud2luZG93cy5uZXQiLCJlbWJlZEZlYXR1cmVzIjp7InVzYWdlTWV0cmljc1ZOZXh0Ijp0cnVlfX0%3d",
            accessToken:
              "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6Ik1HTHFqOThWTkxvWGFGZnBKQ0JwZ0I0SmFLcyIsImtpZCI6Ik1HTHFqOThWTkxvWGFGZnBKQ0JwZ0I0SmFLcyJ9.eyJhdWQiOiJodHRwczovL2FuYWx5c2lzLndpbmRvd3MubmV0L3Bvd2VyYmkvYXBpIiwiaXNzIjoiaHR0cHM6Ly9zdHMud2luZG93cy5uZXQvZDViMzRjODAtYjljZC00ZjE0LWE4YmUtZDBkNTJlOTEwNmI3LyIsImlhdCI6MTcyMTg0MDE5NiwibmJmIjoxNzIxODQwMTk2LCJleHAiOjE3MjE4NDU0MzEsImFjY3QiOjAsImFjciI6IjEiLCJhaW8iOiJBVFFBeS84WEFBQUF6bG1kUTNVRnA1ZFJxWlZseEJieDhGS3ZMYktZOEdjRjhIR0xVeUZCWFFyUjFzcnErbGRyWjJpTnRaTGx4VitmIiwiYW1yIjpbInB3ZCJdLCJhcHBpZCI6Ijg3MWMwMTBmLTVlNjEtNGZiMS04M2FjLTk4NjEwYTdlOTExMCIsImFwcGlkYWNyIjoiMCIsImZhbWlseV9uYW1lIjoiUmVwb3J0IiwiZ2l2ZW5fbmFtZSI6IkJJIiwiaWR0eXAiOiJ1c2VyIiwiaXBhZGRyIjoiNDkuMzcuMjMzLjI1MSIsIm5hbWUiOiJCSSBSZXBvcnQiLCJvaWQiOiJlYWNiM2Q3Mi0yZjUwLTQ4MmItYTNhNS0zNzg4Nzc5MDJhNTciLCJwdWlkIjoiMTAwMzIwMDM5OTc4MjI5RiIsInJoIjoiMC5BYTRBZ0V5ejFjMjVGRS1vdnREVkxwRUd0d2tBQUFBQUFBQUF3QUFBQUFBQUFBQ3JBTGcuIiwic2NwIjoidXNlcl9pbXBlcnNvbmF0aW9uIiwic3ViIjoiWms2M3BnRElxRmItbDhhV3k2Nm5jX2tmcjBHZ0xyUldwRDdsWDlZNEdjMCIsInRpZCI6ImQ1YjM0YzgwLWI5Y2QtNGYxNC1hOGJlLWQwZDUyZTkxMDZiNyIsInVuaXF1ZV9uYW1lIjoiYmlAZXZpZGVudGNvcmUuY29tIiwidXBuIjoiYmlAZXZpZGVudGNvcmUuY29tIiwidXRpIjoiUFVvNU1kVVd3VVdibU1XUTR1bVVBQSIsInZlciI6IjEuMCIsIndpZHMiOlsiYjc5ZmJmNGQtM2VmOS00Njg5LTgxNDMtNzZiMTk0ZTg1NTA5Il0sInhtc19pZHJlbCI6IjEgMjgifQ.tZnNmntzC0IeOMlZxhVWYIt_Ueqau6FYT_rNpwZNMv5GODNdCNvj80eXMhRVIpveEXI7MYjtbIBxye6ot6EszDC1CT4Q867AweKavuwkWfNqu4AI_XaiXrnXlTHMasotSRn84uvFMnVOye2mmWkK2kIBGyg0n0gm15ySmxY1-ATECowUJqWZ8kKH8sNH71aKcW6Bc3QLlE-FcU9kgA9B8A-Xb1ep8KGE_6-MZnuf52mttZH-YhS3uku7DlikuS_SyPaj1ke59ZvjpI1VuvFdI_xSzSHZyEa8LDGngX9BTPR-lyghORonFdTqjlTwmOVGyVXLy0RuxFujC7EamwwIfw",
            tokenType: models.TokenType.Aad, // Use models.TokenType.Aad for SaaS embed
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
                  console.log(event.detail);
                },
              ],
              ["visualClicked", () => console.log("visual clicked")],
              ["pageChanged", (event) => console.log(event)],
            ])
          }
          cssClassName={"Embed-container"}
          getEmbeddedComponent={(embeddedReport) => {
            window.report = embeddedReport;
          }}
        />
      </header>
    </div>
  );
}

export default App;
