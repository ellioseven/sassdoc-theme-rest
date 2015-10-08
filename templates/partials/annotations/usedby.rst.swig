{% if item.usedBy.length > 0 %}
{% if (display.access.indexOf(usedBy.access) != -1) and not (not display.alias and usedBy.alias) %}
{{ "Used By"|subsubsection_heading }}
{% for usedBy in item.usedBy %}
* [{{ usedBy.context.type }}] `{{ usedBy.context.name }}`
{% endfor %}

{% endif %}
{% endif %}