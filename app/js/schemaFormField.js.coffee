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
    typeTemplates = 
      bool: 'boolean'
      boolean: 'boolean'
      email: 'email'
      enum: 'enum'
      integer: 'string'
      number: 'string'
      string: 'string'
    scope.formState = formController
    template = $templateCache.get("#{typeTemplates[scope.schema.type]}Field.html")
    template = $templateCache.get("enumField.html") if scope.schema.enum?
    element.html template
    element.find("input").attr("type", "number") if (scope.schema.type == "number" or scope.schema.type == "integer")
    element.find("input").attr("ng-required", scope.required)
    element.find("input").attr("ng-pattern", "/#{scope.schema.pattern}/") if scope.schema.pattern
    element.find("input").attr("name", scope.field)
    $compile(element.contents())(scope)
