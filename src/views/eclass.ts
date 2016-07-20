export let eclassView = {
  "type": "VerticalLayout",
  "elements": [
    {
      "type": "Group",
      "label": "Standard",
      "elements": [
        {
          "type": "Control",
          "scope": {
            "$ref": "#/properties/name"
          }
        },
        {
          "type": "Control",
          "scope": {
            "$ref": "#/properties/abstract"
          }
        },
        {
          "type": "Control",
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
          "scope": {
            "$ref": "#/properties/instanceTypeName"
          }
        },
        {
          "type": "Control",
          "scope": {
            "$ref": "#/properties/eSuperTypes"
          }
        }
      ]
    }
  ]
};
