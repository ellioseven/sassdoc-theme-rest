{% if item.see.length %}
See
~~~

{% for see in item.see %}
* [{{ see.context.type }}] `{{ see.context.name }}`
{% endfor %}
{% endif %}