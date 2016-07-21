
import "jsonforms";
import {AbstractControl} from "jsonforms";
import {IPathResolver,IUISchemaElement} from "jsonforms";

class EDataTypeDirective implements ng.IDirective {
    template = `<jsonforms-control>
    <select id="{{vm.id}}"
              class="form-control jsf-control-enum"
              ng-change='vm.modelChanged()'
              ng-model="vm.modelValue[vm.fragment].$ref"
              ng-readonly="vm.uiSchema.readOnly">
              <option ng-repeat="option in vm.options" value="{{option.value}}">{{option.name}}</option>
      </select>
    </jsonforms-control>`;
    controller = EDataTypeControl;
    controllerAs = 'vm';
}

class EDataTypeControl extends AbstractControl {
    static $inject = ['$scope', 'PathResolver'];
    private dataTypes = [
        {value:"http://www.eclipse.org/emf/2002/Ecore#//EBoolean", name:"EBoolean"},
        {value:"http://www.eclipse.org/emf/2002/Ecore#//EString", name:"EString"},
        {value:"http://www.eclipse.org/emf/2002/Ecore#//EDate", name:"EDate"},
        {value:"http://www.eclipse.org/emf/2002/Ecore#//EDouble", name:"EDouble"},
        {value:"http://www.eclipse.org/emf/2002/Ecore#//EInt", name:"EInt"}
    ];
    constructor(scope: ng.IScope, pathResolver: IPathResolver) {
        super(scope, pathResolver);
        // evil dirty hack to retrieve all enums
        let classifiers=this.data.eClassifiers;
        if(classifiers===undefined){
            let data = scope.$root['$$childHead']['$$childHead']['data'];
            classifiers=data.eClassifiers;
        }

        let enums = classifiers.filter(classifier =>
            classifier.eClass==="http://www.eclipse.org/emf/2002/Ecore#//EEnum"
        );
        enums.forEach(enumValue => this.dataTypes.push({value:enumValue._id,name:enumValue.name}));

    }
    private get options(){
            return this.dataTypes;
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
        if(element['scope']['$ref'].endsWith('eType') && dataObject.eClass==="http://www.eclipse.org/emf/2002/Ecore#//EAttribute"){
            return 10;
        }
        return -1;
    };

export default angular
    .module('app')
    .directive('edatatypeControl', () => new EDataTypeDirective())
    .run(['RendererService', RendererService => {
        RendererService.register('edatatype-control', EDataTypeRendererTester)
    }])
    .name;
