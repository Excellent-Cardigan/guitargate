import figma from '@figma/code-connect'
import { BottomTabBar } from './BottomTabBar'
import type { AppNav } from '../types'

type TabId = 'home' | 'learn' | 'play' | 'pedals'

const mockNav: AppNav = { navigate: () => {}, currentScreen: 'app-home', params: {} }

figma.connect(BottomTabBar, 'https://www.figma.com/file/p6Rw4KmetacUPTtN93Veec?node-id=19-86', {
  props: {
    active: figma.enum('Active', {
      Home:   'home',
      Learn:  'learn',
      Play:   'play',
      Pedals: 'pedals',
    }) as unknown as TabId,
  },
  example: ({ active }) => <BottomTabBar active={active} nav={mockNav} />,
})
