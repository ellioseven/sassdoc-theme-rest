{% filter parse_block %}
{{ data.currentGroupName|heading }}

{% for type, items in data.currentGroup %}
{% for item in items %}
{% include '../includes/partials/item.rst.swig' %}
{% endfor %}
{% endfor %}
{% endfilter %}