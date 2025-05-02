import read from './reader';
import json from './parser';

export default class GameSavingLoader {
  static async load() {
    try {
      const data = await read();
      const jsonString = await json(data);
      return JSON.parse(jsonString);
    } catch (error) {
      throw new Error(`Failed to load game saving: ${error.message}`);
    }
  }
}