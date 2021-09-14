import AsyncStorage from '@react-native-async-storage/async-storage';

export default {
  get: async (keyName: string) => {
    try {
      const token = await AsyncStorage.getItem(keyName);

      return token;
    } catch (error) {
      return null;
    }
  },

  set: (keyName: string, value: any) => AsyncStorage.setItem(keyName, value),

  remove: (keyName: string) => AsyncStorage.removeItem(keyName),
};
