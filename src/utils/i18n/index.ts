import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    // the translations
    // (tip move them in a JSON file and import them,
    // or even better, manage them via a UI: https://react.i18next.com/guides/multiple-translation-files#manage-your-translations-with-a-management-gui)
    resources: {
      en: {
        translation: {
          welcome: 'Welcome to my Memory Game',
          start: 'Start to play',
          quantityCards: 'Quantity Cards',
          limitFailures: 'Failure Limit',
          setTimeout: 'Set timeout in minutes',
          failures: 'Failures',
          none: 'none',
          cards: 'Cards',
          timeRunning: 'Time running',
          timeRemaining: 'Time remaining',
          ofCourse: 'Of course ;)',
          congratulations: 'Congratulations',
          youFailed: 'You failed. Too much level for you?',
          careTryAgain: 'So... care to try again?',
        },
      },
      es: {
        translation: {
          welcome: 'Bienvenidos a mi Juego de Memoria',
          start: 'Comenzar a jugar',
          quantityCards: 'Cantidad de Cartas',
          limitFailures: 'Límite de fallas',
          setTimeout: 'Cuenta regresiva en minutos',
          failures: 'Fallas',
          none: 'ninguna',
          cards: 'Cartas',
          timeRunning: 'Tiempo corriendo',
          timeRemaining: 'Tiempo restante',
          ofCourse: 'Por supuesto ;)',
          congratulations: 'Felicitaciones',
          youFailed: 'Fallaste. ¿Mucho nivel para ti?',
          careTryAgain: 'Así que... ¿quieres volver a intentarlo?',
        },
      },
    },
    lng: 'es', // if you're using a language detector, do not define the lng option
    fallbackLng: 'en',

    interpolation: {
      escapeValue: false, // react already safes from xss => https://www.i18next.com/translation-function/interpolation#unescape
    },
  })
