{% if item.require.length %}
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