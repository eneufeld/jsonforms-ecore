export interface FeatureClass {
    eClass: string;
    feature: string;
}
export class FeatureToTypeMapper {
    private static eClass: string = 'http://www.eclipse.org/emf/2002/Ecore#//EClass';
    private static eEnum: string = 'http://www.eclipse.org/emf/2002/Ecore#//EEnum';
    private static eDataType: string = 'http://www.eclipse.org/emf/2002/Ecore#//EDataType';
    private static eReference: string = 'http://www.eclipse.org/emf/2002/Ecore#//EReference';
    private static eAttrubute: string = 'http://www.eclipse.org/emf/2002/Ecore#//EAttribute';
    private static eOperation: string = 'http://www.eclipse.org/emf/2002/Ecore#//EOperation';
    private static eParameter: string = 'http://www.eclipse.org/emf/2002/Ecore#//EParameter';
    private static eAnnotation: string = 'http://www.eclipse.org/emf/2002/Ecore#//EAnnotation';

    public static getPossibleTypes(features: Array<string>): Array<FeatureClass> {
        let result: Array<FeatureClass> = [];
        for (let feature of features) {
            switch (feature) {
                case 'eClassifiers':
                    result.push({ feature: feature, eClass: FeatureToTypeMapper.eClass });
                    result.push({ feature: feature, eClass: FeatureToTypeMapper.eEnum });
                    result.push({ feature: feature, eClass: FeatureToTypeMapper.eDataType });
                    break;
                case 'eStructuralFeatures':
                    result.push({ feature: feature, eClass: FeatureToTypeMapper.eReference });
                    result.push({ feature: feature, eClass: FeatureToTypeMapper.eAttrubute });
                    break;
                case 'eOperations':
                    result.push({ feature: feature, eClass: FeatureToTypeMapper.eOperation });
                    break;
                case 'eParameters':
                    result.push({ feature: feature, eClass: FeatureToTypeMapper.eParameter });
                    break;
                case 'eAnnotations':
                    result.push({ feature: feature, eClass: FeatureToTypeMapper.eAnnotation });
                    break;
                default: continue;
            }
        }
        return result;
    }
}
