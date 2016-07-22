
import {IPathResolver} from 'jsonforms';
import {AbstractControl} from 'jsonforms';
import {SchemaElement} from 'jsonforms';
import {IUISchemaElement} from 'jsonforms';
import {FeatureToTypeMapper, FeatureClass} from './util';

class MasterDetailDirective implements ng.IDirective {
    restrict = 'E';
    templateUrl = 'masterdetail.html';
    controller = MasterDetailController;
    controllerAs = 'vm';
}
interface MasterDetailControllerScope extends ng.IScope {
}
class MasterDetailController extends AbstractControl {
    static $inject = ['$scope', 'PathResolver'];
    private subSchema: SchemaElement;
    private selectedChild: any;
    private selectedSchema: SchemaElement;
    private arrayData;
    constructor(scope: MasterDetailControllerScope, pathResolver: IPathResolver) {
        super(scope, pathResolver);
        this.scope['select'] = (child, schema) => this.select(child, schema);
        this.subSchema = this.pathResolver.resolveSchema(this.schema, this.schemaPath);
        this.arrayData = [this.data];
    }
    public select(selectedChild: any, selectedSchema: SchemaElement) {
        this.selectedChild = selectedChild;
        this.selectedSchema = selectedSchema;
        this.scope['selectedChild'] = selectedChild;
    }

    public computeLabel(node) {
        return node.name || node.source || (node.eClass && node.eClass.substring(node.eClass.lastIndexOf('//') + 2)) || node._id || JSON.stringify(node);
    }

    public computeIcon(node) {
        let eClass = node.eClass;
        if (eClass === undefined)
            return "";
        let iconName = eClass.substring(eClass.lastIndexOf('//'));
        return 'icons/' + iconName + '.gif';

    }
}
const MasterDetailControlRendererTester = function(element: IUISchemaElement,
    dataSchema: any,
    dataObject: any,
    pathResolver: IPathResolver) {
    if (element.type === 'MasterDetailLayout'
        && dataSchema !== undefined
        && dataSchema.type === 'object') {
        return 3;
    }
    return -1;
};

class MasterDetailCollectionController {
    static $inject = ['$scope', 'ngDialog'];

    private selectedElement;
    private currentSchema;
    private currentClassFeatureMap;

    constructor(private scope, private ngDialog) {
    }

    public getSelectedElement() {
        return this.selectedElement;
    }

    public addChild(feature, eClass) { // to selectedElement
        if (!this.selectedElement[feature]) {
            this.selectedElement[feature] = [];
        }
        let newNode = { eClass: eClass };
        this.selectedElement[feature].push(newNode);
    }

	public canHaveChildren(schema): boolean {
		return this.getPossibleChildren(schema).length !== 0;
	}

	private getPossibleChildren(schema):Array<string> {
		let result: Array<string> = [];
		let schemaProperties = schema.properties;
		for (let property in schemaProperties) {
			if (schemaProperties[property].type === 'array' && schemaProperties[property].items.type === 'object') {
                result.push(property);
            }
		}
		return result;
	}

    public remove(scope, key) {
        scope.remove();
        let parentNode = scope.$parentNodeScope.$modelValue;
        if (parentNode[key].length === 0) {
            delete parentNode[key];
        }
    }

    public toggle(scope) {
        scope.toggle();
    };

    public selectElement(node, schema) {
        if (this.selectedElement !== node) {
            this.selectedElement = node;
            this.currentSchema = schema;
            this.scope.select(node, schema);
        }
    }

    public isElementSelected(node) {
        return this.selectedElement === node;
    }

    public showAddOverlay() {
        this.computeClassFeatureMap(this.currentSchema);
        this.ngDialog.open({ template: 'addDialog', scope: this.scope, className: 'ngdialog-theme-default' });
    }

    private computeClassFeatureMap(schema) {
        let possibleFeatures: Array<string> = this.getPossibleChildren(schema);
        this.currentClassFeatureMap = FeatureToTypeMapper.getPossibleTypes(possibleFeatures);
    }

    public getCurrentClassFeatureMap() {
        return this.currentClassFeatureMap;
    }

