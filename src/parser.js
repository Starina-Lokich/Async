export default function json(data) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        try {
          const result = String.fromCharCode(...new Uint16Array(data));
          resolve(result);
        } catch (err) {
          reject(new Error('Parsing failed'));
        }
      }, 500);
    });
  }