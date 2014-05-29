# SchemaForm

##Simple form building for angular.

Schema form provides a couple directives for building forms
given a [json schema](http://json-schema.org).

`<schema-form-fields>` can be used as an element or attribute and
takes 3 attributes:

* schema
* model
* fields (an array of field names, for ordering)

So far, we support the following json schema types:

* string
* boolean
* enum
* email
* integer
* number
* required
* pattern

We aim to eventually support:

* format date-time
* link relations

This directive outputs twitter bootstrap compatible markup. A [demo](http://gaslight.github.io/angular-schema-form/) is here.
