{% if item.throw.length > 0 %}
Throws
~~~~~~

{% for _throw in item.throw %}
* {{ _throw|safe }}
{% endfor %}

{% endif %}