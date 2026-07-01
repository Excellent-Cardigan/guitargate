import figma from '@figma/code-connect'
import { CheckoutPage } from './CheckoutPage'
import type { AppNav } from '../../types'

const mockNav: AppNav = { navigate: () => {}, currentScreen: 'checkout', params: {} }

figma.connect(CheckoutPage, 'https://www.figma.com/file/p6Rw4KmetacUPTtN93Veec?node-id=30-30', {
  links: [{ name: 'Dev server', url: 'http://localhost:5173/' }],
  example: () => <CheckoutPage nav={mockNav} />,
})
