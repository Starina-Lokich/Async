import GameSavingLoader from '../src/task1/GameSavingLoader.js';

describe('GameSavingLoader', () => {
  test('should load and parse game saving correctly', () => {
    return GameSavingLoader.load().then((saving) => {
      expect(saving).toEqual({
        id: 9,
        created: 1546300800,
        userInfo: {
          id: 1,
          name: 'Hitman',
          level: 10,
          points: 2000,
        },
      });
    });
  });

  test('should handle errors during loading', () => {
    jest.mock('../src/task1/reader.js', () =>
      jest.fn().mockRejectedValue(new Error('Ошибка чтения'))
    );
    return GameSavingLoader.load().catch((error) => {
      expect(error.message).toBe('Ошибка при загрузке данных: Ошибка чтения');
    });
  });
});