
const setStorage = (key, data) => {
  localStorage.setItem(key, JSON.stringify(data));
}

const getStorage = key => {
  const data = JSON.parse(localStorage.getItem(key) || null);
  return data;
};

const _dispatchCustomEvent = (element, nameEvent = 'generic-event', detail = null) => {
  element.dispatchEvent(new CustomEvent(nameEvent, {
      detail,
      bubbles: true,
      composed: true
  }));
}
