import React, {Suspense} from 'react';
import {SvgProps} from 'react-native-svg';

export const withIconSuspense = (
  Icon: React.LazyExoticComponent<React.FC<SvgProps>>,
  FallBackUi: () => null,
) => {
  return (props: any) => {
    return (
      <Suspense fallback={<FallBackUi />}>
        <Icon {...props} />
      </Suspense>
    );
  };
};

export const FallBackUi = () => {
  return null;
};
