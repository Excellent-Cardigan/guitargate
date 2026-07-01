import figma from '@figma/code-connect'
import { VoxboxPage } from './VoxboxPage'
import type { AppNav } from '../../types'

const mockNav: AppNav = { navigate: () => {}, currentScreen: 'voxbox', params: {} }

figma.connect(VoxboxPage, 'https://www.figma.com/file/p6Rw4KmetacUPTtN93Veec?node-id=33-50', {
  links: [{ name: 'Dev server', url: 'http://localhost:5173/' }],
  example: () => <VoxboxPage nav={mockNav} />,
})