    public computeArrayKeys(schema) {
        var keys = [];
        angular.forEach(schema.properties, function(value, key) {
            if (value.type === 'array' && value.items.type === 'object') {
                keys.push(key);
            }
        });
        return keys;
    };
}
class MasterDetailCollectionDirective implements ng.IDirective {
    restrict = 'E';
    bindToController = {
        data: '=',
        schema: '=',
        label: '=',
        icon: '='
    };
    scope = true;
    controller = MasterDetailCollectionController;
    templateUrl = 'masterdetail_tree.html';
    controllerAs = 'md';
}

const masterDetailTemplate = `
<div class="jsf-masterdetail">
    <!-- Master -->
    <div class="jsf-masterdetail-master">
        <jsonforms-masterdetail-collection2 label="vm.computeLabel" icon="vm.computeIcon"
                                           data="vm.arrayData" schema="vm.subSchema">
        </jsonforms-masterdetail-collection2>
    </div>
    <!-- Detail -->
    <div class="jsf-masterdetail-detail">
        <jsonforms schema="vm.selectedSchema"
                   data="vm.selectedChild"
                   ng-if="vm.selectedChild"></jsonforms>
    </div>
</div>`;

const masterDetailCollectionTemplate = `
<script type="text/ng-template" id="nodes_renderer.html">
        <div ui-tree-handle class="tree-node tree-node-content" ng-class="{'tree-node-selected': md.isElementSelected(node)}" ng-click="md.selectElement(node,currentSchema)">
			<span class="expand">
				<a ng-click="md.toggle(this)" ng-if="arrayKeys.length!==0">
					<i class="material-icons" ng-show="collapsed">chevron_right</i>
					<i class="material-icons" ng-show="!collapsed">expand_more</i>
				</a>
            </span>
            <span class="tree-node-icon"><img ng-src="{{md.icon(node)}}"></span>
            <span class="tree-node-label">{{md.label(node)}}
			<a ng-click="md.selectElement(node, currentSchema); md.showAddOverlay()" ng-if="md.canHaveChildren(currentSchema)">
            	<i class="material-icons">add</i>
            </a>
            <a ng-click="md.remove(this, key)">
            	<i class="material-icons">clear</i>
            </a>
			</span>
        </div>
        <div ng-repeat="key in arrayKeys" ng-init="currentSchema=currentSchema.properties[key].items">
	        <ol ui-tree-nodes="" ng-model="node[key]" ng-class="{hidden: collapsed}">
	            <li ng-repeat="node in node[key]" ui-tree-node ng-init= "arrayKeys = md.computeArrayKeys(currentSchema)" ng-include="'nodes_renderer.html'">
	            </li>
	        </ol>
	    </div>
</script>
<script type="text/ng-template" id="addDialog">
    <div class="tree-node tree-node-content" ng-repeat="featureClass in md.getCurrentClassFeatureMap()" ng-click="md.addChild(featureClass.feature, featureClass.eClass); closeThisDialog()">
        <span class="tree-node-icon"><img ng-src="{{md.icon({ eClass: featureClass.eClass })}}"></span>
        <span class="tree-node-label">{{md.label({ eClass: featureClass.eClass })}}</span>
    </div>
</script>
<div>
    <div ui-tree id="tree-root" data-drag-enabled="false">
        <ol ui-tree-nodes ng-model="md.data" ng-init="currentSchema=md.schema">
            <li ng-repeat="node in md.data" ui-tree-node ng-init= "arrayKeys = md.computeArrayKeys(currentSchema)" ng-include="'nodes_renderer.html'"></li>
        </ol>
    </div>
</div>`;

export default angular
    .module('app')
    .directive('masterDetail2', () => new MasterDetailDirective())
    .run(['RendererService', RendererService =>
        RendererService.register('master-detail2', MasterDetailControlRendererTester)
    ])
    .run(['$templateCache', $templateCache => {
        $templateCache.put('masterdetail.html', masterDetailTemplate);
    }])
    .directive('jsonformsMasterdetailCollection2', () => new MasterDetailCollectionDirective())
    .run(['$templateCache', $templateCache => {
        $templateCache.put('masterdetail_tree.html', masterDetailCollectionTemplate);
    }])
    .name;
