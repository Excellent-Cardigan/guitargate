import figma from '@figma/code-connect'
import { OnboardingPage } from './OnboardingPage'
import type { AppNav } from '../../types'

const mockNav: AppNav = { navigate: () => {}, currentScreen: 'onboarding', params: {} }

figma.connect(OnboardingPage, 'https://www.figma.com/file/p6Rw4KmetacUPTtN93Veec?node-id=31-30', {
  links: [{ name: 'Dev server', url: 'http://localhost:5173/' }],
  example: () => <OnboardingPage nav={mockNav} />,
})
