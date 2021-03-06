import React, {useContext} from 'react';
import Svg, {G, Path, Rect} from 'react-native-svg';
import {ThemeContext} from 'styled-components/native';

interface EditIconProps {
  width?: number;
  height?: number;
}

export const EditIcon: React.FC<EditIconProps> = ({width, height}) => {
  const theme = useContext(ThemeContext);

  return (
    <Svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill={theme.colors.primary}>
      <G data-name="Layer 2">
        <G data-name="edit">
          <Rect width={width} height={height} opacity="0" />
          <Path d="M19.4 7.34L16.66 4.6A2 2 0 0 0 14 4.53l-9 9a2 2 0 0 0-.57 1.21L4 18.91a1 1 0 0 0 .29.8A1 1 0 0 0 5 20h.09l4.17-.38a2 2 0 0 0 1.21-.57l9-9a1.92 1.92 0 0 0-.07-2.71zM9.08 17.62l-3 .28.27-3L12 9.32l2.7 2.7zM16 10.68L13.32 8l1.95-2L18 8.73z" />
        </G>
      </G>
    </Svg>
  );
};

EditIcon.defaultProps = {
  width: 24,
  height: 24,
};
