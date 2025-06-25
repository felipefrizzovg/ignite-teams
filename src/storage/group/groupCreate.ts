import AsyncStorage from '@react-native-async-storage/async-storage';
import { GROUP_COLLECTION } from '../storageConfig';

export default async function groupCreate(newGroupName: string) {
  try {
    await AsyncStorage.setItem(GROUP_COLLECTION, newGroupName);

  } catch (error) {
    throw error;
  }
}