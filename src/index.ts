import React from 'react';
import formatTree from './formatter/formatTree';
import parseReactElement from './parser/parseReactElement';
import type { Options } from './options';

const reactElementToJsxString = (
  element: React.ReactNode,
  {
    filterProps = [],
    showDefaultProps = true,
    showFunctions = false,
    functionValue,
    tabStop = 2,
    useBooleanShorthandSyntax = true,
    useFragmentShortSyntax = true,
    sortProps = true,
    maxInlineAttributesLineLength,
    displayName,
  }: Partial<Options> = {}
) => {
  if (!element) {
    throw new Error('react-element-to-jsx-string: Expected a ReactElement');
  }

  const options = {
    filterProps,
    showDefaultProps,
    showFunctions,
    functionValue,
    tabStop,
    useBooleanShorthandSyntax,
    useFragmentShortSyntax,
    sortProps,
    maxInlineAttributesLineLength,
    displayName,
  };

  return formatTree(parseReactElement(element, options), options);
};

export default reactElementToJsxString;

export {
  inlineFunction,
  preserveFunctionLineBreak,
} from './formatter/formatFunction';