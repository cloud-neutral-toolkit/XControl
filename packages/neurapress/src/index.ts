"use client"

import { convertToWechat, defaultOptions } from './lib/markdown'
import { getExampleContent } from './lib/utils/loadExampleContent'

export * from './editor'
export * from './lib/markdown'

export const neurapressSample = getExampleContent()

export function renderMarkdown(markdown: string): string {
  return convertToWechat(markdown, defaultOptions)
}
