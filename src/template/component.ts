const componentTemplate = (compname: any) => {
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
  return temp;
};

const styleTemplate = (compname: any) => {
  const temp = `
    import { StyleSheet } from "react-native";

    export const style = StyleSheet.create({
      container: {
        backgroundColor: "#FF00FF",
      },
    });
      `;
  return temp;
};

const testTemplate = (compname: string) => {
  const temp = `
  import React from "react";
  import { render } from "react-native-testing-library";
  import ${compname} from "./${compname}.screen";
  describe("${compname} Component", () => {
    it("renders correctly", () => {
      const { getByText } = render(<${compname} />);
      const ${compname}Text = getByText("${compname}");
      
      expect(${compname}Text).toBeDefined();
    });
  });

  `;
  return temp;
};

export { componentTemplate, styleTemplate, testTemplate };
