import figma from '@figma/code-connect'
import { MembershipPage } from './MembershipPage'
import type { AppNav } from '../../types'

const mockNav: AppNav = { navigate: () => {}, currentScreen: 'membership', params: {} }

figma.connect(MembershipPage, 'https://www.figma.com/file/p6Rw4KmetacUPTtN93Veec?node-id=28-16', {
  links: [{ name: 'Dev server', url: 'http://localhost:5173/' }],
  example: () => <MembershipPage nav={mockNav} />,
})
