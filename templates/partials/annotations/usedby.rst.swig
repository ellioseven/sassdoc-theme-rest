{% if item.usedBy.length > 0 %}
{{ "Used By"|subsubsection_heading }}

{% for usedBy in item.usedBy %}
{% if (display.access.indexOf(usedBy.access) != -1) and not (not display.alias and usedBy.alias) %}
* [{{ usedBy.context.type }}] ``{{ usedBy.context.name }}``
{% endif %}
{% endfor %}

{% endif %}