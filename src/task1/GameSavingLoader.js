import read from './reader';
import json from './parser';

export default class GameSavingLoader {
  static load() {
    return read() // Читаем данные из файла
      .then((data) => json(data)) // Преобразуем данные в JSON
      .catch((error) => {
        throw new Error(`Ошибка при загрузке данных: ${error.message}`);
      });
  }
}