export let eattributeview = {
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
          "label": "eType",
          "scope": {
            "$ref": "#/properties/eType"
          }
        },
        {
          "type": "Control",
          "label": "upperBound",
          "scope": {
            "$ref": "#/properties/upperBound"
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
          "label": "unsettable",
          "scope": {
            "$ref": "#/properties/unsettable"
          }
        },
        {
          "type": "Control",
          "label": "ordered",
          "scope": {
            "$ref": "#/properties/ordered"
          }
        },
        {
          "type": "Control",
          "label": "unique",
          "scope": {
            "$ref": "#/properties/unique"
          }
        },
        {
          "type": "Control",
          "label": "changeable",
          "scope": {
            "$ref": "#/properties/changeable"
          }
        },
        {
          "type": "Control",
          "label": "volatile",
          "scope": {
            "$ref": "#/properties/volatile"
          }
        },
        {
          "type": "Control",
          "label": "transient",
          "scope": {
            "$ref": "#/properties/transient"
          }
        },
        {
          "type": "Control",
          "label": "defaultValueLiteral",
          "scope": {
            "$ref": "#/properties/defaultValueLiteral"
          }
        },
        {
          "type": "Control",
          "label": "derived",
          "scope": {
            "$ref": "#/properties/derived"
          }
        },
        {
          "type": "Control",
          "label": "iD",
          "scope": {
            "$ref": "#/properties/iD"
          }
        }
      ]
    }
  ]
};
