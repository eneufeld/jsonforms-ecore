
import {IPathResolver} from 'jsonforms';
import {AbstractControl} from 'jsonforms';
import {SchemaElement} from 'jsonforms';
import {IUISchemaElement} from 'jsonforms';

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
		this.arrayData=[this.data];
	}
	public select(selectedChild: any, selectedSchema: SchemaElement) {
		this.selectedChild = selectedChild;
		this.selectedSchema = selectedSchema;
		this.scope['selectedChild'] = selectedChild;
	}
	public computeLabel(node) {
		return node.name||JSON.stringify(node);
	}
	public computeIcon(node) {
		let eClass = node.eClass;
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
	static $inject = ['$scope'];

	selectedElement;

	constructor(private scope) {
	}

	public remove(scope) {
		scope.remove();
	}

	toggle(scope) {
		scope.toggle();
	};

	selectElement(node,schema) {
		this.selectedElement = node;
		this.scope.select(node, schema);

	}

	isElementSelected(node) {
		return this.selectedElement == node;
	}

	computeArrayKeys(node,oldKey) {
	var subnodes = [];
	angular.forEach(node, function (value, key) {
		if (Array.isArray(value) && value.length > 0 && typeof value[0] === 'object') {
			subnodes.push(key);
		}
	});
	return subnodes;
	};
}
class MasterDetailCollectionDirective implements ng.IDirective {
	restrict = 'E';
	bindToController = {
		data: '=',
		schema:'=',
		label: '=',
		icon: '='
	};
	scope=true;
	controller = MasterDetailCollectionController;
	templateUrl = 'directive.html';
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
				<a ng-if="md.computeArrayKeys(node,key).length!==0" ng-click="md.toggle(this)">
					<i class="material-icons" ng-show="collapsed">chevron_right</i>
					<i class="material-icons" ng-show="!collapsed">expand_more</i>
				</a>
            </span>
            <span class="tree-node-icon"><img ng-src="{{md.icon(node)}}"></span>
            <span class="tree-node-label">{{md.label(node)}}</span>
            <a ng-click="md.remove(this)">
            	<i class="material-icons">clear</i>
            </a>
        </div>
        <div ng-repeat="key in md.computeArrayKeys(node)" ng-init="currentSchema=currentSchema.properties[key].items">
        <ol ui-tree-nodes="" ng-model="node[key]" ng-class="{hidden: collapsed}">
            <li ng-repeat="node in node[key]" ui-tree-node ng-include="'nodes_renderer.html'">
            </li>
        </ol>
    </div>
</script>
<div>
    <div ui-tree id="tree-root" data-drag-enabled="false">
        <div ng-repeat="key in ['']">
        <ol ui-tree-nodes ng-model="md.data" ng-init="currentSchema=md.schema">
            <li ng-repeat="node in md.data" ui-tree-node ng-include="'nodes_renderer.html'"></li>
        </ol>
        </div>
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
		$templateCache.put('directive.html', masterDetailCollectionTemplate);
	}])
	.name;
