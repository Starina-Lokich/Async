import GameSavingLoader from './GameSavingLoader.js';

GameSavingLoader.load()
  .then((saving) => {
    console.log('Сохранение успешно загружено:', saving);
  })
  .catch((error) => {
    console.error('Ошибка при загрузке сохранения:', error.message);
  });