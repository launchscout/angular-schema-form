angular.module("schemaForm").directive "schemaFormField", ($compile, $templateCache)->
  restrict: "EA"
  replace: true
  require: "^form"
  scope:
    schema: "="
    model: "="
    field: "="
    required: "="
    editAs: "@"
  link: (scope, element, attrs, formController)->
    scope.formState = formController
    template = if scope.schema.enum?
      $templateCache.get("enumField.html")
    else
      $templateCache.get("#{scope.schema.type}Field.html")
    element.html template
    element.find("input").attr("type", "number") if (scope.schema.type == "number" or scope.schema.type == "integer")
    element.find("input").attr("ng-required", scope.required)
    element.find("input").attr("ng-pattern", "/#{scope.schema.pattern}/") if scope.schema.pattern
    element.find("input").attr("name", scope.field)
    $compile(element.contents())(scope)
