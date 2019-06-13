import { icons } from './icons';
import { langText } from './lang';

export const getIcon = iconCode => {
  const icoData = icons[iconCode];
  if (icoData) {
    return icoData;
  }
  return null;
};

export const getLangs = lang => {
  return langText[lang] === undefined ? langText.en : langText[lang];
};
