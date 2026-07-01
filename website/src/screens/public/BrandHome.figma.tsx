import figma from '@figma/code-connect'
import { BrandHome } from './BrandHome'
import type { AppNav } from '../../types'

const mockNav: AppNav = { navigate: () => {}, currentScreen: 'brand-home', params: {} }

figma.connect(BrandHome, 'https://www.figma.com/file/p6Rw4KmetacUPTtN93Veec?node-id=21-16', {
  links: [{ name: 'Dev server', url: 'http://localhost:5173/' }],
  example: () => <BrandHome nav={mockNav} />,
})
