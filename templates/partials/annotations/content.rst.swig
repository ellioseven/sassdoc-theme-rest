{% if 'content'|in(item) %}
Content
~~~~~~~

This mixin allows extra content to be passed (through the `@content` directive).

{% if item.content !== "" %}Role: {{ item.content }}{% endif %}

{% endif %}