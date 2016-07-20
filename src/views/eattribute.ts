export let eattributeview = {
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
            "$ref": "#/properties/eType"
          }
        },
        {
            "type": "HorizontalLayout",
            "elements": [
                {
                    "type": "Label",
                    "text":"Bounds"
                },
                {
                  "type": "Control",
                  "label":false,
                  "scope": {
                    "$ref": "#/properties/lowerBound"
                  }
                },
                {
                  "type": "Control",
                  "label":false,
                  "scope": {
                    "$ref": "#/properties/upperBound"
                  }
                }
            ]
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
            "$ref": "#/properties/unsettable"
          }
        },
        {
          "type": "Control",
          "scope": {
            "$ref": "#/properties/ordered"
          }
        },
        {
          "type": "Control",
          "scope": {
            "$ref": "#/properties/unique"
          }
        },
        {
          "type": "Control",
          "scope": {
            "$ref": "#/properties/changeable"
          }
        },
        {
          "type": "Control",
          "scope": {
            "$ref": "#/properties/volatile"
          }
        },
        {
          "type": "Control",
          "scope": {
            "$ref": "#/properties/transient"
          }
        },
        {
          "type": "Control",
          "scope": {
            "$ref": "#/properties/defaultValueLiteral"
          }
        },
        {
          "type": "Control",
          "scope": {
            "$ref": "#/properties/derived"
          }
        }
      ]
    }
  ]
};
