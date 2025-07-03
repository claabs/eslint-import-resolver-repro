import { importX } from 'eslint-plugin-import-x'
import tsParser from '@typescript-eslint/parser'
import { createTypeScriptImportResolver } from 'eslint-import-resolver-typescript'

export default [
    importX.flatConfigs.recommended,
    importX.flatConfigs.typescript,
    {
        settings: {
            'import-x/resolver-next': [
                createTypeScriptImportResolver()
            ]
        },
    },
    {
        files: ['**/*.ts'],
        languageOptions: {
            parser: tsParser,
            ecmaVersion: 'latest',
            sourceType: 'module',
        },
    },
]