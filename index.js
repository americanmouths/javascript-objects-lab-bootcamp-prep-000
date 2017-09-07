var recipes= {}

function updateObjectWithKeyAndValue(object, key, value) {
  return Object.assign({}, object, {[key]: value})
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  object[key] = value
  return object
}

function deleteFromObjectByKey(object, key) {
  var object = { prop: 1}
  var newObj = Object.assign({}, object)
  delete newObj.prop
}

function destructivelyDeleteFromObjectByKey(object, key) {
  delete object.key;
}
