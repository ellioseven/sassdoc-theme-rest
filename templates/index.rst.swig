{% filter parse_block %}
{{ data.currentGroupName|section_heading }}

{% for type, items in data.currentGroup %}
{% for item in items %}
{% include 'partials/item.rst.swig' %}
{% endfor %}
{% endfor %}
{% endfilter %}