const ofTypeEmail = email => /^[a-z0-9](\.?[a-z0-9_-]){0,}@[a-z0-9-]+\.([a-z]{1,6}\.)?[a-z]{2,6}$/.test(email);

const ofTypePhone = phone => /^\d{3}-\d{3}-\d{4}$/.test(phone);

const aValidName = name => /^[A-Za-z]+$/.test(name);

const isEmpty = text => !text.length;

const phoneFormat = text => {
  if(isNaN(text.slice(-1)) || text.length > 12) return text.slice(0, -1);
  return (text.length === 3 || text.length === 7) ? text + '-' : text;
}

const capitalizer = text => text && text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();

export default { aValidName, ofTypeEmail, ofTypePhone, phoneFormat, isEmpty, capitalizer };