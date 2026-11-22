function globalError() {
  const error = Error('Глобальная ошибка');
  error.name = 'GlobalError';
  throw error;
}

function localError() {
  const error = Error('Локальная ошибка');
  error.name = 'LocalError';
  throw error;
}

function testErrorScope(fn) {
  try {
    try {
      fn();
    } catch (error) {
      console.log('Обнаружена локальная ошибка');
      console.error(error);
    }
  } catch (error) {
    if (error.name !== 'LocalError') {
        throw error;
      }

      console.log('Обнаружена локальная ошибка');
      console.error(error);
  }
}
testErrorScope(localError);
testErrorScope(globalError);