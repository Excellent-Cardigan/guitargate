import figma from '@figma/code-connect'
import { AppPlay } from './AppPlay'
import type { AppNav } from '../../types'
import type { FeedStore } from '../../state/feedStore'

const mockNav: AppNav = { navigate: () => {}, currentScreen: 'app-play', params: {} }
const mockFeed: FeedStore = {
  bands: [], activity: [], notifications: [],
  addLoop: () => {}, addBand: () => '', toggleLike: () => {}, addReaction: () => {},
  toggleAddPart: () => {}, toggleLoadedToPedal: () => {}, sendLoopToBand: () => {}, markNotificationsRead: () => {},
}

figma.connect(AppPlay, 'https://www.figma.com/file/p6Rw4KmetacUPTtN93Veec?node-id=41-45', {
  links: [{ name: 'Dev server', url: 'http://localhost:5173/' }],
  example: () => <AppPlay nav={mockNav} feed={mockFeed} />,
})
