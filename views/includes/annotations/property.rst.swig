{% if item.property.length > 0 %}
Map Structure
~~~~~~~~~~~~~

{{ item.property|output_parameters }}

{% endif %}