# SchemaForm

##Simple form building for angular.

Schema form provides a couple directives for building forms
given a json schema. `schema-form-fields` takes 3 attributes:

* schema
* model
* fields (an array of field names, for ordering)

So far, we support the following json schema types:

* string
* boolean
* enum
* required

We aim to support:
* number
* format date-time
* pattern

and eventually
* link relations

This directive outputs twitter bootstrap compatible markup. A [demo](http://gaslight.github.io/angular-schema-form/) is here.
