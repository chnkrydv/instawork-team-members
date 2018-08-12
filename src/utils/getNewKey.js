const cachedKeygen = () => {
  const keys = [];

  for(let i = 0; i < 100; i++){
    keys[99 - i] = i;
  }

  return () => {
    return keys.pop();
  }
}

const getNewKey = cachedKeygen();

export default getNewKey;