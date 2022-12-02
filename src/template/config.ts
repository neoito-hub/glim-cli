import { AppDetailsInterface } from "../types/interfaces";

export const configTemplate = (details: AppDetailsInterface) => {
  const temp = `
{
    "appname":"${details.appname.value}",
    "version":"1.0",
    "configurations":{
        "state_management":"${details.selectedStore.value}"
    }
}
`;
  return temp;
};
