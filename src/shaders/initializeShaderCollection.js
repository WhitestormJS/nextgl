import shaders from './shaders';
import {Shader} from './Shader';

Shader.collection = shaders; // For browser

export function initializeShaderCollection() { // For webpack
  Shader.collection = shaders;
}
