describe "schemaFormFields directive", ->
  beforeEach ->
    module("schemaForm")

  beforeEach inject( ($compile, $rootScope) ->
    @scope = $rootScope.$new()
    @scope.schema =
      type: "object"
      properties:
        title:
          title: "Title"
          type: "string"
        author:
          title: "Author"
          type: "string"
    @scope.model =
      title: "Crime and Punishment"
      author: "Dostoyevsky"
    @compile = $compile
    @template = """
  <form name="test">
    <div schema-form-fields schema='schema' model='model'></div>
  </form>
"""
    @element = @compile(@template)(@scope);
    @scope.$apply()
  )

  it "should render labels for properties", ->
    expect(@element.find("label").html()).toMatch /Author/
