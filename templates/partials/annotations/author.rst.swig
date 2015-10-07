{% if item.author.length > 0 %}
Author
~~~~~~

{% for author in item.author %}
* {{ author|safe }}
{% endfor %}

{% endif %}