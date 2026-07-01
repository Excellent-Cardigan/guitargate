import figma from '@figma/code-connect'
import { AppLearn } from './AppLearn'
import type { AppNav } from '../../types'

const mockNav: AppNav = { navigate: () => {}, currentScreen: 'app-learn', params: {} }

figma.connect(AppLearn, 'https://www.figma.com/file/p6Rw4KmetacUPTtN93Veec?node-id=40-25', {
  links: [{ name: 'Dev server', url: 'http://localhost:5173/' }],
  example: () => <AppLearn nav={mockNav} />,
})
