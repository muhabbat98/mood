import React, {FC} from 'react';
import {Svg, Path} from 'react-native-svg';

type AnaliticsProps = {
  color: string,
  size: any,
};

const AnaliticsIcon: FC<AnaliticsProps> = ({color, size}) => {
  return (
    <Svg
      id="Layer_1"
      data-name="Layer 1"
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill={color}>
      <Path d="M23,22H5a3,3,0,0,1-3-3V1A1,1,0,0,0,0,1V19a5.006,5.006,0,0,0,5,5H23a1,1,0,0,0,0-2Z" />
      <Path d="M6,20a1,1,0,0,0,1-1V12a1,1,0,0,0-2,0v7A1,1,0,0,0,6,20Z" />
      <Path d="M10,10v9a1,1,0,0,0,2,0V10a1,1,0,0,0-2,0Z" />
      <Path d="M15,13v6a1,1,0,0,0,2,0V13a1,1,0,0,0-2,0Z" />
      <Path d="M20,9V19a1,1,0,0,0,2,0V9a1,1,0,0,0-2,0Z" />
      <Path d="M6,9a1,1,0,0,0,.707-.293l3.586-3.586a1.025,1.025,0,0,1,1.414,0l2.172,2.172a3,3,0,0,0,4.242,0l5.586-5.586A1,1,0,0,0,22.293.293L16.707,5.878a1,1,0,0,1-1.414,0L13.121,3.707a3,3,0,0,0-4.242,0L5.293,7.293A1,1,0,0,0,6,9Z" />
    </Svg>
  );
};

export default AnaliticsIcon;
