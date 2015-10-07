"use strict";


var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

var def = _interopRequire(require("../default"));

var Promise = require("es6-promise").Promise;

var denodeify = _interopRequire(require("es6-denodeify"));

var extend = _interopRequire(require("extend"));

var fs = _interopRequire(require("fs"));

var fse = _interopRequire(require("fs-extra"));

var path = _interopRequire(require("path"));

var sassdocExtras = _interopRequire(require("sassdoc-extras"));

var swig = _interopRequire(require("./swig"));

denodeify = denodeify(Promise);

var copy = denodeify(fse.copy);
var renderFile = denodeify(swig.renderFile);
var writeFile = denodeify(fs.writeFile);

var applyDefaults = function (ctx) {

  return extend({}, def, ctx, {
    groups: extend(def.groups, ctx.groups),
    display: extend(def.display, ctx.display)
  });

};

module.exports = function (dest, ctx) {

  ctx = applyDefaults(ctx);

  sassdocExtras(ctx, "display", "groupName", "sort");

  ctx.data.byGroupAndType = sassdocExtras.byGroupAndType(ctx.data);

  var index = path.resolve(__dirname, "../views/documentation/index.rst.swig");

  var test = function() {
    for(var type in ctx.data.byGroupAndType) {
      ctx.data.currentGroupName = type;
      ctx.data.currentGroup = ctx.data.byGroupAndType[type];
      var contents = swig.renderFile(index, ctx);
      writeFile(path.resolve(dest, type + '.rst'), contents);
    }
    return true;
  }

  var foo = function() {
    var from = path.resolve(__dirname, "../../pages/description.rst");
    var to = path.resolve(dest, 'description.rst');
    fse.copySync(from, to);
    return true;
  }

  return Promise.all([
    test()
  ]);

};
