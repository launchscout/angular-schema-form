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
        var template;
        scope.formState = formController;
        template = scope.schema["enum"] != null ? $templateCache.get("enumField.html") : $templateCache.get("" + scope.schema.type + "Field.html");
        element.html(template);
        if (scope.schema.type === "number" || scope.schema.type === "integer") {
          element.find("input").attr("type", "number");
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

angular.module("schemaForm").run(["$templateCache", function($templateCache) {

  $templateCache.put("booleanField.html",
    "<div class=\"form-group\">\n" +
    "  <label for=\"{{field}}\">{{schema.title}}</label>\n" +
    "  <input id=\"{{field}}\" name=\"field\" ng-model=\"model[field]\" type=\"checkbox\"></input>\n" +
    "</div>\n"
  );

  $templateCache.put("enumField.html",
    "<div class=\"form-group\">\n" +
    "  <label for=\"{{field}}\">{{schema.title}}</label>\n" +
    "  <select id=\"{{field}}\" name=\"{{field}}\" ng-model=\"model[field]\" ng-options=\"enumValue for enumValue in schema.enum\"></select>\n" +
    "</div>\n"
  );

  $templateCache.put("schemaFormFields.html",
    "<div ng-repeat=\"field in fields\">\n" +
    "  <schema-form-field field=\"field\"\n" +
    "    schema=\"schema.properties[field]\"\n" +
    "    model=\"model\" required=\"required(field)\">\n" +
    "  </schema-form-field>\n" +
    "</div>\n"
  );

  $templateCache.put("stringField.html",
    "<div class=\"form-group\" ng-class=\"{'has-error': formState[field].$invalid}\">\n" +
    "  <label for=\"{{field}}\" class=\"control-label\">{{schema.title}}</label>\n" +
    "  <input id=\"{{field}}\" ng-attr-name=\"{{field}}\" ng-model=\"model[field]\" type=\"text\" class=\"form-control\"></input>\n" +
    "</div>\n"
  );

}]);
