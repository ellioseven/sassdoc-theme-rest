{% if item.require.length > 0 %}
{{ "Requires"|subsubsection_heading }}

{% for require in item.require %}
{% if (display.access.indexOf(require.item.access) != -1) and not (not display.alias and require.item.alias) or require.external %}
{% if require.external %}
* ``{{ require.name }}``
{% else %}
* ``{{ require.item.context.name }}``
{% endif %}
{% endif %}
{% endfor %}

{% endif %}