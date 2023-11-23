import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Checkbox } from 'react-native-paper';

const UserItem = ({ user, onSelect }) => {
  const [isSelected, setIsSelected] = useState(false);

  const toggleSelection = () => {
    const newSelectedState = !isSelected;
    setIsSelected(newSelectedState);
    onSelect(user.id, newSelectedState);
  };

  return (
    <TouchableOpacity onPress={toggleSelection} style={{ flexDirection: 'row', alignItems: 'center', padding: 10 }}>
      <Checkbox
        status={isSelected ? 'checked' : 'unchecked'}
        onPress={toggleSelection}
        color="tomato"
      />
      <Text style={{ marginLeft: 8 }}>{user.firstName} {user.lastName}</Text>
    </TouchableOpacity>
  );
};

export default UserItem;
