export let ecore_jsonschema = {
    "type": "object",
    "properties": {
        "eClass": {
            "type": "string"
        },
        "_id": {
            "type": "string"
        },
        "name": {
            "type": "string"
        },
        "nsURI": {
            "type": "string"
        },
        "nsPrefix": {
            "type": "string"
        },
        "eClassifiers": {
            "type": "array",
            "items": {
                "type": "object",
                "properties": {
                    "eClass": {
                        "type": "string"
                    },
                    "_id": {
                        "type": "string"
                    },
                    "name": {
                        "type": "string"
                    },
                    "instanceClassName": {
                        "type": "string"
                    },
                    "instanceTypeName": {
                        "type": "string"
                    },
                    "abstract": {
                        "type": "boolean"
                    },
                    "interface": {
                        "type": "boolean"
                    },
                    "eStructuralFeatures": {
                        "type": "array",
                        "items": {
                            "type": "object",
                            "properties": {
                                "eClass": {
                                    "type": "string"
                                },
                                "_id": {
                                    "type": "string"
                                },
                                "name": {
                                    "type": "string"
                                },
                                "ordered": {
                                    "type": "boolean"
                                },
                                "unique": {
                                    "type": "boolean"
                                },
                                "lowerBound": {
                                    "type": "integer"
                                },
                                "upperBound": {
                                    "type": "integer"
                                },
                                "many": {
                                    "type": "boolean"
                                },
                                "required": {
                                    "type": "boolean"
                                },
                                "changeable": {
                                    "type": "boolean"
                                },
                                "volatile": {
                                    "type": "boolean"
                                },
                                "transient": {
                                    "type": "boolean"
                                },
                                "defaultValueLiteral": {
                                    "type": "string"
                                },
                                "unsettable": {
                                    "type": "boolean"
                                },
                                "derived": {
                                    "type": "boolean"
                                },
                                "containment": {
                                    "type": "boolean"
                                },
                                "resolveProxies": {
                                    "type": "boolean"
                                },
                                "eType": {
                                    "type": "object",
                                    "properties": {
                                        "eClass": {
                                            "type": "string"
                                        },
                                        "$ref": {
                                            "type": "string"
                                        }
                                    },
                                    "additionalProperties": false
                                },
                                "eOpposite": {
                                    "type": "object",
                                    "properties": {
                                        "$ref": {
                                            "type": "string"
                                        }
                                    },
                                    "additionalProperties": false
                                }
                            },
                            "additionalProperties": false
                        }
                    },
                    "eOperations": {
                        "type": "array",
                        "items": {
                            "type": "object",
                            "properties": {
                                "eClass": {
                                    "type": "string"
                                },
                                "_id": {
                                    "type": "string"
                                },
                                "name": {
                                    "type": "string"
                                },
                                "ordered": {
                                    "type": "boolean"
                                },
                                "unique": {
                                    "type": "boolean"
                                },
                                "lowerBound": {
                                    "type": "integer"
                                },
                                "upperBound": {
                                    "type": "integer"
                                },
                                "many": {
                                    "type": "boolean"
                                },
                                "required": {
                                    "type": "boolean"
                                },
                                "eType": {
                                    "type": "object",
                                    "properties": {
                                        "eClass": {
                                            "type": "string"
                                        },
                                        "$ref": {
                                            "type": "string"
                                        }
                                    },
                                    "additionalProperties": false
                                },
                                "eTypeParameters": {
                                    "type": "array",
                                    "items": {
                                        "type": "object",
                                        "properties": {
                                            "eClass": {
                                                "type": "string"
                                            },
                                            "_id": {
                                                "type": "string"
                                            },
                                            "name": {
                                                "type": "string"
                                            }
                                        },
                                        "additionalProperties": false
                                    }
                                },
                                "eParameters": {
                                    "type": "array",
                                    "items": {
                                        "type": "object",
                                        "properties": {
                                            "eClass": {
                                                "type": "string"
                                            },
                                            "_id": {
                                                "type": "string"
                                            },
                                            "name": {
                                                "type": "string"
                                            },
                                            "ordered": {
                                                "type": "boolean"
                                            },
                                            "unique": {
                                                "type": "boolean"
                                            },
                                            "lowerBound": {
                                                "type": "integer"
                                            },
                                            "upperBound": {
                                                "type": "integer"
                                            },
                                            "many": {
                                                "type": "boolean"
                                            },
                                            "required": {
                                                "type": "boolean"
                                            },
                                            "eType": {
                                                "type": "object",
                                                "properties": {
                                                    "eClass": {
                                                        "type": "string"
                                                    },
                                                    "$ref": {
                                                        "type": "string"
                                                    }
                                                },
                                                "additionalProperties": false
                                            },
                                            "eGenericType": {
                                                "type": "object",
                                                "properties": {
                                                    "eClass": {
                                                        "type": "string"
                                                    },
                                                    "_id": {
                                                        "type": "string"
                                                    },
                                                    "eClassifier": {
                                                        "type": "object",
                                                        "properties": {
                                                            "eClass": {
                                                                "type": "string"
                                                            },
                                                            "$ref": {
                                                                "type": "string"
                                                            }
                                                        },
                                                        "additionalProperties": false
                                                    },
                                                    "eTypeArguments": {
                                                        "type": "array",
                                                        "items": {
                                                            "type": "object",
                                                            "properties": {
                                                                "eClass": {
                                                                    "type": "string"
                                                                },
                                                                "_id": {
                                                                    "type": "string"
                                                                }
                                                            },
                                                            "additionalProperties": false
                                                        }
                                                    }
                                                },
                                                "additionalProperties": false
                                            }
                                        },
                                        "additionalProperties": false
                                    }
                                }
                            },
                            "additionalProperties": false
                        }
                    },
                    "serializable": {
                        "type": "boolean"
                    },
                    "eLiterals": {
                        "type": "array",
                        "items": {
                            "type": "string"
                        }
                    },
                    "eAnnotations": {
                        "type": "array",
                        "items": {
                            "type": "object",
                            "properties": {
                                "eClass": {
                                    "type": "string"
                                },
                                "_id": {
                                    "type": "string"
                                },
                                "source": {
                                    "type": "string"
                                },
                                "details": {
                                    "type": "object"
                                }
                            },
                            "additionalProperties": false
                        }
                    }
                },
                "additionalProperties": false
            }
        }
    },
    "additionalProperties": false
};
