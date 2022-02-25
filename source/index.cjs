import FileSystem from 'fs-extra'
import Json from 'json5'
import Path from 'path'

module.exports = Json.parse(FileSystem.readFileSync(Path.resolve(__dirname, '../.eslintrc.json'), { 'encoding': 'utf-8' }))
