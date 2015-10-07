{% if item.todo.length > 0 %}
TODO's
~~~~~~

{% for todo in item.todo %}
* {{ todo|safe }}
{% endfor %}

{% endif %}