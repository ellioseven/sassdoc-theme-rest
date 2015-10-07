{% if item.link.length > 0 %}
Links
~~~~~

{% for link in item.link %}
{% if link.caption %}
`{{ link.caption }} <{{ link.url }}>`_
{% else %}
`<{{ link.url }}>`_
{% endif %}

{% endfor %}
{% endif %}