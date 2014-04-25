describe "schemaFormField directive", ->
  beforeEach ->
    module("schemaForm")

  beforeEach inject( ($compile, $rootScope) ->
    @scope = $rootScope.$new()
    @scope.schema =
      title: "Title"
      type: "string"
    @scope.field = "title"
    @scope.model =
      title: "Crime and Punishment"
    @compile = $compile
    @template = """
  <form name="test">
    <div schema-form-field schema='schema' field='field' model='model'></div>
  </form>
"""
    @buildField = ->
      @element = @compile(@template)(@scope);
      @scope.$apply()
  )

  describe "string field", ->
    beforeEach ->
      @buildField()
    it "should render labels for properties", ->
      expect(@element.find("label").html()).toMatch /Title/
    it "should have inputs", ->
      expect(@element.find("input").val()).toMatch /Crime/

  describe "fields with enums", ->
    beforeEach ->
      @scope.schema =
        title: "Level"
        type: "string"
        enum: ["low", "medium", "high"]
      @scope.field = "level"
      @scope.model =
        level: "medium"
      @buildField()
    it "should be a select", ->
      expect(@element.find("select").attr("name")).toEqual "level"
      expect(@element.find("option").length).toEqual 3

  describe "boolean field", ->
    beforeEach ->
      @scope.schema =
        title: "Good?"
        type: "boolean"
      @scope.field = "good"
      @scope.model =
        good: true
      @buildField()
    it "should render label", ->
      expect(@element.find("label").html()).toMatch /Good/
    it "should have checkbox", ->
      expect(@element.find("input").attr("type")).toEqual "checkbox"
      expect(@element.find("input").attr("checked")).toEqual "checked"
