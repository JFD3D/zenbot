module.exports = function container (get, set) {
  //console.log('Mems File Loading...')
  return get('db.createCollection')('mems')
}
/*
module.exports = function container (get, set) {
  console.log('Mems File Loading...')
  return get('db.createCollection')('mems', {
    load: function (obj, opts, cb) {
      // respond after the obj is loaded
      cb(null, obj);
    },
    save: function (obj, opts, cb) {
      // respond before the obj is saved
      cb(null, obj);
    },
    afterSave: function (obj, opts, cb) {
      // respond after the obj is saved
      cb(null, obj);
    },
    destroy: function (obj, opts, cb) {
      // respond after the obj is destroyed
      cb(null, obj)
    }
  })
}
*/