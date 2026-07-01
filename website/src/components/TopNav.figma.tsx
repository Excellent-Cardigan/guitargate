import figma from '@figma/code-connect'
import { TopNav } from './TopNav'
import type { AppNav } from '../types'

const mockNav: AppNav = { navigate: () => {}, currentScreen: 'brand-home', params: {} }

figma.connect(TopNav, 'https://www.figma.com/file/p6Rw4KmetacUPTtN93Veec?node-id=14-2', {
  example: () => <TopNav nav={mockNav} />,
})
