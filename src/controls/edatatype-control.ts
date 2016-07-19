
import "jsonforms";
import {AbstractControl} from "jsonforms";
import {IPathResolver,IUISchemaElement} from "jsonforms";

class EDataTypeDirective implements ng.IDirective {
    template = `<jsonforms-control>
        <input type="string"
             id="{{vm.id}}"
             class="form-control jsf-control-string"
             ng-model="vm.modelValue[vm.fragment].$ref"
             ng-change='vm.modelChanged()'
             ng-readonly="vm.uiSchema.readOnly"
             list="ecore_datatypes"/>
        <datalist id="ecore_datatypes">
            <option value="http://www.eclipse.org/emf/2002/Ecore#//EBoolean">
            <option value="http://www.eclipse.org/emf/2002/Ecore#//EString">
            <option value="http://www.eclipse.org/emf/2002/Ecore#//EDate">
            <option value="http://www.eclipse.org/emf/2002/Ecore#//EDouble">
            <option value="http://www.eclipse.org/emf/2002/Ecore#//EInt">

        </datalist>
    </jsonforms-control>`;
    controller = EDataTypeControl;
    controllerAs = 'vm';
}



class EDataTypeControl extends AbstractControl {
    static $inject = ['$scope', 'PathResolver'];
    constructor(scope: ng.IScope, pathResolver: IPathResolver) {
        super(scope, pathResolver);
    }
}

let EDataTypeRendererTester = function (element: IUISchemaElement,
                     dataSchema: any, dataObject: any, pathResolver: IPathResolver ) {

        if (element.type !== 'Control') {
            return -1;
        }
        let currentDataSchema = pathResolver.resolveSchema(dataSchema, element['scope']['$ref']);
        if (currentDataSchema === undefined || currentDataSchema.type !== 'object') {
            return -1;
        }
        if(element['scope']['$ref'].endsWith('eType') && dataObject.hasOwnProperty('eClass')){
            return 10;
        }
        return -1;
    };

export default angular
    .module('ecore.custom.controls', ['jsonforms.renderers.controls'])
    .directive('edatatypeControl', () => new EDataTypeDirective())
    .run(['RendererService', RendererService => {
        RendererService.register('edatatype-control', EDataTypeRendererTester)
    }])
    .name;
