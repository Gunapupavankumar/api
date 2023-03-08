const express = require("express");

const app = express();

app.get("/appointments", (request, response) => {
  const initialSectionDetails = [
    {
      uniqueNo: "morning_1",
      section: "morning",
      time: "10:00 Am",
      isActive: false,
    },
    {
      uniqueNo: "morning_2",
      section: "morning",
      time: "10:30 Am",
      isActive: false,
    },
    {
      uniqueNo: "morning_3",
      section: "morning",
      time: "11:00 Am",
      isActive: false,
    },
    {
      uniqueNo: "morning_4",
      section: "morning",
      time: "11:45 Am",
      isActive: false,
    },
    {
      uniqueNo: "afternoon_1",
      section: "afternoon",
      time: "12:00 Am",
      isActive: false,
    },
    {
      uniqueNo: "afternoon_2",
      section: "afternoon",
      time: "12:15 Am",
      isActive: false,
    },
    {
      uniqueNo: "afternoon_3",
      section: "afternoon",
      time: "03:45 Am",
      isActive: false,
    },
    {
      uniqueNo: "evening_1",
      section: "evening",
      time: "04:00 Am",
      isActive: false,
    },
    {
      uniqueNo: "evening_2",
      section: "evening",
      time: "04:15 Am",
      isActive: false,
    },
    {
      uniqueNo: "evening_3",
      section: "evening",
      time: "04:45 Am",
      isActive: false,
    },
  ];
  response.send(initialSectionDetails);
});

app.listen(3000);
