angular.module("schemaForm").directive "schemaFormFields", ->
  restrict: "EA"
  scope:
    schema: "="
    model: "="
    fields: "="
  link: (scope, element, attrs) ->
    scope.required = (field) ->
      _.contains(@schema.required, field)
  templateUrl: "schemaFormFields.html"
