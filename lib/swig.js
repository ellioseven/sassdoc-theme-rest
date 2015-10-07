"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

var Swig = require("swig");

Swig.setDefaults({ autoescape: false })

var swig = new Swig.Swig();

var RST = require("rest-simple-table");

function parseHeading(input, char) {
  var output = "";
  var i;
  for (i = 1; i <= input.length; i++) {
    output = output + char;
  }
  return input + "\n" + output;
}

var heading = function(input) {
  return parseHeading(input, "=");
}

var subheading = function(input) {
  return parseHeading(input, "-");
}

var parseBlock = function(input) {
  input = input.trim();
  input = input.replace(/(\n){3,}/g, "\n\n");
  return input;
}

var parseCode = function(input) {
  input = input.trim();
  input = "\t" + input;
  input = input.replace(/(?:\r\n|\r|\n)/g, "\n\t");
  return input;
}

var outputArg = function(item) {
  var i = 0;
  var output = "";
  if (item.parameter === undefined) {
    return "";
  }
  item.parameter.forEach(function(parameter) {
    var string = '$' + parameter.name;
    if (parameter.default) {
      string = string + ': ' + parameter.default;
    }
    if (parameter.type.toLowerCase() === 'arglist') {
      string = string + '...';
    }
    if (output === "") {
      output = string;
    } else {
      output = output + ', ' + string;
    }
  });
  return output;
}

var outputParameters = function(parameters) {
  var tableHead = ['Name', 'Description', 'Type', 'Default Value'];
  var tableBody = [];
  for (var i = 0; i < parameters.length; i++) {
    var name = parameters[i]['name'] || "";
    var description = parameters[i]['description'] || "";
    description.replace("\n", "");
    var type = parameters[i]['type'] || "";
    var defaultVal = parameters[i]['default'] || "";
    tableBody.push([name,description,type,defaultVal]);
  }
  if (tableHead.length && tableBody.length) {
    return new RST({
      head: tableHead,
      body: tableBody
    }).draw();
  }
}

var inFilter = function(key, object) {
  return key in object;
}

swig.setFilter("in", inFilter);
swig.setFilter("heading", heading);
swig.setFilter("subheading", subheading);
swig.setFilter("parse_block", parseBlock);
swig.setFilter("parse_code", parseCode);
swig.setFilter("output_arg", outputArg);
swig.setFilter("output_parameters", outputParameters);

module.exports = swig;