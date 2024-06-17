import axios from 'axios';

export const fetchData = async () => {
  const url = "https://fedskillstest.coalitiontechnologies.workers.dev/";
  const username = "coalition";
  const password = "skills-test";

  try {
    const credentials = btoa(`${username}:${password}`);
    const headers = {
      Authorization: `Basic ${credentials}`,
    };

    const response = await axios.get(url, { headers: headers });
    const data = response.data;
    return Array.isArray(data) ? data : [data];
  } catch (error) {
    console.error("There was a problem with the fetch operation:", error);
    return [];
  }
};


// export const jessicaData = async () => {
//   const data = await fetchData();
//   return data.length >= 3 ? data[3] : null;
// };


export function formatDate(inputDate) {
  const [month, day, year] = inputDate.split("/");

  const monthNames = [
    "January", "February", "March", "April", "May", "June", "July",
    "August", "September", "October", "November", "December"
  ];
  const monthIndex = parseInt(month, 10) - 1;

  const formattedDate = `${monthNames[monthIndex]} ${parseInt(day, 10)}, ${year}`;

  return formattedDate;
}

