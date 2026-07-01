import figma from '@figma/code-connect'
import { Placeholder } from './Placeholder'

figma.connect(Placeholder, 'https://www.figma.com/file/p6Rw4KmetacUPTtN93Veec?node-id=13-2', {
  example: () => <Placeholder label="media / image" height={200} />,
})
