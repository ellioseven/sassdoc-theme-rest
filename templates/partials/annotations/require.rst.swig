{% if item.require.length > 0 %}
{% if (display.access.indexOf(require.item.access) != -1) and not (not display.alias and require.item.alias) or require.external %}
Requires
~~~~~~~~

{% for require in item.require %}
{% if require.external %}
* `{{ require.name }}`{% if require.description %} — {{ require.description }}{% endif %}
{% else %}
* `{{ require.item.context.name }}`{% if require.description %} — {{ require.description }}{% endif %}
{% endif %}
{% endfor %}

{% endif %}
{% endif %}