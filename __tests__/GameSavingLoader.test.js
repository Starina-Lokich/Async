import GameSavingLoader from '../src/GameSavingLoader';
import read from '../src/reader';
import json from '../src/parser';

jest.mock('../src/reader');
jest.mock('../src/parser');

test('должен успешно загрузить сохранение', async () => {
  const mockData = '{"id":9,"created":1546300800,"userInfo":{"id":1,"name":"Hitman","level":10,"points":2000}}';
  const buffer = new ArrayBuffer(mockData.length * 2);
  const bufferView = new Uint16Array(buffer);

  for (let i = 0; i < mockData.length; i++) {
    bufferView[i] = mockData.charCodeAt(i);
  }

  read.mockResolvedValueOnce(buffer);
  json.mockImplementationOnce((data) => Promise.resolve(String.fromCharCode(...new Uint16Array(data))));

  const saving = await GameSavingLoader.load();
  expect(saving).toEqual(JSON.parse(mockData));
});

test('должен обработать ошибку при чтении файла', async () => {
  read.mockRejectedValueOnce(new Error('File read error'));

  await expect(GameSavingLoader.load()).rejects.toThrow('Failed to load game saving: File read error');
});