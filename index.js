const express = require("express");
const port = process.env.PORT || 3000;
const cors = require("cors");
const app = express();
app.use(cors());
app.use(express.json());

// app.use((req, res) => {
//   return res.end(renderHTML());
// });
//
// const assetUrl =
//   process.env.NODE_ENV !== "production" ? "http://localhost:3000" : "/";
//
// function renderHTML() {
//   return `
//     <!DOCTYPE html>
//       <html>
//       <head>
//           <meta charset="utf-8">
//           <meta name="viewport" content="width=device-width, initial-scale=1.0">
//           <title>Hello React</title>
//           <link rel="stylesheet" href="${assetUrl}/public/assets/styles.css">
//       </head>
//       <body>
//         <div id="react-view">hi</div>
//       </body>
//     </html>
//   `;
// }

app.use("/", express.static(__dirname + "/server"));

app.listen(port, (err) => {
  if (err) {
    throw Error(err);
  }
  console.log(`Server is started on port ${port}`);
});
