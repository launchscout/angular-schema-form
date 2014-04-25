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
      scope: {
        schema: "=",
        model: "=",
        field: "=",
        editAs: "@"
      },
      link: function(scope, element, attrs) {
        var template;
        template = scope.schema["enum"] != null ? $templateCache.get("enumField.html") : $templateCache.get("" + scope.schema.type + "Field.html");
        element.html(template);
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
        model: "="
      },
      templateUrl: "schemaFormFields.html"
    };
  });

}).call(this);

angular.module("schemaForm").run(["$templateCache", function($templateCache) {

  $templateCache.put("booleanField.html",
    "<div class=\"formgroup\">\n" +
    "  <label>{{schema.title}}</label>\n" +
    "  <input name=\"field\" ng-model=\"model[field]\" type=\"checkbox\"></input>\n" +
    "</div>\n"
  );

  $templateCache.put("enumField.html",
    "<div class=\"formgroup\">\n" +
    "  <label>{{schema.title}}</label>\n" +
    "  <select name=\"{{field}}\" ng-model=\"model[field]\" ng-options=\"enumValue for enumValue in schema.enum\"></select>\n" +
    "</div>\n"
  );

  $templateCache.put("schemaFormFields.html",
    "<div ng-repeat=\"(field, fieldSchema) in schema.properties\">\n" +
    "  <schema-form-field field=\"field\" schema=\"fieldSchema\" model=\"model\"></schema-form-field>\n" +
    "</div>\n"
  );

  $templateCache.put("stringField.html",
    "<div class=\"form-group\">\n" +
    "  <label for=\"{{field}}\">{{schema.title}}</label>\n" +
    "  <input id=\"{{field}}\" name=\"{{field}}\" ng-model=\"model[field]\" type=\"text\" class=\"form-control\"></input>\n" +
    "</div>\n"
  );

}]);
