export const useSession = (keyName, defaultValue) => {
  let getter = defaultValue;

  const dataFound = sessionStorage.getItem(keyName);
  if (dataFound) {
    getter = JSON.parse(dataFound);
  }

  const setter = (keyValue) => {
    try {
      sessionStorage.setItem(keyName, JSON.stringify(keyValue));
    } catch (error) {
      if (error.message.includes("exceeded the quota")) {
        //Exceeded the session storage quota, clear all data to make space for more
        sessionStorage.clear();
      } else {
        console.log();
      }
    }
    getter = keyValue;
  };

  const cleaner = () => {
    sessionStorage.removeItem(keyName);
  };

  return [getter, setter, cleaner];
};
