import figma from '@figma/code-connect'
import { AppHome } from './AppHome'
import type { AppNav } from '../../types'
import type { FeedStore } from '../../state/feedStore'

const mockNav: AppNav = { navigate: () => {}, currentScreen: 'app-home', params: {} }
const mockFeed: FeedStore = {
  bands: [], activity: [], notifications: [],
  addLoop: () => {}, addBand: () => '', toggleLike: () => {}, addReaction: () => {},
  toggleAddPart: () => {}, toggleLoadedToPedal: () => {}, sendLoopToBand: () => {}, markNotificationsRead: () => {},
}

figma.connect(AppHome, 'https://www.figma.com/file/p6Rw4KmetacUPTtN93Veec?node-id=38-2', {
  links: [{ name: 'Dev server', url: 'http://localhost:5173/' }],
  example: () => <AppHome nav={mockNav} feed={mockFeed} />,
})
