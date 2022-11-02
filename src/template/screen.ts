const screenTemplate = async (compname: any) => {
  return new Promise(async (resolve, reject) => {
    const temp = `
      import { View, Text } from "react-native";
      import React from "react";
      import { style } from "${compname}.style";
  
      interface ${compname}Props {
      sampleprop?: string;
      }
  
      const ${compname} = ({}: ${compname}Props) => {
      return (
          <View style={style.component}>
          <Text>${compname}</Text>
          </View>
      );
      };
  
      export default ${compname};
  
      `;
    resolve(temp);
  });
};

const styleTemplate = async (compname: any) => {
  return new Promise(async (resolve, reject) => {
    const temp = `
      import { StyleSheet } from "react-native";
  
      export const style = StyleSheet.create({
        container: {
          backgroundColor: "#FF00FF",
        },
      });
        `;
    resolve(temp);
  });
};

export { screenTemplate, styleTemplate };
