import figma from '@figma/code-connect'
import { StorePage } from './StorePage'
import type { AppNav } from '../../types'

const mockNav: AppNav = { navigate: () => {}, currentScreen: 'store', params: {} }

figma.connect(StorePage, 'https://www.figma.com/file/p6Rw4KmetacUPTtN93Veec?node-id=34-63', {
  links: [{ name: 'Dev server', url: 'http://localhost:5173/' }],
  example: () => <StorePage nav={mockNav} />,
})
