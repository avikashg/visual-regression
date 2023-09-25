import config from "../config/config.json" assert { type: "json" };

export const getTimeStamp = async () => {
  return Math.round(new Date().getTime() / 1000).toString();
};

export const getScreenshotsNameList = async () => {
  const name_list = [];
  for (const url of config['urls']) {
    for (const viewport of config['view_ports']) {
      name_list.push(`${url.name}-${viewport}`);
    }
  }
  return name_list;
};

export const chunk = async (array, size) => {
  const chunks = [];
  array = [].concat(...array);

  while (array.length) {
    chunks.push(array.splice(0, size));
  }

  return chunks;
};
