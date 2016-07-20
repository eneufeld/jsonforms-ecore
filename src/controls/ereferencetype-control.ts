
import "jsonforms";
import {AbstractControl} from "jsonforms";
import {IPathResolver,IUISchemaElement} from "jsonforms";

class EReferenceTypeDirective implements ng.IDirective {
    template = `<jsonforms-control>
    <select id="{{vm.id}}"
              class="form-control jsf-control-enum"
              ng-change='vm.modelChanged()'
              ng-model="vm.modelValue[vm.fragment].$ref"
              ng-readonly="vm.uiSchema.readOnly">
              <option ng-repeat="option in vm.options" value="{{option.value}}">{{option.name}}</option>
      </select>
    </jsonforms-control>`;
    controller = EReferenceTypeControl;
    controllerAs = 'vm';
}

class EReferenceTypeControl extends AbstractControl {
    static $inject = ['$scope', 'PathResolver'];
    private dataTypes = [];
    constructor(scope: ng.IScope, pathResolver: IPathResolver) {
        super(scope, pathResolver);
        // evil dirty hack to retrieve all enums
        let classifiers=this.data.eClassifiers;
        if(classifiers===undefined){
            let data = scope.$root['$$childHead']['$$childHead']['data'];
            classifiers=data.eClassifiers;
        }

        let eClasses = classifiers.filter(classifier =>
            classifier.eClass==="http://www.eclipse.org/emf/2002/Ecore#//EClass"
        );
        eClasses.forEach(eclassValue => this.dataTypes.push({value:eclassValue._id,name:eclassValue.name}));

    }
    private get options(){
            return this.dataTypes;
    }
}

let EReferenceTypeRendererTester = function (element: IUISchemaElement,
                     dataSchema: any, dataObject: any, pathResolver: IPathResolver ) {

        if (element.type !== 'Control') {
            return -1;
        }
        let currentDataSchema = pathResolver.resolveSchema(dataSchema, element['scope']['$ref']);
        if (currentDataSchema === undefined || currentDataSchema.type !== 'object') {
            return -1;
        }
        if(element['scope']['$ref'].endsWith('eType') && dataObject.eClass==="http://www.eclipse.org/emf/2002/Ecore#//EReference"){
            return 10;
        }
        return -1;
    };

export default angular
    .module('ecore.custom.controls')
    .directive('ereferencetypeControl', () => new EReferenceTypeDirective())
    .run(['RendererService', RendererService => {
        RendererService.register('ereferencetype-control', EReferenceTypeRendererTester)
    }])
    .name;
