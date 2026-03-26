/**
 * Figma Code Connect — Button
 * Figma file: https://www.figma.com/design/CVNmGt7NvV58jNCoqcvins/DS-AI
 *
 * Publish with:
 *   npx figma connect publish --token <your-figma-token>
 *
 * Get a token at: figma.com/settings → Personal access tokens
 * Required scopes: File Content (read), Code Connect (write)
 */
import figma from '@figma/code-connect'
import { Button } from './Button'

figma.connect(
  Button,
  'https://www.figma.com/design/CVNmGt7NvV58jNCoqcvins/DS-AI?node-id=11-892',
  {
    props: {
      variant: figma.enum('Variant', {
        Primary: 'primary',
        Secondary: 'secondary',
      }),
      disabled: figma.enum('State', {
        Default: false,
        Hover: false,
        Disable: true,
      }),
    },
    example: ({ variant, disabled }) => (
      <Button variant={variant} disabled={disabled}>
        Label
      </Button>
    ),
  },
)
