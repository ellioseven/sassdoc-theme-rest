{% if item.since.length == 1 %}
Since
~~~~~

{{ item.since[0].version }}{% if item.since[0].description %} — {{ item.since[0].description }}{% endif %}

{% endif %}