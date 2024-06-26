import type { TextElementModel } from '../../../../surface-block/element-model/text.js';
import type {
  ConnectorElementModel,
  ShapeElementModel,
} from '../../../../surface-block/index.js';
import type { EdgelessConnectorLabelEditor } from './edgeless-connector-label-editor.js';
import type { EdgelessShapeTextEditor } from './edgeless-shape-text-editor.js';
import type { EdgelessTextEditor } from './edgeless-text-editor.js';

export type EdgelessCanvasTextEditor =
  | EdgelessShapeTextEditor
  | EdgelessTextEditor
  | EdgelessConnectorLabelEditor;

export type EdgelessCanvasTextElement =
  | ShapeElementModel
  | TextElementModel
  | ConnectorElementModel;
export type EdgelessCanvasTextElementType = 'shape' | 'text' | 'connector';
