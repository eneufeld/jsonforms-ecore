export let eclassView = {
  "type": "VerticalLayout",
  "elements": [
    {
      "type": "Group",
      "label": "Standard",
      "elements": [
        {
          "type": "Control",
          "label": "name",
          "scope": {
            "$ref": "#/properties/name"
          }
        },
        {
          "type": "Control",
          "label": "abstract",
          "scope": {
            "$ref": "#/properties/abstract"
          }
        },
        {
          "type": "Control",
          "label": "interface",
          "scope": {
            "$ref": "#/properties/interface"
          }
        }
      ]
    },
    {
      "type": "Group",
      "label": "Advanced",
      "elements": [
        {
          "type": "Control",
          "label": "instanceTypeName",
          "scope": {
            "$ref": "#/properties/instanceTypeName"
          }
        },
        {
          "type": "Control",
          "label": "eSuperTypes",
          "scope": {
            "$ref": "#/properties/eSuperTypes"
          }
        }
      ]
    }
  ]
};
