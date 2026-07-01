import figma from '@figma/code-connect'
import { TeleportPage } from './TeleportPage'
import type { AppNav } from '../../types'

const mockNav: AppNav = { navigate: () => {}, currentScreen: 'teleport', params: {} }

figma.connect(TeleportPage, 'https://www.figma.com/file/p6Rw4KmetacUPTtN93Veec?node-id=32-34', {
  links: [{ name: 'Dev server', url: 'http://localhost:5173/' }],
  example: () => <TeleportPage nav={mockNav} />,
})
