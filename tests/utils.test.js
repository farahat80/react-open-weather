import { getLabelsByLanguage } from '../src/js/utils';

describe('Utils', () => {
  describe('getLabelsByLanguage', () => {
    test('return the labels object corresponding to the language', () => {
      const labels = getLabelsByLanguage('es');
      expect(labels).toEqual({ wind: 'Viento', humidity: 'Humedad' });
    });
    test('return the labels object for english as default', () => {
      const labels = getLabelsByLanguage(null);
      expect(labels).toEqual({ wind: 'Wind', humidity: 'Humidity' });
    });
  });
});
