{% for usedBy in item.usedBy %}
Used By
~~~~~~~

* [{{ usedBy.context.type }}] `{{ usedBy.context.name }}`

{% endfor %}