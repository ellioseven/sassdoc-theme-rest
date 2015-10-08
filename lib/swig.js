"use strict";

/**
 * Requires
 */


var Swig = require("swig");

var swig = new Swig.Swig();

var RST = require("rest-simple-table");

/**
 * Set Swig default options.
 *
 * @url http://paularmstrong.github.io/swig/docs/api/#SwigOpts
 */

Swig.setDefaults({ autoescape: false })

/**
 * Output input with a decorative underline.
 *
 * @param input
 * @param char
 * @returns {string}
 */

function parseHeading(input, char) {
  var output = "";
  var i;
  for (i = 1; i <= input.length; i++) {
    output = output + char;
  }
  return input + "\n" + output;
}

/**
 * Output decorated heading.
 *
 * @param input
 * @returns {string}
 */

var headingSection = function(input) {
  return parseHeading(input, "=");
}

/**
 * Output decorated sub heading.
 *
 * @param input
 * @returns {string}
 */

var headingSubsection = function(input) {
  return parseHeading(input, "-");
}

/**
 * Output decorated sub sub heading.
 *
 * @param input
 * @returns {string}
 */

var headingSubsubsection = function(input) {
  return parseHeading(input, "~");
}

/**
 * Remove extra whitespace from a block.
 *
 * @url http://stackoverflow.com/questions/19643805/removing-multiple-new-lines-r-n-from-string
 * @param input
 * @returns {string|*}
 */

var parseBlock = function(input) {
  input = input.trim();
  input = input.replace(/(\n){3,}/g, "\n\n");
  return input;
}

/**
 * Remove new line with tab and new line.
 *
 * @param input
 * @returns {string|*}
 */

var parseCode = function(input) {
  input = input.trim();
  input = "\t" + input;
  input = input.replace(/(?:\r\n|\r|\n)/g, "\n\t");
  return input;
}

/**
 * Output arguments for source code preview.
 *
 * @param item
 * @returns {string}
 */

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

/**
 * Output a parameters table.
 *
 * @param parameters
 * @returns String
 */

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

/**
 * Returns if key is in object.
 *
 * @param key
 * @param object
 * @returns {boolean}
 */

var inFilter = function(key, object) {
  return key in object;
}

/**
 * Set filters.
 *
 * @url http://paularmstrong.github.io/swig/docs/api/#setFilter
 */

swig.setFilter("in", inFilter);
swig.setFilter("section_heading", headingSection);
swig.setFilter("subsection_heading", headingSubsection);
swig.setFilter("subsubsection_heading", headingSubsubsection);
swig.setFilter("parse_block", parseBlock);
swig.setFilter("parse_code", parseCode);
swig.setFilter("output_arg", outputArg);
swig.setFilter("output_parameters", outputParameters);

/**
 * Export module
 */

module.exports = swig;