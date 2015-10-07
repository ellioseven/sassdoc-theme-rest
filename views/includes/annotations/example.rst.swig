{% if item.example.length > 0 %}
Example
~~~~~~~

{% for example in item.example %}
{% if example.description %}
{{ example.description|safe }}

{% endif %}
.. code-block::

{% filter parse_code %}
{{ example.code|escape|safe }}
{% endfilter %}
{% endfor %}

{% endif %}