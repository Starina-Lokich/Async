export default function json(data) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      try {
        const jsonString = String.fromCharCode.apply(null, new Uint16Array(data));
        resolve(JSON.parse(jsonString));
      } catch (error) {
        reject(new Error('Ошибка при парсинге JSON'));
      }
    }, 500);
  });
}