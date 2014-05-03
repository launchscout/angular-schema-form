var app = angular.module("app", ["schemaForm"]);

app.controller("ExampleCtrl", function($scope) {
  $scope.schema =
{
  title: "Thing"
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
      title: "Level",
      type: "string",
      enum: ["low", "medium", "high"]
    }
  },
  required: ["title"]
}
  $scope.fields = ["title", "level", "good"]
  $scope.model = {
    title: "Uncle John's Bathroom Reader",
    good: false
  }
});
