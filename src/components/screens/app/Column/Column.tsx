import {useNavigation} from '@react-navigation/core';
import React, {useRef, useState} from 'react';
import {TextInput} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {useDispatch} from 'react-redux';
import {IColumn} from '../../../../entities/Column';
import {renameColumn} from '../../../../state/columns/columnsSlice';
import styles from '../../../assets/styles';
import {COLUMN_SCREEN} from '../../../navigation/constants';
import {Input} from '../../../ui/Input';

interface ColumnProps {
  column: IColumn;
}

export const Column: React.FC<ColumnProps> = ({column}) => {
  const [isRenaming, setIsRenaming] = useState<boolean>(false);
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const [columnName, setColumnName] = useState(column.title);
  const inputRef = useRef<TextInput>();

  return (
    <TouchableOpacity
      style={styles.column}
      onLongPress={() => {
        setIsRenaming(true);
        inputRef.current.focus();
      }}
      onPress={() => navigation.navigate(COLUMN_SCREEN, {id: column.id})}>
      <Input
        ref={inputRef}
        value={columnName}
        onChangeText={text => setColumnName(text)}
        editable={isRenaming}
        borderRadius={4}
        bold
        autoFocus={isRenaming}
        onEndEditing={() => {
          dispatch(
            renameColumn({
              columnId: column.id,
              title: columnName,
            }),
          );
          setIsRenaming(false);
        }}
      />
    </TouchableOpacity>
  );
};
