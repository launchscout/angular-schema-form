/* schema-form - 0.0.1
 * Angular directives that produces form fields from json schema
 * https://your/lib/name/here
 */
(function() {
  angular.module("schemaForm", []);

}).call(this);

(function() {
  angular.module("schemaForm").directive("schemaFormField", function($compile, $templateCache) {
    return {
      restrict: "EA",
      replace: true,
      require: "^form",
      scope: {
        schema: "=",
        model: "=",
        field: "=",
        required: "=",
        editAs: "@"
      },
      link: function(scope, element, attrs, formController) {
        var template, typeTemplates;
        typeTemplates = {
          bool: 'boolean',
          boolean: 'boolean',
          email: 'email',
          "enum": 'enum',
          integer: 'string',
          number: 'string',
          string: 'string'
        };
        scope.formState = formController;
        template = $templateCache.get("" + typeTemplates[scope.schema.type] + "Field.html");
        if (scope.schema["enum"] != null) {
          template = $templateCache.get("enumField.html");
        }
        element.html(template);
        if (scope.schema.type === "number" || scope.schema.type === "integer") {
          element.find("input").attr("type", "number");
        }
        if (scope.schema.type === "email") {
          element.find("input").attr("type", "email");
        }
        element.find("input").attr("ng-required", scope.required);
        if (scope.schema.pattern) {
          element.find("input").attr("ng-pattern", "/" + scope.schema.pattern + "/");
        }
        element.find("input").attr("name", scope.field);
        return $compile(element.contents())(scope);
      }
    };
  });

}).call(this);

(function() {
  angular.module("schemaForm").directive("schemaFormFields", function() {
    return {
      restrict: "EA",
      scope: {
        schema: "=",
        model: "=",
        fields: "="
      },
      link: function(scope, element, attrs) {
        return scope.required = function(field) {
          return _.contains(this.schema.required, field);
        };
      },
      templateUrl: "schemaFormFields.html"
    };
  });

}).call(this);
