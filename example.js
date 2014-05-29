var app = angular.module("app", ["schemaForm"]);

app.controller("ExampleCtrl", function($scope) {
  $scope.schema =
{
  title: "Thing",
  type: "object",
  properties: {
    title: {
      type: "string",
      title: "Title",
      pattern: "^[A-Z]"
    },
    good: {
      type: "boolean",
      title: "Good?"
    },
    level: {
      type: "string",
      title: "Level",
      enum: ["low", "medium", "high"]
    },
    number: {
      type: "number",
      title: "What's your lucky number?",
    },
    integer: {
      type: "integer",
      title: "Integer too"
    },
    user_email: {
      type: "email",
      title: "Email por favor"
    }
  },
  required: ["title"]
}
  $scope.fields = ["title", "level", "good", "number", "integer", "user_email"]
  $scope.model = {
    title: "Uncle John's Bathroom Reader",
    good: false
  }
});
