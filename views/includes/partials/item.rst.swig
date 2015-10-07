{% include '../annotations/name.rst.swig' %}
{% include '../annotations/since.rst.swig' %}
{% include '../annotations/access.rst.swig' %}
{% include '../annotations/deprecated.rst.swig' %}
{% include '../annotations/preview.rst.swig' %}
{% if not item.alias %}
{% for annotation in display.annotations[item.context.type] %}
{% set path = '../annotations/' + annotation + '.rst.swig' %}{% include path %}
{% endfor %}
{% include '../annotations/changelog.rst.swig' %}
{% endif %}