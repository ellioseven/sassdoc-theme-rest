{% if item.type %}
Type
~~~~

{% if item.type == "*" %}
Any
{% else %}
`{{ item.type }}`
{% endif %}

{% endif %}