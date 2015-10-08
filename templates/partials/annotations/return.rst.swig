{% if item.return %}
{{ "Returns"|subsubsection_heading }}

{% if item.return.type == '*' %}
Any type
{% else %}
`{{ item.return.type }}`
{% endif %}

{% if item.return.description %}{{ item.return.description|safe }}{% endif %}

{% endif %}