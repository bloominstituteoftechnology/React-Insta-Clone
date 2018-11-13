const parseDate = str => {
  const timestamp = str.split(' ');

  const month = timestamp[0];
  const date = timestamp[1].slice(0, timestamp[1].length - 2);
  const year = timestamp[2].slice(0, timestamp[2].length);
  const hour = timestamp[3];

  return timestamp[4] === 'am' ? Date.parse(`${month} ${date} ${year} ${hour}`) : Date.parse(`${month} ${date} ${year} ${hour}` + 720000);
}

export default parseDate;