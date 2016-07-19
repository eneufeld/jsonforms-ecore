export let task_data = {
    "eClass": "http://www.eclipse.org/emf/2002/Ecore#//EPackage",
    "_id": "/",
    "name": "task",
    "nsURI": "http://eclipse/org/emf/ecp/makeithappen/model/task",
    "nsPrefix": "org.eclipse.emf.ecp.makeithappen.model.task",
    "eClassifiers": [{
        "eClass": "http://www.eclipse.org/emf/2002/Ecore#//EClass",
        "_id": "//Task",
        "name": "Task",
        "eOperations": [{
            "eClass": "http://www.eclipse.org/emf/2002/Ecore#//EOperation",
            "_id": "//Task/hasName",
            "name": "hasName",
            "eType": {
                "eClass": "http://www.eclipse.org/emf/2002/Ecore#//EDataType",
                "$ref": "http://www.eclipse.org/emf/2002/Ecore#//EBoolean"
            },
            "eParameters": [{
                "eClass": "http://www.eclipse.org/emf/2002/Ecore#//EParameter",
                "_id": "//Task/hasName/chain",
                "name": "chain",
                "eType": {
                    "eClass": "http://www.eclipse.org/emf/2002/Ecore#//EDataType",
                    "$ref": "http://www.eclipse.org/emf/2002/Ecore#//EDiagnosticChain"
                }
            }, {
                "eClass": "http://www.eclipse.org/emf/2002/Ecore#//EParameter",
                "_id": "//Task/hasName/context",
                "name": "context",
                "eGenericType": {
                    "eClass": "http://www.eclipse.org/emf/2002/Ecore#//EGenericType",
                    "_id": "//Task/hasName/context/@eGenericType",
                    "eClassifier": {
                        "eClass": "http://www.eclipse.org/emf/2002/Ecore#//EDataType",
                        "$ref": "http://www.eclipse.org/emf/2002/Ecore#//EMap"
                    },
                    "eTypeArguments": [{
                        "eClass": "http://www.eclipse.org/emf/2002/Ecore#//EGenericType",
                        "_id": "//Task/hasName/context/@eGenericType/@eTypeArguments.0"
                    }, {
                        "eClass": "http://www.eclipse.org/emf/2002/Ecore#//EGenericType",
                        "_id": "//Task/hasName/context/@eGenericType/@eTypeArguments.1"
                    }]
                }
            }]
        }],
        "eStructuralFeatures": [{
            "eClass": "http://www.eclipse.org/emf/2002/Ecore#//EAttribute",
            "_id": "//Task/name",
            "name": "name",
            "eType": {
                "eClass": "http://www.eclipse.org/emf/2002/Ecore#//EDataType",
                "$ref": "http://www.eclipse.org/emf/2002/Ecore#//EString"
            }
        }, {
            "eClass": "http://www.eclipse.org/emf/2002/Ecore#//EAttribute",
            "_id": "//Task/description",
            "name": "description",
            "eType": {
                "eClass": "http://www.eclipse.org/emf/2002/Ecore#//EDataType",
                "$ref": "http://www.eclipse.org/emf/2002/Ecore#//EString"
            }
        }, {
            "eClass": "http://www.eclipse.org/emf/2002/Ecore#//EReference",
            "_id": "//Task/assignee",
            "name": "assignee",
            "eType": {
                "$ref": "//User"
            },
            "eOpposite": {
                "$ref": "//User/tasks"
            }
        }, {
            "eClass": "http://www.eclipse.org/emf/2002/Ecore#//EAttribute",
            "_id": "//Task/dueDate",
            "name": "dueDate",
            "eType": {
                "eClass": "http://www.eclipse.org/emf/2002/Ecore#//EDataType",
                "$ref": "http://www.eclipse.org/emf/2002/Ecore#//EDate"
            }
        }, {
            "eClass": "http://www.eclipse.org/emf/2002/Ecore#//EReference",
            "_id": "//Task/subTasks",
            "name": "subTasks",
            "upperBound": -1,
            "containment": true,
            "resolveProxies": false,
            "eType": {
                "$ref": "//Task"
            }
        }, {
            "eClass": "http://www.eclipse.org/emf/2002/Ecore#//EAttribute",
            "_id": "//Task/done",
            "name": "done",
            "eType": {
                "eClass": "http://www.eclipse.org/emf/2002/Ecore#//EDataType",
                "$ref": "http://www.eclipse.org/emf/2002/Ecore#//EBoolean"
            }
        }]
    }, {
        "eClass": "http://www.eclipse.org/emf/2002/Ecore#//EClass",
        "_id": "//User",
        "name": "User",
        "eStructuralFeatures": [{
            "eClass": "http://www.eclipse.org/emf/2002/Ecore#//EAttribute",
            "_id": "//User/firstName",
            "name": "firstName",
            "eType": {
                "eClass": "http://www.eclipse.org/emf/2002/Ecore#//EDataType",
                "$ref": "http://www.eclipse.org/emf/2002/Ecore#//EString"
            }
        }, {
            "eClass": "http://www.eclipse.org/emf/2002/Ecore#//EAttribute",
            "_id": "//User/lastName",
            "name": "lastName",
            "lowerBound": 1,
            "eType": {
                "eClass": "http://www.eclipse.org/emf/2002/Ecore#//EDataType",
                "$ref": "http://www.eclipse.org/emf/2002/Ecore#//EString"
            }
        }, {
            "eClass": "http://www.eclipse.org/emf/2002/Ecore#//EAttribute",
            "_id": "//User/gender",
            "name": "gender",
            "eType": {
                "$ref": "//Gender"
            }
        }, {
            "eClass": "http://www.eclipse.org/emf/2002/Ecore#//EAttribute",
            "_id": "//User/active",
            "name": "active",
            "eType": {
                "eClass": "http://www.eclipse.org/emf/2002/Ecore#//EDataType",
                "$ref": "http://www.eclipse.org/emf/2002/Ecore#//EBoolean"
            }
        }, {
            "eClass": "http://www.eclipse.org/emf/2002/Ecore#//EAttribute",
            "_id": "//User/timeOfRegistration",
            "name": "timeOfRegistration",
            "eType": {
                "eClass": "http://www.eclipse.org/emf/2002/Ecore#//EDataType",
                "$ref": "http://www.eclipse.org/emf/2002/Ecore#//EDate"
            }
        }, {
            "eClass": "http://www.eclipse.org/emf/2002/Ecore#//EAttribute",
            "_id": "//User/weight",
            "name": "weight",
            "eType": {
                "eClass": "http://www.eclipse.org/emf/2002/Ecore#//EDataType",
                "$ref": "http://www.eclipse.org/emf/2002/Ecore#//EDouble"
            }
        }, {
            "eClass": "http://www.eclipse.org/emf/2002/Ecore#//EAttribute",
            "_id": "//User/heigth",
            "name": "heigth",
            "eType": {
                "eClass": "http://www.eclipse.org/emf/2002/Ecore#//EDataType",
                "$ref": "http://www.eclipse.org/emf/2002/Ecore#//EInt"
            }
        }, {
            "eClass": "http://www.eclipse.org/emf/2002/Ecore#//EAttribute",
            "_id": "//User/nationality",
            "name": "nationality",
            "eType": {
                "$ref": "//Nationality"
            }
        }, {
            "eClass": "http://www.eclipse.org/emf/2002/Ecore#//EAttribute",
            "_id": "//User/dateOfBirth",
            "name": "dateOfBirth",
            "eType": {
                "$ref": "//DateOfBirth"
            }
        }, {
            "eClass": "http://www.eclipse.org/emf/2002/Ecore#//EAttribute",
            "_id": "//User/email",
            "name": "email",
            "lowerBound": 1,
            "eType": {
                "eClass": "http://www.eclipse.org/emf/2002/Ecore#//EDataType",
                "$ref": "http://www.eclipse.org/emf/2002/Ecore#//EString"
            }
        }, {
            "eClass": "http://www.eclipse.org/emf/2002/Ecore#//EReference",
            "_id": "//User/tasks",
            "name": "tasks",
            "upperBound": -1,
            "eType": {
                "$ref": "//Task"
            },
            "eOpposite": {
                "$ref": "//Task/assignee"
            }
        }]
    }, {
        "eClass": "http://www.eclipse.org/emf/2002/Ecore#//EClass",
        "_id": "//UserGroup",
        "name": "UserGroup",
        "eStructuralFeatures": [{
            "eClass": "http://www.eclipse.org/emf/2002/Ecore#//EAttribute",
            "_id": "//UserGroup/name",
            "name": "name",
            "eType": {
                "eClass": "http://www.eclipse.org/emf/2002/Ecore#//EDataType",
                "$ref": "http://www.eclipse.org/emf/2002/Ecore#//EString"
            }
        }, {
            "eClass": "http://www.eclipse.org/emf/2002/Ecore#//EReference",
            "_id": "//UserGroup/users",
            "name": "users",
            "upperBound": -1,
            "containment": true,
            "resolveProxies": false,
            "eType": {
                "$ref": "//User"
            }
        }]
    }, {
        "eClass": "http://www.eclipse.org/emf/2002/Ecore#//EEnum",
        "_id": "//Gender",
        "name": "Gender",
        "eLiterals": ["Male", "Female"]
    }, {
        "eClass": "http://www.eclipse.org/emf/2002/Ecore#//EEnum",
        "_id": "//Nationality",
        "name": "Nationality",
        "eLiterals": ["German", "French", "UK", "US", "Spanish", "Italian", "Russian"]
    }, {
        "eClass": "http://www.eclipse.org/emf/2002/Ecore#//EDataType",
        "_id": "//DateOfBirth",
        "name": "DateOfBirth",
        "instanceClassName": "javax.xml.datatype.XMLGregorianCalendar",
        "eAnnotations": [{
            "eClass": "http://www.eclipse.org/emf/2002/Ecore#//EAnnotation",
            "_id": "//DateOfBirth/%http:%2F%2F%2Forg%2Feclipse%2Femf%2Fecore%2Futil%2FExtendedMetaData%",
            "source": "http:///org/eclipse/emf/ecore/util/ExtendedMetaData",
            "details": {
                "baseType": "http://www.eclipse.org/emf/2003/XMLType#date"
            }
        }]
    }]
};
