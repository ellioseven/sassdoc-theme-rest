General
=======

access-private
--------------

Access
~~~~~~

private

Source
~~~~~~

.. code-block:: scss

	@mixin access-private() { 
	  font-size: 20px;
	  line-height: 20px;
	
	  @if 20 == font-size {
	    font-size: 30px;
	  }
	}

Description
~~~~~~~~~~~

Access Private

alias-bar
---------

Source
~~~~~~

.. code-block:: scss

	@mixin alias-bar() { }

Description
~~~~~~~~~~~

Alias Bar

author
------

Source
~~~~~~

.. code-block:: scss

	@mixin author() { }

Description
~~~~~~~~~~~

Author

Author
~~~~~~

* Author's name

content
-------

Source
~~~~~~

.. code-block:: scss

	@mixin content() { }

Description
~~~~~~~~~~~

Content

Content
~~~~~~~

This mixin allows extra content to be passed (through the ``@content`` directive).

Role: [Description]

deprecated
----------

**Deprecated!** Deprecation related message

Source
~~~~~~

.. code-block:: scss

	@mixin deprecated() { }

Description
~~~~~~~~~~~

Deprecated

example
-------

Source
~~~~~~

.. code-block:: scss

	@mixin example() { }

Description
~~~~~~~~~~~

Example

Example
~~~~~~~

.. code-block:: scss

	4 + 2 = 8
	4 / 2 = 2

Clamp function

.. code-block:: scss

	clamp(42, $min: 13, $max: 37)
	// 37

ignore
------

Source
~~~~~~

.. code-block:: scss

	@mixin ignore() { }

Description
~~~~~~~~~~~

Ignore

link
----

Source
~~~~~~

.. code-block:: scss

	@mixin link() { }

Description
~~~~~~~~~~~

Link

Links
~~~~~

`<http://some.url>`_

`Optional caption <http://some.url>`_

message-[error|warning|success|info]
------------------------------------

Source
~~~~~~

.. code-block:: scss

	@mixin message-[error|warning|success|info]() { }

Description
~~~~~~~~~~~

Name

output
------

Source
~~~~~~

.. code-block:: scss

	@mixin output() { }

Description
~~~~~~~~~~~

Output

Output
~~~~~~

Description

parameter
---------

Source
~~~~~~

.. code-block:: scss

	@mixin parameter($name, $name, $name, $name: default value) { }

Description
~~~~~~~~~~~

Parameter

Parameters
~~~~~~~~~~

================ ================ ================ ================
Name             Description      Type             Default Value   
================ ================ ================ ================
name                              type                             
name                              type | othertype                 
name             description      type                             
name             description      type             default value   
================ ================ ================ ================

require
-------

Source
~~~~~~

.. code-block:: scss

	@mixin require() { 
	  @include see;
	}

Description
~~~~~~~~~~~

Require

Requires
~~~~~~~~

* ``see``

* ``item``

see
---

Source
~~~~~~

.. code-block:: scss

	@mixin see() { }

Description
~~~~~~~~~~~

See

Used By
~~~~~~~

* [mixin] ``require``

since
-----

Since
~~~~~

version — description

Source
~~~~~~

.. code-block:: scss

	@mixin since() { }

Description
~~~~~~~~~~~

Since

Since
~~~~~

version — description

changelog
---------

Source
~~~~~~

.. code-block:: scss

	@mixin changelog() { }

Description
~~~~~~~~~~~

Changelog

Changelog
~~~~~~~~~

* 1.0 — Stuff happened in 1.0

* 2.0 — Stuff happened in 2.0

* 3.0 — Stuff happened in 3.0

throw
-----

Source
~~~~~~

.. code-block:: scss

	@mixin throw() { 
	  @error "Error related message";
	}

Description
~~~~~~~~~~~

Throw

Throws
~~~~~~

* Error related message

todo
----

Source
~~~~~~

.. code-block:: scss

	@mixin todo() { }

Description
~~~~~~~~~~~

Todo

TODOs
~~~~~

* Task to be done

item
----

Source
~~~~~~

.. code-block:: scss

	@mixin item() { }

Description
~~~~~~~~~~~

Item

Used By
~~~~~~~

* [mixin] ``require``

other-item
----------

Source
~~~~~~

.. code-block:: scss

	@mixin other-item() { }

Description
~~~~~~~~~~~

Other Item

prop
----

Source
~~~~~~

.. code-block:: scss

	$prop: (default: default)

Description
~~~~~~~~~~~

Property

Map Structure
~~~~~~~~~~~~~

============= ============= ============= =============
Name          Description   Type          Default Value
============= ============= ============= =============
prop.default  description   Type          default      
============= ============= ============= =============

type
----

Source
~~~~~~

.. code-block:: scss

	$type: "foo"

Description
~~~~~~~~~~~

Type

Type
~~~~

``Bool | String``

other-item
----------

Source
~~~~~~

.. code-block:: scss

	$other-item: "foo"

Description
~~~~~~~~~~~

Other Item

return
------

Source
~~~~~~

.. code-block:: scss

	@function return() { 
	  @return $foo;
	}

Description
~~~~~~~~~~~

Return

Returns
~~~~~~~

``type | other`` — description