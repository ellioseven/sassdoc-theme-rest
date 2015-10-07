test
====

access-private
--------------

private

Source
~~~~~~

.. code-block::

	@mixin access-private() { }

Description
~~~~~~~~~~~

Access Private

Parameters
~~~~~~~~~~

None

alias-bar
---------

Source
~~~~~~

.. code-block::

	@mixin alias-bar() { }

Description
~~~~~~~~~~~

Alias Bar

Parameters
~~~~~~~~~~

None

author
------

Source
~~~~~~

.. code-block::

	@mixin author() { }

Description
~~~~~~~~~~~

Author

Parameters
~~~~~~~~~~

None

Author
~~~~~~

* Author's name

content
-------

Source
~~~~~~

.. code-block::

	@mixin content() { }

Description
~~~~~~~~~~~

Content

Parameters
~~~~~~~~~~

None

Content
~~~~~~~

This mixin allows extra content to be passed (through the `@content` directive).

Role: [Description]

deprecated
----------

**Deprecated!** Deprecation related message

Source
~~~~~~

.. code-block::

	@mixin deprecated() { }

Description
~~~~~~~~~~~

Deprecated

Parameters
~~~~~~~~~~

None

example
-------

Source
~~~~~~

.. code-block::

	@mixin example() { }

Description
~~~~~~~~~~~

Example

Parameters
~~~~~~~~~~

None

Example
~~~~~~~

.. code-block::

	4 + 2 = 8
	4 / 2 = 2

Clamp function

.. code-block::

	clamp(42, $min: 13, $max: 37)
	// 37

ignore
------

Source
~~~~~~

.. code-block::

	@mixin ignore() { }

Description
~~~~~~~~~~~

Ignore

Parameters
~~~~~~~~~~

None

link
----

Source
~~~~~~

.. code-block::

	@mixin link() { }

Description
~~~~~~~~~~~

Link

Parameters
~~~~~~~~~~

None

Links
~~~~~

`<{link.url}>`_

`Optional caption <{link.url}>`_

message-[error|warning|success|info]
------------------------------------

Source
~~~~~~

.. code-block::

	@mixin message-[error|warning|success|info]() { }

Description
~~~~~~~~~~~

Name

Parameters
~~~~~~~~~~

None

output
------

Source
~~~~~~

.. code-block::

	@mixin output() { }

Description
~~~~~~~~~~~

Output

Parameters
~~~~~~~~~~

None

Output
~~~~~~

Description

parameter
---------

Source
~~~~~~

.. code-block::

	@mixin parameter($name, $name, $name, $name: default value) { }

Description
~~~~~~~~~~~

Parameter

Parameters
~~~~~~~~~~

================ ================ ================ ================
Name             Description      Type             Default Value   
---------------- ---------------- ---------------- ----------------
name                              type                             
name                              type | othertype                 
name             description      type                             
name             description      type             default value   
================ ================ ================ ================

require
-------

Source
~~~~~~

.. code-block::

	@mixin require() { }

Description
~~~~~~~~~~~

Require

Parameters
~~~~~~~~~~

None

Requires
~~~~~~~~

* `item`

see
---

Source
~~~~~~

.. code-block::

	@mixin see() { }

Description
~~~~~~~~~~~

See

Parameters
~~~~~~~~~~

None

See
~~~

* [mixin] `other-item`

See
~~~

* [mixin] `other-item`

See
~~~

* [mixin] `other-item`

See
~~~

* [mixin] `other-item`

since
-----

Since version - description

Source
~~~~~~

.. code-block::

	@mixin since() { }

Description
~~~~~~~~~~~

Since

Parameters
~~~~~~~~~~

None

throw
-----

Source
~~~~~~

.. code-block::

	@mixin throw() { 
	  @error &quot;Error related message&quot;;
	}

Description
~~~~~~~~~~~

Throw

Parameters
~~~~~~~~~~

None

Throws
~~~~~~

* Error related message

todo
----

Source
~~~~~~

.. code-block::

	@mixin todo() { }

Description
~~~~~~~~~~~

Todo

Parameters
~~~~~~~~~~

None

TODO's
~~~~~~

* Task to be done

item
----

Source
~~~~~~

.. code-block::

	@mixin item() { }

Description
~~~~~~~~~~~

Item

Parameters
~~~~~~~~~~

None

Used By
~~~~~~~

* [mixin] `require`

other-item
----------

Source
~~~~~~

.. code-block::

	@mixin other-item() { }

Description
~~~~~~~~~~~

Other Item

Parameters
~~~~~~~~~~

None

prop
----

Source
~~~~~~

.. code-block::

	$prop: (default: default)

Description
~~~~~~~~~~~

Property

Map Structure
~~~~~~~~~~~~~

============= ============= ============= =============
Name          Description   Type          Default Value
------------- ------------- ------------- -------------
prop.default  description   Type          default      
============= ============= ============= =============

type
----

Source
~~~~~~

.. code-block::

	$type: &quot;foo&quot;

Description
~~~~~~~~~~~

Type

Type
~~~~

`Bool | String`

other-item
----------

Source
~~~~~~

.. code-block::

	$other-item: &quot;foo&quot;

Description
~~~~~~~~~~~

Other Item

return
------

Source
~~~~~~

.. code-block::

	@function return() { 
	  @return $foo;
	}

Description
~~~~~~~~~~~

Return

Parameters
~~~~~~~~~~

None

Returns
~~~~~~~

`type | other`

description