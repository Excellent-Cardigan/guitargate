import figma from '@figma/code-connect'
import { AppPedals } from './AppPedals'
import type { AppNav } from '../../types'

const mockNav: AppNav = { navigate: () => {}, currentScreen: 'app-pedals', params: {} }

figma.connect(AppPedals, 'https://www.figma.com/file/p6Rw4KmetacUPTtN93Veec?node-id=43-65', {
  links: [{ name: 'Dev server', url: 'http://localhost:5173/' }],
  example: () => <AppPedals nav={mockNav} />,
})
