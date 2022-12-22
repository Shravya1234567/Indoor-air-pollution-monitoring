/**
=========================================================
* Material Dashboard 2 React - v2.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2022 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

function Get(yourUrl) {
  const Httpreq = new XMLHttpRequest();
  Httpreq.open("GET", yourUrl, false);
  Httpreq.send(null);
  return Httpreq.responseText;
}
const obj = JSON.parse(
  Get(
    "https://api.thingspeak.com/channels/1916314/feeds.json?api_key=RXVM9CKGE824QFCQ&results=320&average=10"
  )
);

export default {
  task1: {
    labels: [
      "1",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "10",
      "11",
      "12",
      "13",
      "14",
      "15",
      "16",
      "17",
      "18",
      "19",
      "20",
      "21",
      "22",
      "23",
      "24",
    ],
    datasets: {
      label: "CO2",
      data: [
        obj.feeds[0].field1,
        obj.feeds[1].field1,
        obj.feeds[2].field1,
        obj.feeds[3].field1,
        obj.feeds[4].field1,
        obj.feeds[5].field1,
        obj.feeds[6].field1,
        obj.feeds[7].field1,
        obj.feeds[9].field1,
        obj.feeds[10].field1,
        obj.feeds[11].field1,
        obj.feeds[12].field1,
        obj.feeds[13].field1,
        obj.feeds[14].field1,
        obj.feeds[15].field1,
        obj.feeds[16].field1,
        obj.feeds[17].field1,
        obj.feeds[18].field1,
        obj.feeds[19].field1,
        obj.feeds[20].field1,
        obj.feeds[21].field1,
        obj.feeds[22].field1,
        obj.feeds[23].field1,
      ],
    },
  },
  task2: {
    labels: [
      "1",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "10",
      "11",
      "12",
      "13",
      "14",
      "15",
      "16",
      "17",
      "18",
      "19",
      "20",
      "21",
      "22",
      "23",
      "24",
    ],
    datasets: {
      label: "VOC",
      data: [
        obj.feeds[0].field2,
        obj.feeds[1].field2,
        obj.feeds[2].field2,
        obj.feeds[3].field2,
        obj.feeds[4].field2,
        obj.feeds[5].field2,
        obj.feeds[6].field2,
        obj.feeds[7].field2,
        obj.feeds[9].field2,
        obj.feeds[10].field2,
        obj.feeds[11].field2,
        obj.feeds[12].field2,
        obj.feeds[13].field2,
        obj.feeds[14].field2,
        obj.feeds[15].field2,
        obj.feeds[16].field2,
        obj.feeds[17].field2,
        obj.feeds[18].field2,
        obj.feeds[19].field2,
        obj.feeds[20].field2,
        obj.feeds[21].field2,
        obj.feeds[22].field2,
        obj.feeds[23].field2,
      ],
    },
  },
  task3: {
    labels: [
      "1",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "10",
      "11",
      "12",
      "13",
      "14",
      "15",
      "16",
      "17",
      "18",
      "19",
      "20",
      "21",
      "22",
      "23",
      "24",
    ],
    datasets: {
      label: "TEMPERATURE",
      data: [
        obj.feeds[0].field3,
        obj.feeds[1].field3,
        obj.feeds[2].field3,
        obj.feeds[3].field3,
        obj.feeds[4].field3,
        obj.feeds[5].field3,
        obj.feeds[6].field3,
        obj.feeds[7].field3,
        obj.feeds[9].field3,
        obj.feeds[10].field3,
        obj.feeds[11].field3,
        obj.feeds[12].field3,
        obj.feeds[13].field3,
        obj.feeds[14].field3,
        obj.feeds[15].field3,
        obj.feeds[16].field3,
        obj.feeds[17].field3,
        obj.feeds[18].field3,
        obj.feeds[19].field3,
        obj.feeds[20].field3,
        obj.feeds[21].field3,
        obj.feeds[22].field3,
        obj.feeds[23].field3,
      ],
    },
  },
  task4: {
    labels: [
      "1",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "10",
      "11",
      "12",
      "13",
      "14",
      "15",
      "16",
      "17",
      "18",
      "19",
      "20",
      "21",
      "22",
      "23",
      "24",
    ],
    datasets: {
      label: "HUMIDITY",
      data: [
        obj.feeds[0].field4,
        obj.feeds[1].field4,
        obj.feeds[2].field4,
        obj.feeds[3].field4,
        obj.feeds[4].field4,
        obj.feeds[5].field4,
        obj.feeds[6].field4,
        obj.feeds[7].field4,
        obj.feeds[9].field4,
        obj.feeds[10].field4,
        obj.feeds[11].field4,
        obj.feeds[12].field4,
        obj.feeds[13].field4,
        obj.feeds[14].field4,
        obj.feeds[15].field4,
        obj.feeds[16].field4,
        obj.feeds[17].field4,
        obj.feeds[18].field4,
        obj.feeds[19].field4,
        obj.feeds[20].field4,
        obj.feeds[21].field4,
        obj.feeds[22].field4,
        obj.feeds[23].field4,
      ],
    },
  },
  task5: {
    labels: [
      "1",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "10",
      "11",
      "12",
      "13",
      "14",
      "15",
      "16",
      "17",
      "18",
      "19",
      "20",
      "21",
      "22",
      "23",
      "24",
    ],
    datasets: {
      label: "PM 2.5",
      data: [
        obj.feeds[0].field5,
        obj.feeds[1].field5,
        obj.feeds[2].field5,
        obj.feeds[3].field5,
        obj.feeds[4].field5,
        obj.feeds[5].field5,
        obj.feeds[6].field5,
        obj.feeds[7].field5,
        obj.feeds[9].field5,
        obj.feeds[10].field5,
        obj.feeds[11].field5,
        obj.feeds[12].field5,
        obj.feeds[13].field5,
        obj.feeds[14].field5,
        obj.feeds[15].field5,
        obj.feeds[16].field5,
        obj.feeds[17].field5,
        obj.feeds[18].field5,
        obj.feeds[19].field5,
        obj.feeds[20].field5,
        obj.feeds[21].field5,
        obj.feeds[22].field5,
        obj.feeds[23].field5,
      ],
    },
  },
  task6: {
    labels: [
      "1",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "10",
      "11",
      "12",
      "13",
      "14",
      "15",
      "16",
      "17",
      "18",
      "19",
      "20",
      "21",
      "22",
      "23",
      "24",
    ],
    datasets: {
      label: "PM 10",
      data: [
        obj.feeds[0].field6,
        obj.feeds[1].field6,
        obj.feeds[2].field6,
        obj.feeds[3].field6,
        obj.feeds[4].field6,
        obj.feeds[5].field6,
        obj.feeds[6].field6,
        obj.feeds[7].field6,
        obj.feeds[9].field6,
        obj.feeds[10].field6,
        obj.feeds[11].field6,
        obj.feeds[12].field6,
        obj.feeds[13].field6,
        obj.feeds[14].field6,
        obj.feeds[15].field6,
        obj.feeds[16].field6,
        obj.feeds[17].field6,
        obj.feeds[18].field6,
        obj.feeds[19].field6,
        obj.feeds[20].field6,
        obj.feeds[21].field6,
        obj.feeds[22].field6,
        obj.feeds[23].field6,
      ],
    },
  },
};