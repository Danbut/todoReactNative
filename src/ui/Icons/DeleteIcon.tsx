import React from 'react';
import Svg, {Path} from 'react-native-svg';
import {DANGER_COLOR, PRIMARY_COLOR, SECONDARY_COLOR} from '../../assets';

interface DeleteIconProps {
  width?: number;
  height?: number;
}

export const DeleteIcon: React.FC<DeleteIconProps> = ({width, height}) => (
  <Svg width={width} height={height} viewBox="0 0 24 24">
    <Path fill="none" d="M0 0h24v24H0V0z" />
    <Path
      fill={DANGER_COLOR}
      d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM8 9h8v10H8V9zm7.5-5l-1-1h-5l-1 1H5v2h14V4h-3.5z"
    />
  </Svg>
);