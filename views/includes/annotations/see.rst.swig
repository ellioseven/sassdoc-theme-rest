{% for see in item.see %}
See
~~~

* [{{ see.context.type }}] `{{ see.context.name }}`

{% endfor %}