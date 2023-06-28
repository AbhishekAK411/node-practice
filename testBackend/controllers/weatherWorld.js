import https from "https";
import fs from "fs";

export const fetchHTMLWeather = async (req, res) => {
  try {
    https
      .get("https://www.timeanddate.com/weather/", (res) => {
        let content = "";
        res.on("data", (chunk) => {
          content += chunk;
        });
        res.on("end", () => {
          console.log(content);
          fs.writeFile("content.html", content, (err) => {
            if (err) {
              console.log(err);
              return;
            } else {
              console.log("Complete");
            }
          });
        });
      })
      .on("error", (error) => {
        console.error("Error fetching HTML Content", error);
      });
  } catch (err) {
    return res.send(err);
  }
};

export const getWeather = async (req, res) => {
  try {
    const { country } = req.body;
    const response = await fs.promises.readFile("content.html", "utf-8");
    const editResponse = response.split(" ");

    let emptyArray = [];
    let foundBodyTag = false;
    for (let i = 0; i < editResponse.length; i++) {
      if (editResponse[i].includes("zebra")) {
        foundBodyTag = true;
        continue;
      }
      if (foundBodyTag) {
        emptyArray.push(editResponse[i]);
      }
    }
    console.log(emptyArray);
  } catch (err) {
    return res.send(err);
  }
};
