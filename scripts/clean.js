import { rm } from 'node:fs/promises'

rm('dist', { force: true, recursive: true })
