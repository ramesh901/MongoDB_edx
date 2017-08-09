var mongoose = require('mongoose');
var wagner = require('wagner-core');

module.exports = function() {
  mongoose.connect('mongodb://localhost:27017/test',{useMongoClient: true});

  var Category =
    mongoose.model('Category', require('./category'), 'categories');

  wagner.factory('Category', function() {
    return Category;
  });

  return {
    Category: Category
  };
};
