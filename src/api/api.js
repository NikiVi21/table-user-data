import * as axios from "axios";

export const getData = () => {
  return axios
    .get(
      `https://itrex-react-lab-files.s3.eu-central-1.amazonaws.com/react-test-api.json`
    )
    .then((response) => response.data);
};
