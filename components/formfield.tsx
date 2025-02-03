import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome5';

const FormField = ({ title, placeholder, handldeChangeText, otherStyles, ...props }) => {
  // Trạng thái riêng cho giá trị của mỗi ô
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPasswords, setShowPasswords] = useState(false);

  // Xác định giá trị và hàm thay đổi dựa trên placeholder
  const value = placeholder === 'Password' ? password : confirmPassword;
  const setValue = placeholder === 'Password' ? setPassword : setConfirmPassword;

  return (
    <View>
      <Text>{title}</Text>
      <View style={[styles.container, otherStyles]}>
        {placeholder === 'Username or Email' && (
          <Icon name="user" size={20} style={styles.leftIcon} />
        )}
        {placeholder === 'Password' && (
          <Icon name="lock" size={20} style={styles.leftIcon} />
        )}
        {placeholder === 'ConfirmPassword' && (
          <Icon name="lock" size={20} style={styles.leftIcon} />
        )}

        <TextInput
          value={value} // Giá trị của từng ô nhập liệu
          placeholder={placeholder}
          style={[styles.textInput]} // Áp dụng style cho TextInput
          onChangeText={setValue} // Hàm thay đổi giá trị riêng biệt
          {...props}
          secureTextEntry={!showPasswords} // Cả hai ô phụ thuộc vào trạng thái này
        />

        {/* Icon mắt nằm bên phải */}
        {(placeholder === 'Password' || placeholder === 'ConfirmPassword') && (
          <TouchableOpacity
            onPress={() => setShowPasswords(!showPasswords)}
            style={styles.rightIcon}>
            <Icon name={showPasswords ? 'eye-slash' : 'eye'} size={20} />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default FormField;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    position: 'relative',
  },
  textInput: {
    flex: 1,
    fontSize: 12,
  },
  leftIcon: {
    marginRight: 10,
  },
  rightIcon: {
    position: 'absolute',
    right: 10,
  },
});
