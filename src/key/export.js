import { configure } from '../lib/configure.js'
import errCode from 'err-code'

export const createExport = configure(api => {
  /**
   * @type {import('./types.js').KeyAPI['export']}
   */
  const exportKey = async (name, password, options = {}) => {
    throw errCode(new Error('Not implemented'), 'ERR_NOT_IMPLEMENTED')
  }

  return exportKey
})
