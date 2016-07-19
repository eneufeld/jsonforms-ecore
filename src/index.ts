import "angular";
import "jsonforms";
import "./controls/edatatype-control.ts";

import "bootstrap/dist/css/bootstrap.css";

import "jsonforms/dist/jsonforms.css";
import "jsonforms/dist/jsonforms-bootstrap.css";

import {task_data} from "./data/task";
import {ecore_jsonschema} from "./data/ecore";
import {eattributeview} from "./views/eattribute";
import {eclassView} from "./views/eclass";
import {edatatypeview} from "./views/edatatype";
import {eenumview} from "./views/eenum";
import {epackageview} from "./views/epackage";
import {ereferenceview} from "./views/ereference";
var taskEcore:any =task_data;

var ecore_schema:any = ecore_jsonschema;


angular.module("app", ["jsonforms","ecore.custom.controls"]);

angular.module("app").run(["UiSchemaRegistry", function(UiSchemaRegistry:any) {
    UiSchemaRegistry.register(eattributeview, function (schema:any, data:any){
        if(data.eClass==="http://www.eclipse.org/emf/2002/Ecore#//EAttribute") {return 1};
        return -1;
    });
    UiSchemaRegistry.register(eclassView, function (schema,data){
        if(data.eClass==="http://www.eclipse.org/emf/2002/Ecore#//EClass") {return 1};
        return -1;
    });
    UiSchemaRegistry.register(edatatypeview, function (schema,data){
        if(data.eClass==="http://www.eclipse.org/emf/2002/Ecore#//EDataType") {return 1};
        return -1;
    });
    UiSchemaRegistry.register(eenumview, function (schema,data){
        if(data.eClass==="http://www.eclipse.org/emf/2002/Ecore#//EEnum") {return 1};
        return -1;
    });
    UiSchemaRegistry.register(epackageview, function (schema,data){
        if(data.eClass==="http://www.eclipse.org/emf/2002/Ecore#//EPackage") {return 1};
        return -1;
    });
    UiSchemaRegistry.register(ereferenceview, function (schema,data){
        if(data.eClass==="http://www.eclipse.org/emf/2002/Ecore#//EReference") {return 1};
        return -1;
    });
}]);

angular.module("app").controller("myController",function(){
    return {data:taskEcore,schema:ecore_schema,usersUiSchema : {
        "type":"MasterDetailLayout",
        "scope": {
            "$ref": "#"
        }
    }};
});
angular.bootstrap(document, ["app"], {
    strictDi: true
});
