import figma from '@figma/code-connect'
import { AppAccount } from './AppAccount'
import type { AppNav } from '../../types'

const mockNav: AppNav = { navigate: () => {}, currentScreen: 'app-account', params: {} }

figma.connect(AppAccount, 'https://www.figma.com/file/p6Rw4KmetacUPTtN93Veec?node-id=44-85', {
  links: [{ name: 'Dev server', url: 'http://localhost:5173/' }],
  example: () => <AppAccount nav={mockNav} />,
})
