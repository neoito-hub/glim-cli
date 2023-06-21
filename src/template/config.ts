import { AppDetailsInterface } from "../types/interfaces";

export const configTemplate = (details: AppDetailsInterface) => {
  const temp = `
{
    "appname":"${details.appname}",
    "version":"1.0"
}
`;
  return temp;
};
