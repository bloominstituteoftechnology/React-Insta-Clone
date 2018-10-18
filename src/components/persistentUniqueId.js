import { makeDecorator } from 'react-decorate';

const defaultPropName = 'uniqueId';

let nextId = 0;

const persistentUniqueId = (propName = defaultPropName) => {
  return {
    displayName() {
      return propName === defaultPropName ?
        defaultPropName :
        `${defaultPropName}(${propName})`;
    },

    initialState() {
      const cache = {};
      return function uniqueId(keyStr) {
        if (!cache.hasOwnProperty(keyStr)) {
          cache[keyStr] = `uid-${keyStr}-${nextId++}`;
        }
        return cache[keyStr];
      };
    },

    propTypes(propTypes) {
      const nextPropTypes = {...propTypes};
      delete nextPropTypes[propName];
      return nextPropTypes;
    },

    nextProps(props, uniqueId) {
      return {
        ...props,
        [propName]: uniqueId,
      };
    },
  };
};

export default makeDecorator(persistentUniqueId);