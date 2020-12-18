import define from '../helpers/define_object_property'

const module = (() => {
  const is = type => {
    const element = document.createElement(type)
    element.cloneNode(true);
    define(element);
    return element;
  }
  return {
    is
  }
})();

export default module;